function compute(form) {
	form.display.value = eval(form.display.value)
}
function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}
function cos(f) {
	f.display.value = Math.cos(f.display.value);
}
function sin(f) {
	f.display.value = Math.sin(f.display.value);
}
function sinh(f) {
	f.display.value = Math.sinh(f.display.value);
}
function cos(f) {
	f.display.value = Math.cosh(f.display.value);
}
function tan(f) {
	f.display.value = Math.tan(f.display.value);
}
function per(f) {
	f.display.value = (f.display.value)/100;
}
function sqrt(f) {
	f.display.value = Math.sqrt(f.display.value);
}
function ln(f) {
	f.display.value = Math.log(f.display.value);
}
function exp(f) {
	f.display.value = Math.exp(f.display.value);
}
function dc(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
function changesign(inp) {
        var audio=new Audio("Mouse-Click-03-m-FesliyanStudios.com.mp3");
           audio.play();

	if(inp.value.substring(0, 1) == "-")
		inp.value = inp.value.substring(1, inp.value.length)
	else
		inp.value = "-" + inp.value
}
function cn(str) {
           var audio=new Audio("Mouse-Click-03-m-FesliyanStudios.com.mp3");
           audio.play();

	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") {
				window.alert("wrong entrty")
				return false
				}
			}
		}
		return true
}
function ac(inp, c) {
        var audio=new Audio("Mouse-Click-03-m-FesliyanStudios.com.mp3");
           audio.play();

	if(inp.value == "0"||inp.value == null )
		inp.value = c
	else
		inp.value += c
}
