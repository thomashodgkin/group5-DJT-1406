// JavaScript Document

// Part of Regular Expression for Email Validation found on "http://stackoverflow.com/questions/46155/validate-email-address-in-javascript".

function validateInput(box, type, labelID, returnAs)
{
	var re;
	var validInput;
	var changeBoxInteriorBool;
	var boxValue = box.value;
	var label = document.getElementById(labelID);
	
	switch(type)
		{
		case "email":
			re = new RegExp('^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$');
			changeBoxInteriorBool = true;
			break;
		case "anything":
			re = new RegExp('.');
			changeBoxInteriorBool = true;
			break;
		case "message":
			re = new RegExp('.{20,}');
			changeBoxInteriorBool = false;
			break;
		default:
			console.log("Error: Type validation not valid.");
			re = "Undefined";
			changeBoxInteriorBool = false;
			break;
		}
	
	validInput = re.test(boxValue);
	
	if (changeBoxInteriorBool === true)
	{
		changeBoxInterior(validInput, box, type, labelID);
	}
	changeLabel(validInput, label, type, labelID);
	
	if (returnAs === "asBoolean")		
	{
		if (validInput === false)
		{
			return false;
		}
		else 
		{
			return true;
		}
	}
}

function changeBoxInterior(validInput, box, type, labelID)
{	
	if (validInput === true)
	{
		box.style.backgroundColor = "#60ff60";
		box.style.borderColor = "#00ff00";
	}
	else 
	{
		box.style.backgroundColor = "#ff6060";
		box.style.borderColor = "#ff0000";
	}
}

function changeLabel(validInput, label, type, labelID)
{
	if (validInput === true)
	{
		label.style.color = "#60ff60";
		if (type === "message")
		{
			label.innerHTML = "Message:";
		}
		if (type === "email")
		{
			label.innerHTML = "Email:";
		}
		if (labelID === "Label_1")
		{
			label.innerHTML = "Full Name:";
		}
		if (labelID === "Label_3")
		{
			label.innerHTML = "Subject:";
		}
	}
	else 
	{
		label.style.color = "#ff0000";
		if (type === "message")
		{
			label.innerHTML = "Message: You need at least 20 characters.";
		}
		if (type === "email")
		{
			label.innerHTML = "Email: This is not a valid Email.";
		}
		if (labelID === "Label_1")
		{
			label.innerHTML = "Full Name: You need enter your name.";
		}
		if (labelID === "Label_3")
		{
			label.innerHTML = "Subject: You need enter a subject.";
		}
		
	}
}

function submitForm()
{
	var input1Valid = validateInput(document.getElementById('Input_1'), 'anything', 'Label_1', 'asBoolean');
	var input2Valid = validateInput(document.getElementById('Input_2'), 'email', 'Label_2', 'asBoolean');
	var input3Valid = validateInput(document.getElementById('Input_3'), 'anything', 'Label_3', 'asBoolean');
	var input4Valid = validateInput(document.getElementById('Input_4'), 'message', 'Label_4', 'asBoolean');

	if (input1Valid === true && input2Valid === true && input3Valid === true && input4Valid === true)
	{
		return true;
	}
	else
	{
		return false;
	}
}

