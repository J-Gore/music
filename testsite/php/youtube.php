<?php
$video = $_GET['video'];

if(preg_match('/www.youtube.com/',$video))
{
  $link = $video;
}
else{
  $link = "https://www.youtube.com/watch.php?v=$video";
}
?>
