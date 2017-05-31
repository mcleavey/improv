	var textShowing = true;
	document.onkeydown = keyhandler;
	function keyhandler(){
		if (textShowing) {
   				document.querySelector("h1").remove();
   			}
   		textShowing = false;
   	}