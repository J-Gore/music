function MoveSubscribe(){
  var screenwidth = screen.width;
var pc = screenwidth - (screenwidth/5);
var mobile = screenwidth - (screenwidth/20);
var screenleft1 = screenwidth;
alert("screen width = " + screenwidth + " PC moving to: " + pc + " Mobile: " + mobile);
if(_ua.Mobile[0]) $("#subscribe_button").css("left",screenleft);
else $("#subscribe_button").css("left",pc);
}
