function userFeedbackMain() {
	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");
	if (option1.checked == false && option2.checked == false && option3.checked == false)
	{
		alert("Please select an otpion before you submit. Thank you!")
		return
	}

	if (option1.checked)
	{
		document.getElementById("userFeedbackImg").src = "option1.jpg";
		option1.checked = false;
	}

	if (option2.checked)
	{
		document.getElementById("userFeedbackImg").src = "option2.jpg";
		option2.checked = false;
	}

	if (option3.checked)
	{
		document.getElementById("userFeedbackImg").src = "option3.jpg";
		option3.checked = false;
	}

	var targetText = document.getElementById("userFeedbackCount");
	targetText.innerHTML = "Sample Size = 10 People"
	alert("Thank you for your response. We have now updated the review results.")
}