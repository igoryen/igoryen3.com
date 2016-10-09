<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-09-24
 * Time: 20:17
 */

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ContactController
 * @package AppBundle\Controller
 */
class ContactController extends Controller {
    /**
     * @return Response
     * @Route("/contact")
     */
    public function showAction() {
        $contacts = [
            'igor.yentaltsev@gmail.com',
            '647-703-6200'
        ];
        $resume = [
            'my resume' => "/downloads/Igor-Entaltsev-Web-Developer-v8.docx"
        ];

        return $this->render('contact/show.html.twig', [
            'contacts' => $contacts,
            'resume' => $resume
        ]);
    }
}