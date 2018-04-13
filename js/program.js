let p = document.getElementsByTagName('p');
let myVideo= document.getElementById('myVideo');
let span = document.getElementsByTagName("span");
let crtTime;




myVideo.addEventListener("timeupdate", highlight);

function highlight(){
	crtTime =   myVideo.getCurrentTime();
	let crTime = parseInt(crtTime);
	
		for(let i = 0; i  <= span.length-1; i += 1){
			let dataStart = span[i].getAttribute("data-start");
			let start =  parseInt(dataStart);
			let dataEnd = span[i].getAttribute("data-end");
			let end =  parseInt(dataEnd);
		
			if(crTime >= start  && crTime <=end){
				span[i].className = "transcript--highlight";
				//myVideo.play();
			}

			if(crTime >= end || crTime < start ) {
				span[i].className= "transcript--typography";	
			}

		} 
	}
	
	function play_line_1(){
		let span = document.getElementById("transcript--1");
		let data = span.getAttribute("data-start");
		let line_1 = Number(data);

		if (isNaN(line_1)){}
		else{
			myVideo.currentTime = line_1;
			myVideo.play();}
	}

	function play_line_2(){
		let span = document.getElementById("transcript--2");
		let data = span.getAttribute("data-start");
		let line_2 = Number(data);

		if (isNaN(line_2)){}
		else{
			myVideo.currentTime = line_2;
			myVideo.play();}
	}

	function play_line_3(){
		let span = document.getElementById("transcript--3");
		let data = span.getAttribute("data-start");
		let line_3 = Number(data);

		if (isNaN(line_3)){}
		else{
			myVideo.currentTime = line_3;
			myVideo.play();}
	}

	function play_line_4(){
		let span = document.getElementById("transcript--4");
		let data = span.getAttribute("data-start");
		let line_4 = Number(data);

		if (isNaN(line_4)){}
		else{
			myVideo.currentTime = line_4;
			myVideo.play();}
		
	}

	function play_line_4(){
		let span = document.getElementById("transcript--4");
		let data = span.getAttribute("data-start");
		let line_4 = Number(data);

		if (isNaN(line_4)){}
		else{
			myVideo.currentTime = line_4;
			myVideo.play();}
	}

	function play_line_5(){
		let span = document.getElementById("transcript--5");
		let data = span.getAttribute("data-start");
		let line_5 = Number(data);

		if (isNaN(line_5)){}
		else{
			myVideo.currentTime = line_5;
			myVideo.play();}
		
	}
	function play_line_6(){
		let span = document.getElementById("transcript--6");
		let data = span.getAttribute("data-start");
		let line_6 = Number(data);
		if (isNaN(line_6)){}
		else{
			myVideo.currentTime = line_6;
			myVideo.play();}
	}

	function play_line_7(){
		let span = document.getElementById("transcript--7");
		let data = span.getAttribute("data-start");
		let line_7 = Number(data);

		if (isNaN(line_7)){}
		else{
			myVideo.currentTime = line_7;
			myVideo.play();}
		
	}

	function play_line_8(){
		let span = document.getElementById("transcript--8");
		let data = span.getAttribute("data-start");
		let line_8 = Number(data);

		if (isNaN(line_8)){}
		else{
			 myVideo.currentTime = line_8;
			 myVideo.play();}
		
	}

	function play_line_9(){
		let span = document.getElementById("transcript--9");
		let data = span.getAttribute("data-start");
		let line_9 = Number(data);

		if (isNaN(line_9)){}
		else{
			 myVideo.currentTime = line_9;
			 myVideo.play();}
		
	}
	
	function play_line_10(){
		let span = document.getElementById("transcript--10");
		let data = span.getAttribute("data-start");
		let line_10 = Number(data);

		if (isNaN(line_10)){}
		else{
			 myVideo.currentTime = line_10;
			 myVideo.play();}
		
	}
	
	function play_line_11(){
		let span = document.getElementById("transcript--11");
		let data = span.getAttribute("data-start");
		let line_11 = Number(data);

		if (isNaN(line_11)){}
		else{
			 myVideo.currentTime = line_11;
			 myVideo.play();}
	}
	
	function play_line_12(){
		let span = document.getElementById("transcript--12");
		let data = span.getAttribute("data-start");
		let line_12 = Number(data);

		if (isNaN(line_12)){}
		else{
			 myVideo.currentTime = line_12;
			 myVideo.play();}
		
	}
	
	function play_line_13(){
		let span = document.getElementById("transcript--13");
		let data = span.getAttribute("data-start");
		let line_13 = Number(data);

		if (isNaN(line_13)){}
		else{
			 myVideo.currentTime = line_13;
			 myVideo.play();}
		
	}
	function play_line_14(){
		let span = document.getElementById("transcript--14");
		let data = span.getAttribute("data-start");
		let line_14 = Number(data);

		if (isNaN(line_14))	{}
		else{
			 myVideo.currentTime = line_14;
			 myVideo.play();}
		
	}
	function play_line_15(){
		let span = document.getElementById("transcript--15");
		let data = span.getAttribute("data-start");
		let line_15 = Number(data);

		if (isNaN(line_15)){}
		else{
			 myVideo.currentTime = line_15;
			 myVideo.play();}
		
	}
	function play_line_16(){
		let span = document.getElementById("transcript--16");
		let data = span.getAttribute("data-start");
		let line_16 = Number(data);

		if (isNaN(line_16)){}
		else{
			 myVideo.currentTime = line_16;
			 myVideo.play();}
		
	}
	
	