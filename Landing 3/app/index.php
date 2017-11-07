<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$dir = dirname(__FILE__);
echo $dir;

$cookiefile = $dir . '/tmp/cookie.txt';
// $ch = curl_init('http')
// libxml_use_internal_errors();
// $htmlbody = new DOMDocument();
// @$htmlbody->loadHTML($html);
// function request($url, $post = null, $cookieFile = 'tmp/cookie.txt')
// {
// 	$ch = curl_init($url);

// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// 	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
// 	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36');
// 	curl_setopt($ch, CURLOPT_COOKIEJAR, $cookiefile);
// 	curl_setopt($ch, CURLOPT_COOKIEFILE, $cookiefile);

// 	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
// 	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// 	if($post) {
// 		curl_setopt($ch, CURLOPT_POSTFIELDS, $post)
// 	}

// 	$html = curl_exec($ch);
// 	curl_close();
// 	return $html;
// }

//------------
echo "string";
file_put_contents($cookiefile, '');
echo "strinssg";
// if(!$ss) echo 'false';

// $html = request('https://www.reddit.com/login');

// echo '<pre>';
// var_dump($html);
// echo '<pre>';

// phpinfo();

// echo '<pre>';
// print_r($urlarray);
// echo '<pre>';