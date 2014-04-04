//(citing my source)http://webcheatsheet.com/javascript/form_validation.php  this site helped and made much better sense than the book example
function validateContact(theForm) {
var allValidations = "";

  allValidations += validateFirstname(theForm.firstname);
  allValidations += validateLastname(theForm.lastname);
  allValidations += validateEmail(theForm.email);
  allValidations += validatePhone(theForm.phone);
    
  if (allValidations  != "") {
    alert("Please make the following corrections:\n" + allValidations);
    return false;
  }

  alert("Thank you for filling out the form, someone will contact you shortly");
  return false;
}

function validateFirstname(fld) {
    var error = "";
    var illegalChars = /[\W_]/; 
 	//this If/else statement determines what need to be corrected and which ones pass
    if (fld.value == "") {
        fld.style.background = 'Red'; 
        error = "Enter a first name.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Red'; 
        error = "First name contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}
function validateLastname(fld) {
    var error = "";
    var illegalChars = /[\W_]/; 
 
    if (fld.value == "") {
        fld.style.background = 'Red'; 
        error = "Enter a last name.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Red'; 
        error = "Last name contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}
function trim(s)
{
  return s.replace(/^\s+|\s+$/, '');
}
function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = 'Red';
        error = "Enter an email address.\n";
    } else if (!emailFilter.test(tfld)) {            
        fld.style.background = 'Red';
        error = "Enter a valid email address.\n";
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'Red';
        error = "Email address contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}
function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');    

   if (fld.value == "") {
        error = "Enter a phone number.\n";
        fld.style.background = 'Red';
        
    //else if (isNaN(parseInt(stripped) contains a string of characters that should start with numbers
    } else if (isNaN(parseInt(stripped))) {
        error = "Phone number contains illegal characters.\n";
        fld.style.background = 'Red';
    //else if (!(stripped.length == 10) sets the length to a required 10 characters
    } else if (!(stripped.length == 10)) {
        error = "Phone number is the wrong length. Please included an area code.\n";
        fld.style.background = 'Red';
    } else {
        fld.style.background = 'White';
    }
    return error;
}
