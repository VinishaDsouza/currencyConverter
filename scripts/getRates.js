
function onSelect(){
				//API Call based on the selected currencies
				fetch(`http://data.fixer.io/api/latest?access_key=e6e9e12159406c5476fe0ffbd8082f40&format=1`)
				.then(res => res.json())// convert to json object
				.then((out) => { 
					input.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
					let rate = out.rates[Object.keys(out.rates)[0]];
					//Rate does not exist if Base and Symbol is the same
					if (isNaN(rate)) {
						converted.value = input.value;
					}else{
						converted.value = (rate * input.value).toFixed(2);
					}
				})
				.catch(err => { throw err });
			
}





	



