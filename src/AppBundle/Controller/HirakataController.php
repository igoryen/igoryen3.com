<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-10-01
 * Time: 13:34
 */

namespace AppBundle\Controller;

use AppBundle\Hirakata\Content;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;


use AppBundle\Hirakata;

/**
 * Class HirakataController
 * @package AppBundle\Controller
 */
class HirakataController extends Controller {


    /**
     * @return Response
     * @Route("/hirakata")
     */
    public function showAction(Request $request) {
        $hk = $this->get('app.hirakata');
        $tp = $this->get('app.text_processor');

        $text = "Raccoon, Cacoo";
        $old = "coo";
        $new = "く";

        //$greeting = $hk->hello("Igor");
        //$newtext = $tp->process($text, $old, $new);

        $c = new Content();


        $c->setContent($text);
//        $task->setTask('Write a blog post');
//        $task->setDueDate(new \DateTime('tomorrow'));
        $textarea_placeholder = "(1) Paste an English text here, (2) pick desired substitutions, (3) press 'Convert text'.";

        $form = $this->createFormBuilder($c)
//            ->add('public', CheckboxType::class, array(
//                'label'    => 'く',
//                'required' => false,
//                'value'    => 'く',
//                'name' => 'checkbox_koo'
//            ))
//            ->add('selectAll', CheckboxType::class,
//                ['attr' => array('class'=>'selectAllCheckboxes')])
            ->add(
                "content", TextareaType::class,
                array('attr' => ['cols' => '100', 'rows' => '2', 'wrap' => 'soft', 'placeholder' => $textarea_placeholder]),
                array('label_attr' => ['class' => 'textarea-label'])
            )
            ->add('hiragana', ChoiceType::class, [
                'expanded' => true, 'multiple' => true, // creating checkboxes
                'choices' => [

                    "ba | ば" => "ba",
                    "be | べ" => "be",
                    "bi | び" => "bi",
                    "bo | ぼ" => "bo",
                    "bu | ぶ" => "bu",
                    "bya | びゃ" => "bya",
                    "byo | びょ" => "byo",
                    "byu | びゅ" => "byu",
                    "cha | ちゃ" => "cha",
                    "chi | ち" => "chi",
                    "cho | ちょ" => "cho",
                    "chu | ちゅ" => "chu",
                    "da | だ" => "da",
                    "de | で" => "de",
                    "do | ど" => "do",
                    "fu | ふ" => "fu",
                    "ga | が" => "ga",
                    "ge | げ" => "ge",
                    "gi | ぎ" => "gi",
                    "go | ご" => "go",
                    "gu | ぐ" => "gu",
                    "gya | ぎゃ" => "gya",
                    "gyo | ぎょ" => "gyo",
                    "gyu | ぎゅ" => "gyu",
                    "ha | は" => "ha",
                    "he | へ" => "he",
                    "hi | ひ" => "hi",
                    "ho | ほ" => "ho",
                    "hya | ひゃ" => "hya",
                    "hyo | ひょ" => "hyo",
                    "hyu | ひゅ" => "hyu",
                    "ja | じゃ" => "ja",
                    "ja | ぢゃ" => "j",
                    "ji | じ" => "ji",
                    "ji | ぢ" => "ji",
                    "jo | じょ" => "jo",
                    "jo | ぢょ" => "jo",
                    "ju | じゅ" => "ju",
                    "ju | ぢゅ" => "ju",
                    "ka | か" => "ka",
                    "ke | け" => "ke",
                    "ki | き" => "ki",
                    "ko | こ" => "ko",
                    "ku | く" => "ku",
                    "kya | きゃ" => "kya",
                    "kyo | きょ" => "kyo",
                    "kyu | きゅ" => "kyu",
                    "ma | ま" => "ma",
                    "me | め" => "me",
                    "mi | み" => "mi",
                    "mo | も" => "mo",
                    "mu | む" => "mu",
                    "mya | みゃ" => "mya",
                    "myo | みょ" => "myo",
                    "myu | みゅ" => "myu",
                    "na | な" => "na",
                    "ne | ね" => "ne",
                    "ni | に" => "ni",
                    "no | の" => "no",
                    "nu | ぬ" => "nu",
                    "nya | にゃ" => "nya",
                    "nyo | にょ" => "nyo",
                    "nyu | にゅ" => "nyu",
                    "pa | ぱ" => "pa",
                    "pe | ぺ" => "pe",
                    "pi | ぴ" => "pi",
                    "po | ぽ" => "po",
                    "pu | ぷ" => "pu",
                    "pya | ぴゃ" => "pya",
                    "pyo | ぴょ" => "pyo",
                    "pyu | ぴゅ" => "pyu",
                    "ra | ら" => "ra",
                    "re | れ" => "re",
                    "ri | り" => "ri",
                    "ro | ろ" => "ro",
                    "ru | る" => "ru",
                    "rya | りゃ" => "rya",
                    "ryo | りょ" => "ryo",
                    "ryu | りゅ" => "ryu",
                    "sa | さ" => "sa",
                    "se | せ" => "se",
                    "sha | しゃ" => "sha",
                    "shi | し" => "shi",
                    "sho | しょ" => "sho",
                    "shu | しゅ" => "shu",
                    "so | そ" => "so",
                    "su | す" => "su",
                    "ta | た" => "ta",
                    "te | て" => "te",
                    "to | と" => "to",
                    "tsu | つ" => "tsu",
                    "vu | ゔ" => "vu",
                    "wa | わ" => "wa",
                    "ya | や" => "ya",
                    "yo | よ" => "yo",
                    "yu | ゆ" => "yu",
                    "za | ざ" => "za",
                    "ze | ぜ" => "ze",
                    "zo | ぞ" => "zo",
                    "zu | ず" => "zu",
                    "zu | づ" => "zu",


                    "a | あ" => "a",
                    "i | い" => "i",
                    "u | う" => "u",
                    "e | え" => "e",
                    "o | お" => "o",
                    "s | す" => "s",
                    "n | ん" => "n",

                ]
            ])
            ->add('save', SubmitType::class, array('label' => 'Convert text'))
            ->getForm();


        // REQUEST
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
//            $data = $form->getData();
//            $content = $form["content"]->getData();

//            $content = $form["content"]->getData(); // the same as below
            $form_data = $form->getData();
            //print_r($form_data);

            $content_from_user = $form->get("content")->getData();
            $hiragana_array = $form->get("hiragana")->getData(); // usrt = user-submitted replacement text
            //$usrt = $hiragana_array ? $hiragana_array[0] : "none"  ;
            $content_for_user = $tp->process($content_from_user, $hiragana_array);

            // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!
            // $em = $this->getDoctrine()->getManager();
            // $em->persist($task);
            // $em->flush();

//            return $this->redirectToRoute('ready');
            return $this->render('hirakata/show.html.twig', [
                'info' => 'lalala',
                //'hello' => $greeting,
                //'newtext' => $newtext,
                'form' => $form->createView(),
                'content' => $content_for_user
            ]);

        }


        return $this->render('hirakata/show.html.twig', [
            //'info' => 'lalala',
            //'hello' => $greeting,
            //'newtext' => $newtext,
            'form' => $form->createView()
        ]);
    }
}