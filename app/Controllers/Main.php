<?php

namespace App\Controllers;

class Main extends BaseController
{
	public function index($views='', $contents='') {
		
		$datas = [];
		$datas['contents'] = str_replace("\\", "/", $contents);
		
		// print_r($datas); exit();
		return view($views, $datas);
	}
}
