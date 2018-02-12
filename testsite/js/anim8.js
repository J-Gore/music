function MoveSubscribe(){
var screenleft = screen.width - (screen.width/10);
var screenleft1 = screen.width;
var screenleft2 = screen.width/10;
alert("screen width = " + screenleft1 + " screen width/10 = " + screenleft2 + " moving to: " + screenleft);
//_ua.Mobile[0]?$("#subscribe_button").css("left",screen.width - (screen.width/8)):$("#subscribe_button").css("left",screen.width - (screen.width/20)));
if(_ua.Mobile[0]) $("#subscribe_button").css("left",screenleft);
else $("#subscribe_button").css("left",screenleft);
//$("#subscribe_button").css("left",screenleft);
}
