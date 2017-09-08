//menu item clicks
const itemClick = function() 
{
    alert("nothing for now");
};

const addEventListenersForMenuItems = function ()
{
	const classname = document.getElementsByClassName("itemSpan");
	for (var i = 0; i < classname.length; i++) 
	{
		classname[i].addEventListener('click', itemClick, false);
	}
};
addEventListenersForMenuItems();
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

const addMenuItem = function()
{
	const itemText = document.getElementById('newMenuItemName').value;
	if (itemText !== '')
	{
		const element = document.createElement("span");
		document.getElementById('menu')
		.appendChild(document.createElement("li"))
		.appendChild(element)
		.appendChild(document.createTextNode(itemText));
		element.className = 'itemSpan';
		addEventListenersForMenuItems();
	}
}