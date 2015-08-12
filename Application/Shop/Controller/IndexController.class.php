<?php

namespace Shop\Controller;

/**
 * WAP商城的商品列表页
 * 
 * @author zoujingli <zoujingli@qq.com>
 * @date 2014/09/22 10:54:32
 */
class IndexController extends ShopController {

    /**
     * 绑定对应的模型名
     * @var type 
     */
    protected $_bind_model = 'StoreProduct';

    /**
     * 列表过滤处理
     * @param type $model
     * @param type $map
     */
    protected function _index_filter($model, &$map) {
        /* 条件 */
        $map['status'] = '2';

        /* 获取商城信息 */
        $info = M("Store")->find(1);
        $info['link'] = explode('|', "{$info['link']}");
        if (!empty($info['url'])) {
            redirect($info['url']);
        }
        $this->assign('ptitle', $info['name']);
        $this->assign('store', $info);
    }

    /**
     * 处理产品模型产品
     * 
     * @param array $vo
     */
    protected function _form_filter(&$model, &$vo) {
        if (!IS_POST) {
            //处理图片信息
            $vo['must_know'] = str_replace("\n", '<br>', $vo['must_know']);
            $vo['img'] = explode('|', "{$vo['img']}");
            $productModel = D('Store/StoreProductModel');
            $vo['model_params'] = $productModel->parseParams($vo['model_params']);
            $this->ptitle = $vo['name'];
        }
    }

}
