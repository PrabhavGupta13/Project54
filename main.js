function Calculate(){
var a= Number(document.getElementById("input1").value);
var area= a * a;
var perimeter= 4 * a;
document.getElementById("label1").innerHTML = area;
document.getElementById("label2").innerHTML = perimeter;
}