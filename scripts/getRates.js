

function onSelect(){
				//API Call based on the selected currencies
				var a = document.getElementById("first").value;
				var b = document.getElementById("second").value;

				var uri= "https://api.exchangeratesapi.io/latest?base="+a;
				fetch(uri)
				.then(res => res.json())// convert to json object
				.then((out) => { 
					input.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
					//console.log(input.value);
					let rate = out.rates[b];
					console.log(rate);
					//Rate does not exist if Base and Symbol is the same
					if (isNaN(rate)) {
						converted.value = input.value;
					}else{
						converted.value = (rate * input.value).toFixed(2);
					}
				})
				.catch(err => { throw err });
			
}





	



