var AuthenticationForm = function(phoneForm, emailForm, nameForm, modalName, problemList){
    this.nameGood = false;
    this.emailGood = false;
    this.phoneGood = false;

    this.phoneForm = phoneForm;
    this.emailForm = emailForm;
    this.nameForm = nameForm;

    this.modalName = modalName;
    this.problemList = problemList;
};

//Here we will call this on the sentMessage ID for the form we are using.
AuthenticationForm.prototype.hookSubmission = function(submissionForm, responseLink, submissionButton, badForm, badFormClose)
{
    var thisObject = this;

    badFormClose.click(function(){
        badForm.fadeOut('slow', function()
        {
            thisObject.problemList.empty();
        });
    })

    submissionButton.click(function(){

	if (thisObject.nameGood && thisObject.emailGood && thisObject.phoneGood)
	{
	    document.forms[submissionForm].submit();
	    window.location.href = contactLink;
	}
	else
	{
	    //Append list with errors.
	    if (!thisObject.nameGood)
	    {
		thisObject.problemList.append('<li>Invalid name</li>');
		thisObject.nameForm.val('');
	    }

	    if (!thisObject.emailGood)
	    {
		thisObject.problemList.append('<li>Invalid email</li>');
		thisObject.emailForm.val('');
	    }

	    if (!thisObject.phoneGood)
	    {
		thisObject.problemList.append('<li>Invalid phone</li>');
		thisObject.phoneForm.val('');
	    }

	    //Fade in bad modal dialgoue
	    badForm.fadeIn('slow');
	}
    });

//Should only be called on response window.
AuthenticationForm.prototype.displayModalSuccess = function($modalName, $closeButton)
{
   modalName.fadeIn('slow');

    this.modalName.click(function(){
	modalName.fadeOut('slow');
    });
};

AuthenticationForm.prototype.hookInputHandlers = function(colorClass)
{
    var thisObject = this;

    this.nameForm.on('input', function(){
	var input = $(this);
	var enteredData = input.val();
	    if (enteredData.length < 5 && enteredData != '')
	    {
		thisObject.nameForm.addClass(colorClass);
		thisObject.nameGood = false;
	    }
	    else
	    {
		thisObject.nameForm.removeClass(colorClass);
		thisObject.nameGood = true;
	    }
    });

    this.emailForm.on('input', function(){
	var input = $(this);
	var enteredData = input.val();
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var out=emailRegex.test(input.val());

	if (out == false && enteredData != '')
	{
	    thisObject.emailForm.addClass(colorClass);
	    thisObject.emailGood = false;
	}
	else
	{
	    thisObject.emailForm.removeClass(colorClass);
	    thisObject.emailGood = true;
	}
    });

    this.phoneForm.on('input', function(){
	var input = $(this);
	var enteredData = input.val();
	var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

	var out=phoneRegex.test(input.val());

	if (out == false && enteredData != '')
	{
	    thisObject.phoneForm.addClass(colorClass);
	    thisObject.phoneGood = false;
	}
	else
	{
	    thisObject.phoneForm.removeClass(colorClass);
	    thisObject.phoneGood = true;
	}
    });
};

AuthenticationForm.prototype.hookChangeHandlers = function(colorClass){
    var thisObject = this;

    this.emailForm.focusout(function(){
	if (thisObject.emailGood)
	{
	    thisObject.emailForm.removeClass(colorClass);
	}
    });

    this.emailForm.focusin(function(){
	if (!thisObject.phoneGood && $('#phone-form').val() != '')
	{
	    thisObject.phoneForm.addClass(colorClass);
	}
	if (!this.nameGood && $('#name-form').val() != '')
	{
	    thisObject.emailForm.addClass(colorClass);
	}
    });

    this.phoneForm.focusin(function(){
	if (!thisObject.emailGood && $('#email-form').val() != '')
	{
	    thisObject.emailForm.addClass(colorClass);
	}
	if (!thisObject.nameGood && $('#name-form').val() != '')
	{
	    thisObject.nameForm.addClass(colorClass);
	}
    });

    this.nameForm.focusin(function(){
	if (!thisObject.emailGood && $('#email-form').val() != '')
	{
	    thisObject.emailForm.addClass(colorClass);
	}
	if (!thisObject.phoneGood && $('#phone-form').val() != '')
	{
	    thisObject.phoneForm.addClass(colorClass);
	}
    });


    this.phoneForm.focusout(function(){
	if (thisObject.phoneGood)
	{
	    thisObject.phoneForm.removeClass(colorClass);
	}
    });

    this.nameForm.focusout(function(){
	if (thisObject.nameGood)
	{
	    thisObject.nameForm.removeClass(colorClass);
	}
    });
};
}
