(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
	
	var activities = document.getElementById("creditcardtype");
	
	/*
	Patterns dont work for input rest in piece.
	activities.addEventListener("click", function() {
		CheckCardNumber();
	});
	*/
	
	
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
		
		var validation = CheckCardNumber();
		
		if(!validation)
		{
			event.preventDefault();
			event.stopPropagation();
		}
		
		
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function CheckCardNumber()
{
	
	"use strict";
	var cardnumber = document.getElementById("creditcardnumber").value;
	var creditcardtype = document.getElementById("creditcardtype").value;
	var validate = true;
	
	switch(creditcardtype)
	{
		case "VISA": 
		{
			var substring = cardnumber.substring(0,1)
			if(parseInt(substring) != 4)
			{
				alert("Visa must start with a card number 4");
				validate = false;
			}
			//document.getElementById("creditcardnumber").setAttribute("pattern","/(^\d)*[6](^\d)*[1]{15,16}/");
			
		}
		break;
		
		case "MASTERCARD": 
		{
			var substring = cardnumber.substring(0,2)
			if(parseInt(substring) < 51 || parseInt(substring) > 55)
			{
				alert("Mastercard must start with a card number 51-55");
				validate = false;
			}
			//document.getElementById("creditcardnumber").setAttribute("pattern","/(^\d)*[6](^\d)*[1]{15,16}/");
			
		}
		//cardnumber.setAttribute("pattern","^\d{5}");
		break;
		
		case "AMERICAN EXPRESS":
		if(parseInt(substring) >= 34 || parseInt(substring) <= 37)
			{
				alert("American express must start with a card number 34-37");
				validate = false;
			}
		//cardnumber.setAttribute("pattern","^\d{5}");
		break;
		default:
		
	}
	
	return validate;
	
	
}

//This functionality is only called on payment.html which is why
//I have seperated out the javascript files
function load_session_data()
{
	'use strict';
	if (typeof(Storage) !== "undefined") {
		//Retrieve first name
		document.getElementById("firstname").value = localStorage.getItem("firstname");
		
		//Retrieve Last name
		document.getElementById("lastname").value = localStorage.getItem("lastname");
		
		//Retrieve Email name
		document.getElementById("email").value = localStorage.getItem("email");
		
		//Retrieve Phonenumber name
		document.getElementById("phonenumber").value = localStorage.getItem("phonenumber");
		
		//Retrieve Address name
		document.getElementById("address").value = localStorage.getItem("inputAddress");
		
		//Retrieve Surburb
		document.getElementById("surburb").value = localStorage.getItem("suburbtown");
		
		//Retrieve Postcode
		document.getElementById("postcode").value = localStorage.getItem("postcode");
		
		//Retrieve state
		document.getElementById("state").value = localStorage.getItem("state");
		
		//Retrieve Contact pref
		document.getElementById("contactpref").value = localStorage.getItem("contactpref");
		
		//Retrieve Comment area
		document.getElementById("commentarea").value = localStorage.getItem("commentarea");
		
		
		//Display text
		document.getElementById("PackageName").innerHTML = localStorage.getItem("packagename");
		document.getElementById("PackageQuantity").innerHTML = localStorage.getItem("PackageQuantity");
		document.getElementById("Totalprice").innerHTML = "$" + localStorage.getItem("totalprice");
		
	
	}
}