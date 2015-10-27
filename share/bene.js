// JavaScript Document

function validateForm() {
	var checkamount = document.forms["benefactor"]["amount"].value;
    if (checkamount == null || checkamount == "") {
        alert("Please add an amount");
        return false;
    }
	
    var checkpayment = document.forms["benefactor"]["payment"].value;
    if (checkpayment == null || checkpayment == "") {
        alert("Select a payment method");
        return false;
    }
	
	var checkname = document.forms["benefactor"]["name"].value;
    if (checkname == null || checkname == "") {
        alert("Please fill in your name");
        return false;
    }
	var checkaddress = document.forms["benefactor"]["address"].value;
    if (checkaddress == null || checkaddress == "") {
        alert("Please add an address");
        return false;
    }
	
	var checkemail = document.forms["benefactor"]["email"].value;
    if (checkemail == null || checkemail == "") {
        alert("Please add an email");
        return false;
    }
	
	var checkphone = document.forms["benefactor"]["phone"].value;
    if (checkphone == null || checkphopne == "") {
        alert("Please add a phone number");
        return false;
    }
}






