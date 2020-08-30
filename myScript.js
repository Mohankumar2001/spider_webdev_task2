var marksarr =[0,0,0,0,0,0,0,0,0,0];

function marks(name, value) {
	name = parseInt(name);
	value = parseInt(value);
	marksarr[name] = value;
	var x = document.getElementById("asd");
	x.innerHTML = marksarr;
}