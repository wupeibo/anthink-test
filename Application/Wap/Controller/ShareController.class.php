<?php

namespace Wap\Controller;

use Library\Controller\Controller;

/**
 * Description of ShareController
 *
 * @author Administrator
 */
class ShareController extends Controller {

    /**
     * 二维码登录
     * @var type 
     */
    public $ptitle = '微信分享接口';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
    );

    /**
     * 分享页面得积分
     */
    public function doShare() {
        $page = I('post.page', '');
        $member_id = session('member.id');
        $configList = getShare($page);
        $config = $configList[0];
        $twice = (int) $config['twice'];
        $count = M("PageShare")->where(array('page' => $page, 'code' => $config['code']))->count();
        if (!$count || $count < $twice) {
//            $res1 = D('Api/IntegralRule')->integralChange($member_id, 'share-wx', $config['jifen'], '');
        } else {
            $config['jifen'] = 0;
        }
        unset($config['id']);
        unset($config['twice']);
        unset($config['status']);
        unset($config['status']);
        $config['member_id'] = $member_id;
        $config['create_date'] = date('Y-m-d H:i:s');
        $res2 = M("PageShare")->add($config);
        if ($res1) {
            $this->success("已分享,获得{$config['jifen']}积分", 'JSON');
        }
        $this->success('已分享', 'JSON');
    }

}
