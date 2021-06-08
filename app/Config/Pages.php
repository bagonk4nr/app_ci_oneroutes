<?php
namespace Config;



class Pages {

    private $uris;
    private $param;

    public function __construct() {
         $this->uris='';
         $this->param='';
    }

    public function route($uri='', $params) {
        $i = 0;
        $uris = '';
        $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']
		=== 'on' ? "https" : "http") . "://" . (isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST']
		!== '' ? $_SERVER['HTTP_HOST'] : null)
		;
        
        foreach($params as $key => $value) {

            if ($i > 0) $uris .= '&&';
            $uris .= $key.'='.$value;
            if ($i === 0) $uris = '?'.$uris;
            if ($key === 'doc') $uris = $link.'/'.$uris;
            $i++;
            
        }
        
        echo ($uris);
        
    }


}



?>