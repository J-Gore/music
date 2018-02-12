function MoveSubscribe(){
var screenleft = screen.width - (screen.width/10);
alert("screen width = " + screen.width + " screen width/10 = " + screen.width/10 + " moving to: " + screen.width - (screen.width/10));
_ua.Mobile[0]?("#subscribe_button").css("left",screen.width - (screen.width/8)):$("#subscribe_button").css("left",screen.width - (screen.width/20)));
//$("#subscribe_button").css("left",screenleft);
}
