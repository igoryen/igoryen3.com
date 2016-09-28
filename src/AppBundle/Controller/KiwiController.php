<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-09-27
 * Time: 19:02
 */

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class KiwiController extends Controller {
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/kiwi")
     */
    public function showAction() {
        return $this->render('kiwi/show.html.twig', [
            'name' => 'kiwi'
        ]);
    }

}