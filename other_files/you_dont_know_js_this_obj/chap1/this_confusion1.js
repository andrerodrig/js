// This code is completely wrong,
// The developer in case got confused  about 
// the meaning of the 'this' expression
// His misconception is think 'this' refers to the function's scope

//He tried to bind the function bar to the function foo with this. 
//with the hope that 'this.a' from bar() would reference to 'a' in foo.

//This bridge is not possible

function foo(){
	var a = 2;
	this.bar();
}

function bar(){
	console.log(this.a);
}

foo()
