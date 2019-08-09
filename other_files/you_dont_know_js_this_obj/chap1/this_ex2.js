function identify(context){
	return context.name.toUpperCase();
}

function speak(context){
	var greeting = "Hello, I'm " + identify(context);
	console.log(greeting);
}

you = {
	name: "Reader"
}

me = {
	name: "Kyle"
}

identify(you);
speak(me);
