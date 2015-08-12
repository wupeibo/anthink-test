<?php

namespace Home\Controller;

use Library\Controller\Controller;

/**
 * Home管理
 */
class HomeController extends Controller {

    /**
     * 设置模块标题
     * @var type 
     */
    public $ptitle = '洛言';

    public function index(){
        dump($this);
        die();
    }
}
