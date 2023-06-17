function handleFormSubmit(event) {
    event.preventDefault();
	let result = confirm('Are you sure you want to submit this?');
	if(result == true)
	{
		const data = new FormData(event.target);
		const formJSON = Object.fromEntries(data.entries());
		const results = document.querySelector('.results pre');
	 	alert( results.innerText = JSON.stringify(formJSON, null, 2))
	}
    

  
  }
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit)



