<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-10-01
 * Time: 13:34
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class HirakataController
 * @package AppBundle\Controller
 */
class HirakataController extends Controller {
    /**
     * @return Response
     * @Route("/hirakata")
     */
    public function showAction() {
        $hk = $this->get('app.hirakata');
        $tp = $this->get('app.text_processor');
        $text = "Good morning, world!";
        $greeting = $hk->hello("Igor");
        $newtext = $tp->process($text);

        return $this->render('hirakata/show.html.twig', [
            'info' => 'lalala',
            'hello' => $greeting,
            'newtext' => $newtext

        ]);
    }
}