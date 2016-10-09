<?php
/**
 * Created by PhpStorm.
 * User: Igor
 * Date: 2016-10-01
 * Time: 16:50
 */

namespace AppBundle\Hirakata;


class Content
{
    protected $content;
    protected $hiragana;

    public function getContent(){
        return $this->content;
    }
    public function setContent($content) {
        $this->content = $content;
    }

    public function getHiragana() {
        return $this->hiragana;
    }
    public function setHiragana($hiragana) {
        $this->hiragana = $hiragana;
    }
}