

(function (window) {
	var byeSpeaker= new Object();
	byeSpeaker.names="Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"
	var speakWord="goodbye"
	

	byeSpeaker.speak= function (name) {
        console.log(speakWord + " " + name);
    }

window.byeSpeaker= byeSpeaker

})(window);