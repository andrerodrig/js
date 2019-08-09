function foo(){
	console.log(this.a);
}

function doFoo(fn){
	fn(); // <-- call-site
}

var obj = {
	a: 2,
	foo: foo
}

var bar = obj.foo;

a = 'Oops, global';
doFoo(obj.foo);
