//menu item clicks
const classname = document.getElementsByClassName("itemSpan");
const itemClick = function() 
{
    alert("nothing for now");
};

for (var i = 0; i < classname.length; i++) 
{
    classname[i].addEventListener('click', itemClick, false);
}
//calculator
const printBtnClick = function ()
{
	const input = document.getElementById("numInput").value;
	if (input === '')
		alert("hey, type something!!");
	else if (isNaN(parseInt(input)))
		notifyUser(input);
	else 
		notifyUser(eval(input));
};

function notifyUser(input)
{
	const print = document.getElementsByClassName("print");
	print[0].checked ? alert(input) : "" ;
	print[1].checked ? document.write(input) : "" ;
	print[2].checked ? console.log(input) : "" ;
}