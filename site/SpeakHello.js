

(function (window) {
	var helloSpeaker = new Object();
	helloSpeaker.names="Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"
	var speakWord="hello"
	
	helloSpeaker.speak= function (name) {
       console.log(speakWord + " " + name);
}

window.helloSpeaker= helloSpeaker

})(window);