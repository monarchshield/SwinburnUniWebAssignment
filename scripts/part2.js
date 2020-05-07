

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
			
			
			
			var validation = extra_validation_rules();
			
			
		
			
			//Stores the data and changes the pages.
			store_session_data(validation);
			
				

		}
		
        form.classList.add('was-validated');
      }, false);

    });
	
  }, false);
  	
})();



function extra_validation_rules()
{
	var validation = true;
	
	
	var statevalidation = document.getElementById("state");
	var postcode = document.getElementById("postcode");
	var firstdigit = postcode.value.match(/\d/);
	var postcode_number = parseInt(firstdigit[0]);

	
	
	switch(statevalidation.value)
	{
		case 'VIC':	if(postcode_number != 3 && postcode_number != 8) { alert("VIC postcode starts with 3 or 8"); validation = false; } break;
		case 'NSW':	if(postcode_number != 1 && postcode_number != 2) { alert("NSW postcode starts with 1 or 2"); validation = false; } break;
		case 'QLD': if(postcode_number != 4) { alert("QLD postcode starts with 4"); validation = false; } break;
		case 'NT':	if(postcode_number != 0) { alert("NT postcode  starts with 0"); validation = false; } break;
		case 'SA':	if(postcode_number != 5) { alert("SA postcode starts with 5"); validation = false; } break;
		case 'WA':	if(postcode_number != 6) { alert("WA postcode starts with 6"); validation = false; } break;
		case 'TAS':	if(postcode_number != 7) { alert("TAS postcode starts with 7"); validation = false; } break;
		case 'ACT':	if(postcode_number != 0) { alert("ACT postcode starts with 0"); validation = false; } break;
		default: 
		
		
	}
	
	
	return validation;
	
}


function store_session_data(arg)
{
	'use strict';
	
	if(arg)
	{
	var input_firstname = document.getElementById("firstname");
	var input_lastname = document.getElementById("lastname");
	var input_email = document.getElementById("email");
	var input_phonenumber = document.getElementById("phonenumber");
	var input_address = document.getElementById("inputAddress");
	var input_suburb = document.getElementById("suburbtown");
	var input_postcode = document.getElementById("postcode");
	var input_state = document.getElementById("state");
	
	
	//For Contact forms only
	
	var preferenceContact = document.getElementById("prefferedcontact");
	var peoplequantity = document.getElementById("productquantity");
	
	var itempackage =  document.getElementById("package");
	var totalprice;
	
	
	switch(itempackage.value)
	{
		case "IM BASIC RESORT $1028": {totalprice = 1028 * peoplequantity.value} break;
		case "GETAWAY COVID RETREAT $2350": { totalprice = 2350 * peoplequantity.value } break;
		case "QUARANTINE OF A LIFETIME $6480": { totalprice = 6480 * peoplequantity.value} break;
		case "PARTY NIGHT CRINGE $4325": { totalprice = 4325 * peoplequantity.value} break;
		default:
	}
	
	
	
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
	
	localStorage.setItem("contactpref", preferenceContact.value);
	localStorage.setItem("commentarea", input_comment.value);
	
	
	localStorage.setItem("packagename", itempackage.value);
	localStorage.setItem("PackageQuantity", peoplequantity.value);
	localStorage.setItem("totalprice", totalprice);

	
	//Page transition to payments for confirmation.
	window.location.href = 'payment.html';
	
	}
	
	
}


