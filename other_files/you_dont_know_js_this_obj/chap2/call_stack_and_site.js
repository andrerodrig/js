function baz(){
	// call-stack is: `baz`
	// so, our call-site is in the global scope

	console.log("baz");
	bar(); // <-- call-stack for `bar`
}

function bar(){
	// call-stack is: `baz` -> `bar`
	// so, our call-site is in `baz`

	console.log("bar");
	foo();
}

function foo(){
	// call-stack is: `baz` -> `bar` -> `foo`
	// so, our call-site is in `bar`

	console.log("foo");
}

baz(); // <-- call-site for `baz`
