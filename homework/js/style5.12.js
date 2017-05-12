window.onload = function() {
	var radioleft = document.getElementById("radioleft");
	var radioright = document.getElementById("radioright");
	var picture1 = document.getElementById("picture1");
	var arr = ["img/2017-04-18_162104.png", "img/2017-04-18_162120.png", "img/2017-04-18_162148.png", "img/2017-04-18_162222.png", "img/2017-04-18_162247.png"]

	var timer1 = setInterval(changeLogo, 2000);
	var index = 0;
	addEventListener(picture1, "mousemove", show);
	addEventListener(picture1, "mouseout", hidden);
	addEventListener(radioleft, "click", last);
	addEventListener(radioright, "click", next);

	function last() { //向前
		if (index == 0) {         
			index = arr.length - 1;
		}
		picture2.src = arr[--index];
	}

	function next() { //向后
		if (index == arr.length - 1) {
			index = 0;
		}
		picture2.src = arr[++index];
	}

	function changeLogo() {
		picture2.src = arr[index];
		index++;
		if (index == arr.length - 1) {
			index = 0;
		}
	}

	function show() {
		radioleft.style.display = "inline-block";
		radioright.style.display = "inline-block";
		clearInterval(timer1);
	}

	function hidden() {
		timer1 = setInterval(changeLogo, 2000);
		radioleft.style.display = "none";
		radioright.style.display = "none";
	}

}