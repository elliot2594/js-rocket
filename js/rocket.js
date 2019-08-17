let timer = null;
var count = 10;


//function to change the body state
function changeState(state) {
	document.body.className = "bodyState" + state;

	if (state == 2){		
		timer = setInterval(function() {
			document.getElementById('countDown').innerHTML = count; 
			count--;
			if (count <= 0) {
				changeState(3);
				clearInterval(timer);
			}
		}, 1000 );

	}
}