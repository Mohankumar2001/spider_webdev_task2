//var marksarr =[0,0,0,0,0,0,0,0,0,0];
result=0;

function show(shown, hidden) {
      document.getElementById(shown).style.display='block';
      document.getElementById(hidden).style.display='none';
      return false;
    }

function start() {
	var marksarr = {
		"ten" : "0",
		"one" : "0",
		"two" : "0",
		"three" : "0",
		"four" : "0",
		"five" : "0",
		"six" : "0",
		"seven" : "0",
		"eight" : "0",
		"nine" : "0",
	}
	localStorage.setItem("scores",JSON.stringify(marksarr));

	document.getElementById('hd').style.display='flex';
	document.getElementById('s1').style.display='block';
	document.getElementById('nv').style.display='block';
    document.getElementById('s0').style.display='none';
	// show('s1','s0');
}

function marks(name, value) {
	//name = parseInt(name);
	//value = parseInt(value);
	var ansarr = {
		"ten" : "3",
		"one" : "4",
		"two" : "4",
		"three" : "1",
		"four" : "3",
		"five" : "1",
		"six" : "1",
		"seven" : "4",
		"eight" : "4",
		"nine" : "4",
	}
	var arr = JSON.parse(localStorage.getItem("scores"));
	arr[name] = value;
	var x = document.getElementById(name);
	localStorage.setItem("scores",JSON.stringify(arr));
	if (ansarr[name] == value) {
	    x.innerHTML = "The answer is correct";
	    document.getElementById('bd').style.background = "rgba(0,0,0,0.5)";
    }
    else {
    	x.innerHTML = "The answer is wrong";
    	document.getElementById('bd').style.background = "red";
    	// alert("wrong answer");
    }
}

function finalmarks() {
	var arr = JSON.parse(localStorage.getItem("scores"));
	var result = 0;
	var ansarr = {
		"ten" : "3",
		"one" : "4",
		"two" : "4",
		"three" : "1",
		"four" : "3",
		"five" : "1",
		"six" : "1",
		"seven" : "4",
		"eight" : "4",
		"nine" : "4",
	}
	for(var key in arr) {
		if (arr[key]==ansarr[key])
			result +=1;
	}
	var x = document.getElementById("qwer");
	// localStorage.setItem("scores",JSON.stringify(arr));
	x.innerHTML = result;
}