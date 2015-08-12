<?php

namespace Apps\Controller;

/**
 * 奖品管理模块控制器
 *
 * @author wupeibo <wupeibo@163.com>
 * @date 2015-3-11 19:51:54
 */
class AwardsController extends AppsController {

    /**
     * 设置模块标题
     * @var type 
     */
    public $ptitle = '奖品列表';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '奖品列表',
        'add' => '添加奖品',
        'edit' => '编辑奖品',
        'del' => '删除奖品',
        'resume' => '启用奖品',
        'forbid' => '禁用奖品',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '奖品列表',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'GameAwards';

    /**
     * 表单前置方法
     */
    protected function _form_filter() {
        $gamecate = M('GameAwardsCate')->where(array('status' => 2))->select();
        $this->assign('catelist', $gamecate);
    }

    /**
     * 列表查询过滤方法
     */
    protected function _filter(&$map, &$model) {
        
    }

    /**
     * 列表数据过滤方法
     */
    protected function _data_filter(&$data, &$model) {
        foreach ($data as &$val) {
            $val['cate'] = M('GameAwardsCate')->where(array('id' => $val['cate_id']))->getField('name');
            if ($val['cate_id'] == 2) {
//				$val['code'] = '-';
                $val['price'] = '-';
            } else {
                $val['jifen'] = '-';
            }
        }
    }

    /*
     * 导出数据
     * @author chenrongbin
     */
    /*  public function exoutput() {
      $data = M('GameAwards')
      ->alias('ga')
      ->field('ga.*,gac.name as cate')
      ->join("left join __GAME_AWARDS_CATE__ gac on ga.cate_id = gac.id")
      ->select();
      $this->_exoutput($data);
      }

      protected function _exoutput($data) {
      $header_style = 'size:12;width:25;font:宋体;color:ffffff;text-align:center;font-weight:bold;height:25;vertical-align:center;type:string;full:0070C0';
      $body_style = 'size:12;width:25;font:宋体;text-align:center;type:string;height:15;vertical-align:center';
      $title = "奖品列表";
      $header_data = array(
      array('奖品名称',$header_style),
      array('奖品类型',$header_style),
      array('价格',$header_style),
      array('奖品编号',$header_style),
      array('积分数值',$header_style),
      array('库存数量',$header_style),
      array('兑换有效期',$header_style),
      array('状态',$header_style),
      );
      $body_data = array();
      foreach ($data as &$row) {
      $body_data[] = array(
      array($row['name'], $body_style),
      array($row['cate'], $body_style),
      array($row['price'], $body_style),
      array($row['code'], $body_style),
      array($row['jifen'],$body_style),
      array($row['nums'], $body_style),
      array($row['unset_date'], $body_style),
      array($this->transform($row['status']), $body_style),
      );
      }
      array_unshift($body_data, $header_data);
      $excel = new \Wx\Api\Excel() ;
      $excel->renderData($body_data)->download($title);
      } */

    private function transform($data) {
        switch ($data) {
            case 1:
                $data = "禁用";
                break;
            case 2:
                $data = "启用";
                break;
        }
        return $data;
    }

}
