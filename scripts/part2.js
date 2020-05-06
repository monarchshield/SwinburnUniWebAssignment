

//To clarify this function executes on load 
//The function its self is preloaded when you are on enquire.html
//And provides basic validation using default bootstrap css/javascript classess 
//This will be apart of my enhancements

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) 
	{
      form.addEventListener('submit', function(event) 
	  {
        if (form.checkValidity() === false)
		{
		  //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
          event.preventDefault();
		  
		  //Stops any data or event from occuring 
          event.stopPropagation();
		
        }
		
		if(form.checkValidity() === true)
		{
			//If event.preventdefault doesnt occur itll prevent page transition
			event.preventDefault();
			
			//Stores the data and changes the pages.
			store_session_data();
		

		}
		
        form.classList.add('was-validated');
      }, false);

    });
	
  }, false);
  	
})();





function store_session_data()
{
	'use strict';
	var input_firstname = document.getElementById("firstname");
	var input_lastname = document.getElementById("lastname");
	var input_email = document.getElementById("email");
	var input_phonenumber = document.getElementById("phonenumber");
	var input_address = document.getElementById("inputAddress");
	var input_suburb = document.getElementById("suburbtown");
	var input_postcode = document.getElementById("postcode");
	var input_state = document.getElementById("state");
	
	
	//For Contact forms only
	
	var preferenceEmail = document.getElementById("emailcontact");
	var preferencePost = document.getElementById("postcontact");
	var preferencePhone = document.getElementById("phonecontact"); 
	var input_contactpreference;
	
	if(preferenceEmail.checked) input_contactpreference = 'email';
	else if(preferencePost.checked) input_contactpreference = 'post';
	else if(preferencePhone.checked) input_contactpreference = 'Phone';
	
	var unlimitedalcohol = document.getElementById("unlimitedalcohol");
	var roomservice = document.getElementById("roomservice");
	var dancenight = document.getElementById("dancenight");
	
	var input_comment = document.getElementById("commentarea");
	
	//Now that all the elements have been created lets locally store them 
	localStorage.setItem("firstname", input_firstname.value);
	localStorage.setItem("lastname", input_lastname.value);
	localStorage.setItem("email", input_email.value);
	localStorage.setItem("phonenumber", input_phonenumber.value);
	localStorage.setItem("inputAddress", input_address.value);
	localStorage.setItem("suburbtown", input_suburb.value);
	localStorage.setItem("postcode", input_postcode.value);
	localStorage.setItem("state", input_state.value);
	
	localStorage.setItem("contactpref", input_contactpreference);
	localStorage.setItem("commentarea", input_comment.value);
	
	
	//Page transition to payments for confirmation.
	window.location.href = 'payment.html';
	

	
	
}

function load_session_data()
{
	'use strict';
	if (typeof(Storage) !== "undefined") {
		//Retrieve first name
		document.getElementById("firstname").innerHTML = localStorage.getItem("firstname");
		
		//Retrieve Last name
		document.getElementById("lastname").innerHTML = localStorage.getItem("lastname");
		
		//Retrieve Email name
		document.getElementById("email").innerHTML = localStorage.getItem("email");
		
		//Retrieve Phonenumber name
		document.getElementById("phonenumber").innerHTML = localStorage.getItem("phonenumber");
		
		//Retrieve Address name
		document.getElementById("address").innerHTML = localStorage.getItem("inputAddress");
		
		//Retrieve Surburb
		document.getElementById("surburb").innerHTML = localStorage.getItem("suburbtown");
		
		//Retrieve Postcode
		document.getElementById("postcode").innerHTML = localStorage.getItem("postcode");
		
		//Retrieve state
		document.getElementById("state").innerHTML = localStorage.getItem("state");
		
		//Retrieve Contact pref
		document.getElementById("contactpref").innerHTML = localStorage.getItem("contactpref");
		
		//Retrieve Comment area
		document.getElementById("commentarea").innerHTML = localStorage.getItem("commentarea");
	}
	
	
}
