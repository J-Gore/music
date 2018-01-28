<html>
  <head>
    <title>Music</title>
  </head>
  <body>
    <h1>Music</h1>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/0RLMAoanOVE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  <input type="button" onclick="get_youtube("0RLMAoanOVE")">
  <?php function get_youtube($url){

 $youtube = "http://www.youtube.com/oembed?url=". $url ."&format=json";

 $curl = curl_init($youtube);
 curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
 $return = curl_exec($curl);
 curl_close($curl);
 return json_decode($return, true);

 }

$url = // youtube video url

// Display Data
print_r(get_youtube($url));?>
  </body>
</html>
