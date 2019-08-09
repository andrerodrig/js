// I don't know what a fuck the 'this' is referencing in this 
// example
function identify(){
	return this.name.toUpperCase();
}

function speak(){
	var greeting = "Hello, I'm "+identify.call(this);
	console.log(greeting);
}

const me = {
	name:"Kyle"
};

const you = {
	name:"Reader"
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);

