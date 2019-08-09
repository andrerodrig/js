function foo(num){
	console.log("foo: "+num);

	//Keep track of how many times 'foo' is called
	this.count++;
}

foo.count = 0;

for(let i = 0; i < 10; i++){
	if(i > 5){
		foo.call(foo,i);
	}
}

console.log(foo.count);
