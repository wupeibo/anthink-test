<?php

namespace Wap\Controller;

/**
 * 会员中心
 */
class MemberController extends WapController {

    /**
     * 会员中心
     * @var type 
     */
    public $ptitle = '会员中心';

    /**
     * 定义可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '会员中心主页',
        'info' => '会员信息编辑',
        'integral' => '会员积分记录',
        'address' => '会员地址管理',
    );

    /**
     * 显示会员信息
     */
    public function index() {
        //分享配置
        $conname = strrchr(__CONTROLLER__, "/");
        $conname = substr($conname, 1);
        $pageName = $conname . '-' . __FUNCTION__;
        $page = getShare(strtolower($pageName));
        $this->assign('share', $page);

        $this->getMember($this->oauth(), null, true);
        $null_href = 'javascript:void(0)';
        $total = array();
        $pay_map = array('openid' => $this->openid, 'status' => array('in', '1,2'), 'pay_status' => '0');
        $total['pay'] = (int) M('StoreOrder')->where($pay_map)->count();
        if ($total['pay'] > 0) {
            $total['pay_url'] = U('Shop/MyOrder/index', array('_getcode_' => encode(serialize($pay_map))));
        } else {
            $total['pay_url'] = $null_href;
        }

        $route_map = array('openid' => $this->openid, 'pay_status' => '1', 'status' => array('in', '1,2'), 'send_status' => '0');
        $total['route'] = (int) M('StoreOrder')->where($route_map)->count();
        if ($total['route'] > 0) {
            $total['route_url'] = U('Shop/MyOrder/index', array('_getcode_' => encode(serialize($route_map))));
        } else {
            $total['route_url'] = $null_href;
        }

        $routed_map = array('openid' => $this->openid, 'status' => array('in', '1,2'), 'send_status' => '1');
        $total['routed'] = (int) M('StoreOrder')->where($routed_map)->count();
        if ($total['routed']) {
            $total['routed_url'] = U('Shop/MyOrder/index', array('_getcode_' => encode(serialize($routed_map))));
        } else {
            $total['routed_url'] = $null_href;
        }

        $success_map = array('openid' => $this->openid, 'send_status' => '2');
        $total['success'] = (int) M('StoreOrder')->where($success_map)->count();

        if ($total['success'] > 0) {
            $total['success_url'] = U('Shop/MyOrder/index', array('_getcode_' => encode(serialize($success_map))));
        } else {
            $total['success_url'] = $null_href;
        }

        $this->assign('total', $total);
        $this->assign('ptitle', '会员中心');
        $this->display();
    }

    /**
     * 会员信息编辑
     */
    public function info($_msg_ = null, $member = null) {
        if (IS_POST) {
            parent::edit();
        } else {
            //分享配置
            $conname = strrchr(__CONTROLLER__, "/");
            $conname = substr($conname, 1);
            $pageName = $conname . '-' . __FUNCTION__;
            $page = getShare(strtolower($pageName));
            $this->assign('share', $page);

            if (empty($member)) {
                $this->getMember($this->oauth());
            } else {
                $this->assign('member', $member);
            }
            empty($_msg_) || $this->assign('msg', $_msg_);
            $this->assign('ptitle', '会员资料');
            $this->display(T('Wap@Member:info'));
        }
        die();
    }

    /**
     * 会员积分记录
     */
    public function integral() {
        //分享配置
        $conname = strrchr(__CONTROLLER__, "/");
        $conname = substr($conname, 1);
        $pageName = $conname . '-' . __FUNCTION__;
        $page = getShare(strtolower($pageName));
        $this->assign('share', $page);

        $this->getMember($this->oauth(), null, true);
        val('_sort', 'desc');
        val('_order', 'id');
        $this->ptitle = '积分历史';
        parent::index(D('MemberIntegral'));
    }

    /**
     * 积分记录过滤
     * @param type $model
     * @param array $map
     */
    protected function _integral_filter($model, &$map) {
        $map['openid'] = $this->openid;
    }

    /**
     * 会员地址管理
     */
    public function address() {
        $this->_bind_model = 'MemberAddress';
        if (IS_POST) {
            $data = I('post.', array());
            $data['openid'] = $this->openid;
            $result = $this->_save($data, M('MemberAddress'));
            if ($result['status'] && $result['data']['id'] && intval($result['data']['is_default']) === 2) {
                $this->setDefaultAddress($result['data']['id']);
            } else {
                $this->ajaxReturn($result);
            }
        } else {
            //分享配置
            $conname = strrchr(__CONTROLLER__, "/");
            $conname = substr($conname, 1);
            $pageName = $conname . '-' . __FUNCTION__;
            $page = getShare(strtolower($pageName));
            $this->assign('share', $page);

            $this->getMember($this->oauth(), null, true);
            $this->_page_on = false;
            $this->ptitle = '收货地址管理';
            val('_order', 'is_default');
            val('_sort', 1);
            parent::index(null, array('openid' => $this->openid), 'address');
        }
    }

    /**
     * 删除地址
     */
    public function delAddress() {
        $this->_bind_model = 'MemberAddress';
        $this->del();
    }

    /**
     * 设置默认收货地址
     * @param type $addressid
     */
    public function setDefaultAddress($addressid = null) {
        $openid = $this->oauth();
        if ($openid) {
            $data = array();
            $data['id'] = is_null($addressid) ? I('get.id', '0', 'intval') : $addressid;
            $data['openid'] = $openid;
            $data['is_default'] = '2';
            $r1 = M('MemberAddress')->where(array('openid' => $openid))->setField('is_default', '1');
            $r2 = M('MemberAddress')->save($data);
            if ($r1 !== false && $r2 !== false) {
                $this->success('设置默认收货地址成功！');
                exit;
            }
        }
        $this->error('设置默认收货地址失败，请稍候再试！');
    }

}
