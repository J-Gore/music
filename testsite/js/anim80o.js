function MoveSubscribe(){
  var screenwidth = screen.width;
  //var pc = screenwidth - (screenwidth/4);
var pc = screenwidth + (screenwidth*30);
  var mobile = screenwidth + (screenwidth*30);
  //screensizes: 360, 278 too far, 170 fits...
  if(_ua.Mobile[0]){
    var exit = false;

    $("#subscribe_button").css("left",mobile);
    $("#subscribe_button").css("width",196);
    $("#subscribe_button").css("height",50);
    $("#subscribe_button").css("font-size",25);
    if(screenwidth > (196 + $("#subscribe_button").css("left")))
    {var count=100;
      var newMobile;
    do{
      newMobile=count+mobile;
      alert("IN LOOP");
        $("#subscribe_button").css("left",newMobile);
        if(screenwidth > (196 + $("#subscribe_button").css("left")))count+=100;
else exit=true;

    }while (exit==false);
  }

  }else{
$("#subscribe_button").css("left",pc);
    if(screenwidth < (196 + $("#subscribe_button").css("left")))
    {var count=100;
      var newMobile;
    do{
      newMobile=count+mobile;
      alert("IN LOOP");
        $("#subscribe_button").css("left",newMobile);
        if(screenwidth < (196 + $("#subscribe_button").css("left")))count+=100;
    else exit=true;

    }while (exit==false);
    }
  }
}
$(window).resize(function(){
  var screenwidth = screen.width;
  var pc = screenwidth - (screenwidth/4);
  var mobile = screenwidth + (screenwidth/3);
  //screensizes: 360, 278 too far, 170 fits...
  if(_ua.Mobile[0]){
    $("#subscribe_button").css("left",mobile);
    $("#subscribe_button").css("width",196);
    $("#subscribe_button").css("height",50);
    $("#subscribe_button").css("font-size",25);
  }else $("#subscribe_button").css("left",pc);
})
