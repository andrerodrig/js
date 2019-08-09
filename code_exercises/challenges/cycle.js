function cycle(n){
	if(!check_coprimer(n,10)) return -1;
	else{
		var count = 1;
		const decimal_inverse_number = (1/n).toString().split('.')[1];
		const arr_decimal_inverse_number = decimal_inverse_number.split('');
		for(i = 1; i < arr_decimal_inverse_number.length; i++){
			if(arr_decimal_inverse_number[i] === arr_decimal_inverse_number[0])
				break;
			count++;
		}
		console.log(Number(decimal_inverse_number));
		console.log(count);
	}
}

function get_smaller(a,b){
	return a ? a <= b : b;
}

function check_coprimer(a,b){
	let	count = 0;
	const smaller = get_smaller(a,b);
	for(let	i =	1; i <= smaller; i++){
		if( a % i === 0 && b % i === 0 ) count++;
	}
	if (count === 1) return true;
	else if(count < 1){
		console.log("err: At least 1 must be divisor for whatever number.");
	}
	else return false;
}

console.log(cycle(7));
