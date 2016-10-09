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
                array('attr' => ['cols' => '100', 'rows' => '10', 'wrap' => 'soft']),
                array('label_attr' => ['class' => 'textarea-label'])
            )
            ->add('hiragana', ChoiceType::class, [
                'expanded' => true, 'multiple' => true, // creating checkboxes
                'choices' => [

                    "ka | か" => "ka",
                    "ki | き" => "ki",
                    "ku | く" => "ku",
                    "ke | け" => "ke",
                    "ko | こ" => "ko",
                    "kya | きゃ" => "kya",
                    "kyu | きゅ" => "kyu",
                    "kyo | きょ" => "kyo",
                    "sa | さ" => "sa",
                    "shi | し" => "shi",
                    "su | す" => "su",
                    "se | せ" => "se",
                    "so | そ" => "so",
                    "sha | しゃ" => "sha",
                    "shu | しゅ" => "shu",
                    "sho | しょ" => "sho",
                    "ta | た" => "ta",
                    "chi | ち" => "chi",
                    "tsu | つ" => "tsu",
                    "te | て" => "te",
                    "to | と" => "to",
                    "cha | ちゃ" => "cha",
                    "chu | ちゅ" => "chu",
                    "cho | ちょ" => "cho",
                    "na | な" => "na",
                    "ni | に" => "ni",
                    "nu | ぬ" => "nu",
                    "ne | ね" => "ne",
                    "no | の" => "no",
                    "nya | にゃ" => "nya",
                    "nyu | にゅ" => "nyu",
                    "nyo | にょ" => "nyo",
                    "ha | は" => "ha",
                    "hi | ひ" => "hi",
                    "fu | ふ" => "fu",
                    "he | へ" => "he",
                    "ho | ほ" => "ho",
                    "hya | ひゃ" => "hya",
                    "hyu | ひゅ" => "hyu",
                    "hyo | ひょ" => "hyo",
                    "ma | ま" => "ma",
                    "mi | み" => "mi",
                    "mu | む" => "mu",
                    "me | め" => "me",
                    "mo | も" => "mo",
                    "mya | みゃ" => "mya",
                    "myu | みゅ" => "myu",
                    "myo | みょ" => "myo",
                    "ya | や" => "ya",
                    "yu | ゆ" => "yu",
                    "yo | よ" => "yo",
                    "ra | ら" => "ra",
                    "ri | り" => "ri",
                    "ru | る" => "ru",
                    "re | れ" => "re",
                    "ro | ろ" => "ro",
                    "rya | りゃ" => "rya",
                    "ryu | りゅ" => "ryu",
                    "ryo | りょ" => "ryo",
                    "wa | わ" => "wa",

                    "ga | が" => "ga",
                    "gi | ぎ" => "gi",
                    "gu | ぐ" => "gu",
                    "ge | げ" => "ge",
                    "go | ご" => "go",
                    "gya | ぎゃ" => "gya",
                    "gyu | ぎゅ" => "gyu",
                    "gyo | ぎょ" => "gyo",
                    "za | ざ" => "za",
                    "ji | じ" => "ji",
                    "zu | ず" => "zu",
                    "ze | ぜ" => "ze",
                    "zo | ぞ" => "zo",
                    "ja | じゃ" => "ja",
                    "ju | じゅ" => "ju",
                    "jo | じょ" => "jo",
                    "da | だ" => "da",
                    "ji | ぢ" => "ji",
                    "zu | づ" => "zu",
                    "de | で" => "de",
                    "do | ど" => "do",
                    "ja | ぢゃ" => "ja",
                    "ju | ぢゅ" => "ju",
                    "jo | ぢょ" => "jo",
                    "ba | ば" => "ba",
                    "bi | び" => "bi",
                    "bu | ぶ" => "bu",
                    "be | べ" => "be",
                    "bo | ぼ" => "bo",
                    "bya | びゃ" => "bya",
                    "byu | びゅ" => "byu",
                    "byo | びょ" => "byo",
                    "pa | ぱ" => "pa",
                    "pi | ぴ" => "pi",
                    "pu | ぷ" => "pu",
                    "pe | ぺ" => "pe",
                    "po | ぽ" => "po",
                    "pya | ぴゃ" => "pya",
                    "pyu | ぴゅ" => "pyu",
                    "pyo | ぴょ" => "pyo",
                    "vu | ゔ" => "vu",


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