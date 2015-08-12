<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Api\Controller;

/**
 * Description of TestController
 *
 * @author Anyon
 */
class TestController {

    public function index() {
        $config = M('WechatConfig')->find();

        $pay = new \Library\Util\Api\WechatPay($config);
        $result = $pay->queryOrder('1150513170014');
//        $result = $pay->refundQuery('1150512110005');
//        $result = $pay->refund('1150512110005', '1010080951201505120125516352', time(), '1', '1');
//        $result = $pay->getBill('20150512');
        dump($result);

        dump($pay->errCode);
        dump($pay->errMsg);
    }

}
