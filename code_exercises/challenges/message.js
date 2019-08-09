function list(names){
	let message = '';
	const names_str_arr = [];

	for(let i of names){
		names_str_arr.push(i.name);
	}

	console.log(names_str_arr);
	
	if(names_str_arr.length === 0) return '';
	else if(names_str_arr.length === 1) return names_str_arr[0];
	
	message = names_str_arr[0];
	
	for(i = 1; i < names_str_arr.length - 1; i++){
		message = `${message}, ${names_str_arr[i]}`;
	}

	message = `${message} & ${names_str_arr[names_str_arr.length - 1]}`;
	return message;
}

console.log(list([{name:'andre'},{name:'priscila'}]));
