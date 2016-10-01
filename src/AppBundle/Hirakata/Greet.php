<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-10-01
 * Time: 13:42
 */

namespace AppBundle\Hirakata;


class Greet {
    public function hello($name) {
        return "Hello, " . $name . "!";
    }
}