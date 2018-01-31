var http = require("http");

var portOne = 7000;
var portTwo = 7500;
function handleRequestOne(request, response) {
	response.end("You're Awesome!" + request.url);
}
function handleRequestTwo(request, response) {
	response.end("You Stink" + request.url);
}
var serverOne = http.createServer(handleRequestOne);
serverOne.listen(portOne, function() {
	console.log("You have nice hair!")
});
var serverTwo = http.createServer(handleRequestTwo);
serverTwo.listen(portTwo, function() {
	console.log("Nice haircut. Did your Mom do it?")
});