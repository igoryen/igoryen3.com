<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-09-25
 * Time: 19:50
 */

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class HomeController
 * @package AppBundle\Controller
 */
class HomeController extends Controller
{
    /**
     * @Route("/")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAction() {
        $message = 'Website under construction by Igoryen';
        $pointer = 'Some of my projects:';
        $links = [
            [
                'name' => 'Tarboz',
                'link' => 'http://tarboz.igoryen.com/',
                'text' => 'Since 2014 - an online interactive phrase-book developed using Waterfall methodology through all the SDLC stages. Used OOP, built classes and models, modeled the database using PHP, LAMP, JavaScript, Ajax, Bing translation service, jQuery, HTML, CSS. It is an online dictionary of modern winged phrases - phrases from movies, songs, jokes and their international equivalents (in good litterary translation form). Contains notes on the meaning and usage as well as a link to a video when available. '
            ],
            [
                "name" => "Kiwi",
                "link"=> "/kiwi",
                "text"=> "Since 2016 - a front end application using CSS, JavaScript, jQuery, HTML. Created at the request of a local church who needed an application for singing songs. It eliminates the use of an Power Point presentation, allows to quickly choose the song to sing, and within the song to choose which part of the song to sing and in which language to sing it."
            ],
            [
                "name"=> "Maximovich",
                "link"=> "http://maximovich.igoryen.com/",
                "text"=> "Since 2016 - A converter from the modern Ukrainian orthography to the system that is inspired by the system made by the Russian scientist Mikhail Maximovich (1804 — 1873), who wanted to use the traditional spelling but use diacritics to show the changed pronunciation. The goal is to help the Russian speakers to read Ukrainian."
            ]
        ];
        return $this->render('home/show.html.twig', [
            'message' => $message,
            'pointer' => $pointer,
            'links' => $links
        ]);
    }

}