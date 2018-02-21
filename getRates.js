function myFunction(){
				//API Call based on the selected currencies
				fetch(`https://api.fixer.io/latest?base=${first.value}&symbols=${second.value}`)
				.then(res => res.json())// convert to json object
				.then((out) => { 
					input.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
					let rate = out.rates[Object.keys(out.rates)[0]];
					//Rate does not exist if Base and Symbol is the same
					if (rate == false) {
						converted.value = input.value;
					}else{
						converted.value = (rate * input.value).toFixed(3);
					}
				})
				.catch(err => { throw err });
			
}
	



