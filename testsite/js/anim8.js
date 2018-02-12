function MoveSubscribe(){
var screenleft = screen.width - (screen.width/8);
var screenleft1 = screen.width;
var screenleft2 = screen.width/8;
alert("screen width = " + screenleft1 + " screen width/8 = " + screenleft2 + " moving to: " + screenleft);
if(_ua.Mobile[0]) $("#subscribe_button").css("left",screenleft);
else $("#subscribe_button").css("left",screenleft);
}
