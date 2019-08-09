function foo(){
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

a = 'oops, global';

setTimeout(obj.foo,100);

