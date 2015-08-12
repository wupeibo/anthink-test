<?php

namespace Plugin\Controller;

class AvatarsController extends PluginController {

    public function index() {
        $char = I('get.char', 'N', 'trim');
        $dirname = UPLOAD_PATH . 'avatars/';
        is_dir($dirname) || mkdir($dirname, 0777);
        $filename = $dirname . md5($char) . '.png';
        header("Content-Type: image/png");
        if (!is_file($filename)) {
            vendor('Avatars.Avatars');
            $avatars = new \Avatars($char);
            $avatars->Save($filename);
            $avatars->Output2Browser();
            $avatars->Free();
        } else {
            fpassthru(fopen($filename, 'rb'));
        }
        exit;
    }

    public function _empty() {
        $this->index();
    }

}
