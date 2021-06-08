<?php

namespace Config;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Pool;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;

class RestApi
{
    private $urls = "";
    private $client;

    public function __construct() {
        $this->client = new Client([
                'connect_timeout' => false,
                'timeout' => 10000,
            ]);
    }

    public function findUrls($url) {

        $this->urls = '{"url": "'. $url. '", "id": "1"}';
        $body = \GuzzleHttp\Psr7\Utils::streamFor($this->urls);
        $response = $this->client->request( 'POST',
            'http://127.0.0.1:8081/findurl',
            ['body' => $body]
        );
        $contents = (string) $response->getBody();
        return $contents;
    }

    public function loadSidebar($url) {
        $this->urls = '{"url": "'. $url. '"}';
//        print_r($this->urls);
        $body = \GuzzleHttp\Psr7\Utils::streamFor($this->urls);
        $response = $this->client->request( 'POST',
            'http://127.0.0.1:8081/menus',
            ['body' => $body]
        );
        $contents = (string) $response->getBody();
        $contents = str_replace("[", "{\"menu\": [", $contents);
        $contents = str_replace("]", "]}", $contents);
//        print_r(json_decode($contents, true));
//        exit();
        return $contents;
    }

    public function loadNavbar($url) {
        $this->urls = '{"url": "'. $url. '"}';
//        print_r($this->urls);
        $body = \GuzzleHttp\Psr7\Utils::streamFor($this->urls);
        $response = $this->client->request( 'POST',
            'http://127.0.0.1:8081/navbarheader',
            ['body' => $body]
        );
        $contents = (string) $response->getBody();
        $contents = str_replace("[", "{\"menu\": [", $contents);
        $contents = str_replace("]", "]}", $contents);
//        print_r(json_decode($contents, true));
//        exit();
        return $contents;
    }

    public function barang($url) {

        $this->urls = '{"role": "admin", "psswd": "okey"}';
//        print_r($this->urls);
        $body = \GuzzleHttp\Psr7\Utils::streamFor($this->urls);
        $response = $this->client->request( 'POST',
            'http://127.0.0.1:8081/barangs',
            ['body' => $body]
        );
        $contents = (string) $response->getBody();
        $contents = str_replace("[", "{\"barang\": [", $contents);
        $contents = str_replace("]", "]}", $contents);
    //    print_r(json_decode($contents, true));
    //    exit();
        return $contents;
    }

    public function report($nil) {

        if ($nil === 'xls') {
            $pdf = 0;
            $xls = 1;
        } else if ($nil === 'pdf') {
            $pdf = 1;
            $xls = 0;
        }

        $this->urls = '{ "pdf": '.$pdf.', "xls": '.$xls.', "typesnya": "barang", "role": "admin", "psswd": "okey", "datefrom": "None", "dateto": "None" }';
    //    print_r($this->urls);
        $body = \GuzzleHttp\Psr7\Utils::streamFor($this->urls);
        $response = $this->client->request( 'POST',
            'http://127.0.0.1:8081/reports',
            ['body' => $body]
        );
        $contents = (string) $response->getBody();
        // $contents = str_replace("[", "{\"report\": [", $contents);
        // $contents = str_replace("]", "]}", $contents);
        print_r($contents);
        exit();
        // return $contents;
    }

    public function search($find) {

        $this->urls = '{"url": "'. $find. '", "id": "2"}';
        // echo ($this->urls);
        $body = \GuzzleHttp\Psr7\Utils::streamFor($this->urls);
        $response = $this->client->request( 'POST',
            'http://127.0.0.1:8081/findurl',
            ['body' => $body]
        );
        $contents = (string) $response->getBody();
        // $contents = str_replace("[", "{\"report\": [", $contents);
        // $contents = str_replace("]", "]}", $contents);
        print_r($contents);
        exit();
        // return $contents;
    }

}
