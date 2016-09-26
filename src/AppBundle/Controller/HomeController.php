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
            'tarboz' => 'http://tarboz.igoryen.com/',
            'maximovich' => 'http://maximovich.igoryen.com/'
        ];
        return $this->render('home/show.html.twig', [
            'message' => $message,
            'pointer' => $pointer,
            'links' => $links
        ]);
    }

}