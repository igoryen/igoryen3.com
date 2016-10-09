<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-10-01
 * Time: 15:49
 */

namespace AppBundle\Hirakata;

// placed under the namespace declaration
// otherwise there is the error:
// "global code should be enclosed in global namespace declaration"
//require ('../../../vendor/wordnik-php-master/wordnik/Swagger.php');

class TextProcessor {

    var $textarea;
    var $text; // stores the text input by user in the textarea

    function filled($el) {
        $el = trim($el);
        $retval = (isset($el) AND (!empty($el)));
        return $retval;
    }

    function print_r_pre($item) {
        echo "<pre>";
        print_r($item);
        echo "</pre>";
    }

    /**
     * output the processed sentences
     */
    function split_into_words($text) {
        // split the text at blank spaces
        $rawSplit = preg_split('/\b/u', $text, 0, PREG_SPLIT_NO_EMPTY);
        // get an array of words from the rawSplit
        $words = array_filter(array_map(function ($el) {
            return trim($el);
        }, $rawSplit));

        return $words;
    }

    public function process($text, $values_to_be_replaced) {
        $myAPIKey = 'YOUR KEY GOES HERE';
        //$client = new APIClient($myAPIKey, 'http://api.wordnik.com/v4');
        // split the text into single words
        $words = $this->split_into_words($text);
        $words_ready_to_implode = [];
        // take each word entered by the user
        foreach ($words as $word) {
            $ready_word = $this->process_one_word($word, $values_to_be_replaced);
            //var_dump($ready_word);
            array_push($words_ready_to_implode, $ready_word);
        }
        $ready_text = implode(" ", $words_ready_to_implode);
        return $ready_text;
    }

    function process_one_word($word, $values_to_be_replaced) {
        //var_dump($values_to_be_replaced);
        $hiragana_chars = [
            "a" => "あ",
            "i" => "い",
            "u" => "う",
            "e" => "え",
            "o" => "お",
            "ka" => "か",
            "ki" => "き",
            "ku" => "く",
            "ke" => "け",
            "ko" => "こ",
            "kya" => "きゃ",
            "kyu" => "きゅ",
            "kyo" => "きょ",
            "sa" => "さ",
            "shi" => "し",
            "su" => "す",
            "s" => "す",
            "se" => "せ",
            "so" => "そ",
            "sha" => "しゃ",
            "shu" => "しゅ",
            "sho" => "しょ",
            "ta" => "た",
            "chi" => "ち",
            "tsu" => "つ",
            "te" => "て",
            "to" => "と",
            "cha" => "ちゃ",
            "chu" => "ちゅ",
            "cho" => "ちょ",
            "na" => "な",
            "ni" => "に",
            "nu" => "ぬ",
            "ne" => "ね",
            "no" => "の",
            "nya" => "にゃ",
            "nyu" => "にゅ",
            "nyo" => "にょ",
            "ha" => "は",
            "as" => "(",
            "hi" => "ひ",
            "fu" => "ふ",
            "he" => "へ",
            "ho" => "ほ",
            "hya" => "ひゃ",
            "hyu" => "ひゅ",
            "hyo" => "ひょ",
            "ma" => "ま",
            "mi" => "み",
            "mu" => "む",
            "me" => "め",
            "mo" => "も",
            "mya" => "みゃ",
            "myu" => "みゅ",
            "myo" => "みょ",
            "ya" => "や",
            "yu" => "ゆ",
            "yo" => "よ",
            "ra" => "ら",
            "ri" => "り",
            "ru" => "る",
            "re" => "れ",
            "ro" => "ろ",
            "rya" => "りゃ",
            "ryu" => "りゅ",
            "ryo" => "りょ",
            "wa" => "わ",
            "i" => "ゐ",
            "n" => "ん",
            "ga" => "が",
            "gi" => "ぎ",
            "gu" => "ぐ",
            "ge" => "げ",
            "go" => "ご",
            "gya" => "ぎゃ",
            "gyu" => "ぎゅ",
            "gyo" => "ぎょ",
            "za" => "ざ",
            "ji" => "じ",
            "zu" => "ず",
            "ze" => "ぜ",
            "zo" => "ぞ",
            "ja" => "じゃ",
            "ju" => "じゅ",
            "jo" => "じょ",
            "da" => "だ",
            "ji" => "ぢ",
            "zu" => "づ",
            "de" => "で",
            "do" => "ど",
            "ja" => "ぢゃ",
            "ju" => "ぢゅ",
            "jo" => "ぢょ",
            "ba" => "ば",
            "bi" => "び",
            "bu" => "ぶ",
            "be" => "べ",
            "bo" => "ぼ",
            "bya" => "びゃ",
            "byu" => "びゅ",
            "byo" => "びょ",
            "pa" => "ぱ",
            "pi" => "ぴ",
            "pu" => "ぷ",
            "pe" => "ぺ",
            "po" => "ぽ",
            "pya" => "ぴゃ",
            "pyu" => "ぴゅ",
            "pyo" => "ぴょ",
            "vu" => "ゔ",

        ];
        // go through each value-to-be-replaced
        foreach ($values_to_be_replaced as $non_jap) {
            //echo "non_jap: " . $non_jap . ". ";
            // if a word HAS a value-to-be-replaced
            if (preg_match('/' . $non_jap . '/i', $word)) {
                //echo "YES";
                // find the japanese character that will replace the value
                $hiragana_char = $hiragana_chars[$non_jap];
                //echo "key: " . $key. ". ";
                //$hiragana_char = $hiragana_chars[$key];
                // make the swap
                $word = preg_replace('/' . $non_jap . '/i', $hiragana_char, $word);
            }
        }

        return $word;
    }

    // like "process_one_word()"
    // but attempting to break the word into syllables and process each syllable
    function process_one_word2($word, $values_to_be_replaced) {
        $vowels = ["a", "o", "u", "i", "e", "y"];
        $consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n",
            "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "th", "ch", "sh", "ng"];
        //var_dump($values_to_be_replaced);
        //echo "hello from 2";

        $vowels_imploded = implode("|", $vowels);
        $consonants_imploded = implode("|", $consonants);

        preg_match('/((' . $consonants_imploded . ')(' . $vowels_imploded . '))/', $word, $matches);
        //$this->print_r_pre($matches);
        $imploded_matches = implode("-", $matches);
        echo $imploded_matches;

        //$syllables = preg_split("/(c|n|s|t)(o|io|u|i)/", $word);

        $hiragana_chars = [
            "ka" => "か", "ca" => "か", "ki" => "き", "ku" => "く", "koo" => "く", "coo" => "く", "ke" => "け", "ko" => "こ", "co" => "こ",
            "sa" => "さ", "si" => "し", "ci" => "し", "shi" => "し", "su" => "す", "se" => "せ", "she" => "せ", "ce" => "せ", "so" => "そ",
            "to" => "た", "ti" => "ち", "tu" => "つ", "ts" => "つ", "te" => "て", "to" => "と",
            "na" => "な", "ni" => "に", "nee" => "に", "nu" => "ぬ", "noo" => "ぬ", "ne" => "ね", "no" => "の",
            "ha" => "は", "hi" => "ひ", "hee" => "ひ", "hu" => "ふ", "fu" => "ふ", "he" => "へ", "ho" => "ほ",
            "ma" => "ま", "mi" => "み", "mee" => "み", "mu" => "む", "moo" => "む", "me" => "め", "mo" => "も",
            "ya" => "や", "yu" => "ゆ", "you" => "ゆ", "yo" => "よ",
            "ra" => "ら", "ri" => "り", "ru" => "る", "re" => "れ", "ro" => "ろ",
            "wa" => "わ", "wi" => "ゐ", "we" => "ゑ", "wo" => "を",


            "a" => "あ",
            "i" => "い",
            "u" => "う",
            "e" => "え",
            "o" => "お",
            "s" => "す",
            "n" => "ん"
        ];

        // break the word at first consonants

        // syllable = 1) consonant+vowel 2) vowel 3) consonant
        foreach ($consonants as $consonant) {
            // look at letter 1
            // if letter 1 is a vowel, get everything until the first consonant

            // if a word contains
        }
        //$syllabized_word =

        // go through each value-to-be-replaced
        foreach ($values_to_be_replaced as $non_jap) {
            //echo "non_jap: " . $non_jap . ". ";
            // if a word HAS a value-to-be-replaced
            if (preg_match('/' . $non_jap . '/', $word)) {
                //echo "YES";
                // find the japanese character that will replace the value
                $hiragana_char = $hiragana_chars[$non_jap];
                //echo "key: " . $key. ". ";
                //$hiragana_char = $hiragana_chars[$key];
                // make the swap
                $word = preg_replace('/' . $non_jap . '/', $hiragana_char, $word);
            }
        }

        return $word;
    }

}