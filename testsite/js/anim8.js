function MoveSubscribe(){
  var screenwidth = screen.width;
  var pc = screenwidth - (screenwidth/4);
  var mobile = screenwidth + 278;
  if(_ua.Mobile[0]){
    $("#subscribe_button").css("left",mobile);
    $("#subscribe_button").css("width",196);
    $("#subscribe_button").css("height",50);
    $("#subscribe_button").css("font-size",25);
  }else $("#subscribe_button").css("left",pc);
}
