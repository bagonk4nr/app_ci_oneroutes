<?php
namespace Config;

use Config\RestApi;

class AutoRoutes
{

	private $uris;
	private $methods;
	private $finder;
	private $views;
	private $restApi;
	private $dataNavbar;
	private $dataSidebar;
	private $dataFind;
	private $contents;
	private $dataPost;
	private $session;
	private $dt;
	private $forApi;
	private $forRpt;

	public function __construct($uri, $method, $post)
	{

      	$this->uris = $uri;
      	$this->method = $method;
		$this->finder = "";
		$this->views = "";
		$this->restApi = new RestApi();
		$this->dataNavbar = "";
		$this->dataSidebar = "";
		$this->dataFind ="";
		$this->contents ="";
		$this->dt ="";
		$this->dataPost = $post;
		$this->session = session();
		$this->forApi = '';
		$this->forRpt = '';
	}

	public function toRoute() {


			if ($this->uris === '/' and empty($this->dataPost)) {
					// $this->session->destroy();
					$this->contents ="pages\\login\\index.php";
					$this->views = "main";
					return $this->toRoutesGet();

			} else {

					if (empty($this->dataPost)) {

						$this->finder = $this->findURL($this->uris);

					}

					// $this->uris = str_replace("/", "", $this->uris);

					// $this->finder = $this->findURL($this->uris);
					// print_r($this->uris.' / '. $this->finder); exit();
					if (strpos($this->finder, 'null') !== false || strpos($this->finder, 'false') !== false || strpos($this->finder, '[]') !== false) {

							$this->contents = "errors\\404.php";
							$this->views = "main";
							return $this->toRoutesGet();

					} else {

						if(count($this->dataPost) === 2 && array_pop(array_keys($this->dataPost)) === 'password') {
							$this->dataNavbar = $this->restApi->loadNavbar("");
							$this->dataSidebar = $this->restApi->loadSidebar("");
							$_SESSION['dtlogin'] =1;

							$this->contents = "pages\\home\\home.php";
							$this->views = "main";
							return $this->toRoutesPost();

						} else {
							// print_r($this->dataPost); die;
							if(is_array($this->dataPost)) {
								$pagesnya = '';
								foreach($this->dataPost as $key => $value) {
									if ($key === 'target') {
										$pagesnya = str_replace("'", '', $value);
									} else if ($key === 'dt') {
										$this->forApi = $value;
									} else if ($key === 'doc') {
										$this->forApi = 'report';
										$this->forRpt = $value;

									} else if ($key === 'find') {
										$this->forApi = 'search';
										$this->forRpt = $value;

									}
								}
								// echo $pagesnya; die;
								if ($pagesnya === 'logout') $this->logOUT();
								else if ($pagesnya !== '') $this->contents = "pages/".str_replace("'", '', $pagesnya).".php";

							} else $this->contents = "pages\\".$this->uris."\\index.php";
								// echo $this->contents; die;
							if ($this->contents === '' && $this->forApi === 'report' ||  $this->forApi === 'search') {

								$api = $this->forApi;

								$this->dt = $this->restApi->$api($this->forRpt);

								// $this->views = "main";
								// echo $this->dt.' - uhuy reports';
								// echo '<script>alert("uhuy reports")</script>';
								// return $this->dt;

							} else if (file_exists(APPPATH .'Views/'. $this->contents)) {

								if($_SESSION['dtlogin'] === null || $_SESSION['dtlogin'] === '') {

									$this->contents = "errors\\404.php";
									$this->views = "main";
									return $this->toRoutesPost();

								} else {

									$this->dataNavbar = $this->restApi->loadNavbar("");
									$this->dataSidebar = $this->restApi->loadSidebar("");
									// echo $this->forApi; die;
									$api = $this->forApi;

									if($this->forApi !== '') $this->dt = $this->restApi->$api("");

									$this->views = "main";
									return $this->toRoutesPost();
								}

							} else {
								$this->contents = "errors\\404.php";
								$this->views = "main";
								return $this->toRoutesPost();
							}
							// echo $this->contents; die;

						}

					}
			}

	}

	private function toRoutesGet() {

    $route = Services::routes();
    $route->setDefaultNamespace('App\Controllers');
    // $route->setDefaultController('Home');
    // $route->setDefaultMethod('index');
    $route->setTranslateURIDashes(false);
    // $routes->set404Override();
    $route->setAutoRoute(true);
    // print_r($menu);
    // $jsonData ="{\"pages\": "."\"".$this->views."\""."}";
    // $this->views = json_encode($jsonData);
    // print_r($this->dataNavbar.' - '. $this->uris);
	// 	exit();
		return $route->get($this->uris, 'Main::index/'.$this->views. '/'.$this->contents.'/');

	}

	private function toRoutesPost() {

		$route = Services::routes();
		$route->setDefaultNamespace('App\Controllers');
		// $route->setDefaultController('Home');
		// $route->setDefaultMethod('index');
		$route->setTranslateURIDashes(false);
		// $routes->set404Override();
		$route->setAutoRoute(true);
		// print_r($menu);
		// $jsonData ="{\"pages\": "."\"".$this->views."\""."}";
		// $this->views = json_encode($jsonData);
		$datanya = [];
		$datanya['navbar'] = json_decode($this->dataNavbar, true);
		$datanya['sidebar'] = json_decode($this->dataSidebar, true);
		$datanya['contents'] = $this->contents;
		$datanya['dt'] = json_decode($this->dt, true);
		// print_r($datanya['dt']);
		// 	exit();
			// return $route->post($this->uris, 'Main::main/'.$datanya.'/'.$this->views.'/'.$this->contents.'/');
		return view($this->views, $datanya);
		}

	private function findURL($urlFind) {

			return $this->dataFind = $this->restApi->findUrls($urlFind);
	}

	private function logOUT() {
		unset($_SESSION['dtlogin']);
		$this->session->destroy();
		$this->contents ="pages/login/index.php";
		$this->views = "main";
		return $this->toRoutesPost();
	}

}
