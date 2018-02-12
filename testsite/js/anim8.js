function MoveSubscribe(){
var screenleft = screen.width - (screen.width/10);
var screenleft1 = screen.width;
var screenleft2 = screen.width/10;
alert("screen width = " + screenleft1 + " screen width/10 = " + screenleft2 + " moving to: " + screenleft);
if(_ua.Mobile[0]) $("#subscribe_button").css("left",screenleft);
else $("#subscribe_button").css("left",screenleft);
}
