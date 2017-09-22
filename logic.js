/*
	Programmer: luis

*/

//this is a single line comment

var box=document.getElementById('display');


function addtodisplay(x){
	if (x=='C')
	{
		box.value='';
	}
	else
	{	
			box.value+=x;
}
}
function calculateresult()
{
	box.value=eval(box.value);
	
}

function raisetopower()
{
		box.value = Number (box.value) * Number (box.value);
	
	
}

function backspace()
{	
		box.value= box.value.slice(0, box.value.length -1);
}