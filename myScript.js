//var marksarr =[0,0,0,0,0,0,0,0,0,0];
result=0;

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
}

function marks(name, value) {
	//name = parseInt(name);
	//value = parseInt(value);
	var arr = JSON.parse(localStorage.getItem("scores"));
	arr[name] = value;
	var x = document.getElementById("asd");
	localStorage.setItem("scores",JSON.stringify(arr));
	x.innerHTML = arr[name];
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
	var x = document.getElementById("asd");
	// localStorage.setItem("scores",JSON.stringify(arr));
	x.innerHTML = result;
}