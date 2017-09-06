const classname = document.getElementsByClassName("itemSpan");
const myFunction = function() 
{
    alert("nothing for now");
};

for (var i = 0; i < classname.length; i++) 
{
    classname[i].addEventListener('click', myFunction, false);
}