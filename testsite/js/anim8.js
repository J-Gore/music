function MoveSubscribe(){
var screenleft = screen.width - (screen.width/10);
alert("Moving to: " + screenleft);
_ua.Mobile[0]?("#subscribe_button").css("left",screen.width - (screen.width/6)):$("#subscribe_button").css("left",screen.width - (screen.width/20)))
//$("#subscribe_button").css("left",screenleft);
}
