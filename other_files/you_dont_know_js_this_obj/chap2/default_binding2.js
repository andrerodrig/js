function foo(){
	console.log(this.a);
}

a = 2;

(function(){
	"use strict";

	foo();
})();
