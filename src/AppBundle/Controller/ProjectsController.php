<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-09-24
 * Time: 19:23
 */

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class ProjectsController extends Controller
{
    /**
     * @Route("/projects/{projectName}")
     */
    public function showAction($projectName){
        $projects = [
            'Igoryen lalala',
            'Tarboz lululu'
        ];
        return $this->render('projects/show.html.twig', [
            'name' => $projectName,
            'projects' => $projects
        ]);
    }
}