function start() {
	var btn1 = document.getElementById('btn');
	btn1.addEventListener("click",output);
}
var oper = ["+","-","*","/"];
var num1, num2, num1Val, num2Val;
function output() {
	num1 = document.getElementById("n1");
	num1Val = num1.value;
	num2 = document.getElementById("n2");
	num2Val = num2.value;
	if (!isNaN(parseInt(num1Val))&&!isNaN(parseInt(num2Val))) {
		for (var i = 0; i < oper.length; i++) {
			var op = document.getElementById("oper");
			var opVal = op.value;
			if(oper[i] == opVal){
				switch(i){
					case 0:
						oper0();
						break;
					case 1:
						oper1();
						break;
					case 2:
						oper2();
						break;
					case 3:
						oper3();
						break;

				}
			} 
		}
	}else{
		alert("please enter number");
	}
	num1.value = "";
	num2.value = "";
}
function oper0() {
	document.getElementById("ans").innerHTML = (parseInt(num1Val)+parseInt(num2Val));
}
function oper1() {
	document.getElementById("ans").innerHTML = (parseInt(num1Val)-parseInt(num2Val));
}
function oper2() {
	document.getElementById("ans").innerHTML = (parseInt(num1Val)*parseInt(num2Val));
}
function oper3() {
	if (num2Val == 0) {
		document.getElementById("ans").innerHTML = "cannot divided by zero";
	}else{
		document.getElementById("ans").innerHTML = (Math.round((parseInt(num1Val)/parseInt(num2Val))*100)/100);
	}
	
}
window.addEventListener("load",start);