const uniqueInOrder = function(iterable){
	const order = Array.from(iterable);
	const order_imp = [];
	for(let i = 0; i < order.length - 1; i++){
		if(order[i] === order[i+1])
		delete order[i];
	}
	console.log(order);
	for(let o of order){
		if(o) order_imp.push(o);
	}
	console.log(order_imp);
}

uniqueInOrder('aaAAAaccCCCccbbbBBBBBAAbb');
