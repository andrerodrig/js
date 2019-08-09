function foo(){
	'use strict';

	console.log(this.a);
}

a = 2;
foo();
