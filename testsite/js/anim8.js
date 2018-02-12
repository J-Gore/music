function MoveSubscribe(){
var screenwidth = screen.width;
var pc = screenwidth - (screenwidth/4);
var mobile = screenwidth + (screenwidth/2);
alert("screen width = " + screenwidth + " PC moving to: " + pc + " Mobile: " + mobile);
if(_ua.Mobile[0]){
  $("#subscribe_button").css("left",mobile);
  $("#subscribe_button").css("width",50);
  $("#subscribe_button").css("height",196);
}
else$("#subscribe_button").css("left",pc);
}
