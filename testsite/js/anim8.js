function MoveSubscribe(){
  var screenwidth = screen.width;
var pc = screenwidth - (screenwidth/8);
var mobile = screenwidth - (screenwidth/20);
var screenleft1 = screenwidth;
var screenleft2 = screenwidth/8;
alert("screen width = " + screenleft1 + " screen width/8 = " + screenleft2 + " PC moving to: " + pc + " Mobile: " + mobile);
if(_ua.Mobile[0]) $("#subscribe_button").css("left",screenleft);
else $("#subscribe_button").css("left",pc);
}
