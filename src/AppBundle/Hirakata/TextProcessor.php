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
            "ba" => "ば",
            "be" => "べ",
            "bi" => "び",
            "bo" => "ぼ",
            "bu" => "ぶ",
            "bya" => "びゃ",
            "byo" => "びょ",
            "byu" => "びゅ",
            "cha" => "ちゃ",
            "chi" => "ち",
            "cho" => "ちょ",
            "chu" => "ちゅ",
            "da" => "だ",
            "de" => "で",
            "do" => "ど",
            "e" => "え",
            "fu" => "ふ",
            "ga" => "が",
            "ge" => "げ",
            "gi" => "ぎ",
            "go" => "ご",
            "gu" => "ぐ",
            "gya" => "ぎゃ",
            "gyo" => "ぎょ",
            "gyu" => "ぎゅ",
            "ha" => "は",
            "he" => "へ",
            "hi" => "ひ",
            "ho" => "ほ",
            "hya" => "ひゃ",
            "hyo" => "ひょ",
            "hyu" => "ひゅ",
            "i" => "い",
            "ja" => "じゃ",
            "ja" => "ぢゃ",
            "ji" => "じ",
            "ji" => "ぢ",
            "jo" => "じょ",
            "jo" => "ぢょ",
            "ju" => "じゅ",
            "ju" => "ぢゅ",
            "ka" => "か",
            "ke" => "け",
            "ki" => "き",
            "ko" => "こ",
            "ku" => "く",
            "kya" => "きゃ",
            "kyo" => "きょ",
            "kyu" => "きゅ",
            "ma" => "ま",
            "me" => "め",
            "mi" => "み",
            "mo" => "も",
            "mu" => "む",
            "mya" => "みゃ",
            "myo" => "みょ",
            "myu" => "みゅ",
            "n" => "ん",
            "na" => "な",
            "ne" => "ね",
            "ni" => "に",
            "no" => "の",
            "nu" => "ぬ",
            "nya" => "にゃ",
            "nyo" => "にょ",
            "nyu" => "にゅ",
            "o" => "お",
            "pa" => "ぱ",
            "pe" => "ぺ",
            "pi" => "ぴ",
            "po" => "ぽ",
            "pu" => "ぷ",
            "pya" => "ぴゃ",
            "pyo" => "ぴょ",
            "pyu" => "ぴゅ",
            "ra" => "ら",
            "re" => "れ",
            "ri" => "り",
            "ro" => "ろ",
            "ru" => "る",
            "rya" => "りゃ",
            "ryo" => "りょ",
            "ryu" => "りゅ",
            "s" => "す",
            "sa" => "さ",
            "se" => "せ",
            "sha" => "しゃ",
            "shi" => "し",
            "sho" => "しょ",
            "shu" => "しゅ",
            "so" => "そ",
            "su" => "す",
            "ta" => "た",
            "te" => "て",
            "to" => "と",
            "tsu" => "つ",
            "u" => "う",
            "vu" => "ゔ",
            "wa" => "わ",
            "ya" => "や",
            "yo" => "よ",
            "yu" => "ゆ",
            "za" => "ざ",
            "ze" => "ぜ",
            "zo" => "ぞ",
            "zu" => "ず",
            "zu" => "づ"

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