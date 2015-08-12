<?php

namespace Apps\Controller;

/**
 * 微数据管理
 *
 * @author wupeibo <wupeibo@163.com>
 * @date 2015-3-11 19:51:54
 */
class MicrodataController extends AppsController {

    /**
     * 设置列表标题
     * @var type 
     */
    public $ptitle = '伪中奖管理';

    /**
     * 设定可访问的操作
     * @var type 
     */
    public $access = array(
        'index' => '伪中奖列表',
        'add' => '添加伪记录',
        'edit' => '编辑记录',
        'del' => '删除记录',
        'resume' => '启用记录',
        'forbid' => '禁用记录',
    );

    /**
     * 设定可设置为菜单的节点
     * @var type 
     */
    public $menu = array(
        'index' => '伪中奖列表',
    );

    /**
     * 绑定操作模型
     * @var type 
     */
    protected $_bind_model = 'GameRecord';

    /**
     * 列表查询过滤方法
     */
    protected function _filter(&$map, &$model) {
        $map['type'] = 2;
    }

    public function excel() {
        if (IS_POST) {
            $game_type = I('post.game_type');
            $filename = I('post.link');
            if (!$filename) {
                $this->error('请选择Excel文件上传！');
            }
            $opts = array(
                'http' => array(
                    'method' => "GET",
                    'timeout' => 60,
                )
            );
            $context = stream_context_create($opts);
            $centent = file_get_contents($filename, false, $context);

            $filename = 'microdata' . date('YmdHis') . '.xls';
            file_put_contents($filename, $centent);

            $excel = new \Wx\Api\Excel();
            $arr = $excel->readerExcel($filename);
            $data = array();
            foreach ($arr as $one) {
                $data['name'] = $one[0];
                $data['phone'] = $one[1];
                $data['awards'] = $one[2];
                $data['gift_name'] = $one[3];
                $data['create_date'] = $this->excelTime($one[4]);
                $data['type'] = 2;
                $data['status'] = 2;
                M('GameRecord')->add($data);
            }
            unlink($filename);
            $this->success('导入成功！');
        } else {
            $cate = M('GameApps')->where(array('status' => 2))->select();
            $this->assign('catelist', $cate);
            $this->display();
        }
    }

    protected function get_content($url) {
        if (function_exists('file_get_contents')) {
            $file_contents = file_get_contents($url);
        }
        if ($file_contents == '') {
            $ch = curl_init();
            $timeout = 30;
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
            $file_contents = curl_exec($ch);
            curl_close($ch);
        }
        return $file_contents;
    }

    protected function excelTime($date, $time = false) {
        if (function_exists('GregorianToJD')) {
            if (is_numeric($date)) {
                $jd = GregorianToJD(1, 1, 1970);
                $gregorian = JDToGregorian($jd + intval($date) - 25569);
                $date = explode('/', $gregorian);
                $date_str = str_pad($date [2], 4, '0', STR_PAD_LEFT)
                        . "-" . str_pad($date [0], 2, '0', STR_PAD_LEFT)
                        . "-" . str_pad($date [1], 2, '0', STR_PAD_LEFT)
                        . ($time ? " 00:00:00" : '');
                return $date_str;
            }
        }else{
            return date('Y-m-d H:i:s', strtotime('+'.rand(1,6000).' second '));
        }
    }

}
