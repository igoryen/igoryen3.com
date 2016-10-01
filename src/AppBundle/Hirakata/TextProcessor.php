<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-10-01
 * Time: 15:49
 */

namespace AppBundle\Hirakata;


class TextProcessor {
    public function process($text) {
        return str_replace("world","Peter", $text);
    }
}