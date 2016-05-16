var AuthenticationForm = function(passwordForm, emailForm, nameForm, modalName, problemList){
    this.nameGood = false;
    this.emailGood = false;
    this.phoneGood = false;

    this.passwordForm = $(passwordForm);
    this.emaiForm = $(emailForm);
    this.nameForm = $(nameForm);

    this.modalName = $(modalName);
    this.problemList = $(problemList);
};

//Here we will call this on the sentMessage ID for the form we are using.
AuthenticationForm.prototype.hookSubmission = function(sentMessage)
    $('#submission').click(function(){
	if (this.nameGood && this.emailGood && this.phoneGood)
	{
	    document.forms[sentMessage].submit();
	    window.location.href = 'contact-good.html';
	}
	else
	{
	    //Append list with errors.
	    if (!nameGood)
	    {
		this.problemList.append('<li>Invalid name</li>');
		this.nameForm.val('');
	    }

	    if (!emailGood)
	    {
		this.problemList.append('<li>Invalid email</li>');
		this.emailForm.val('');
	    }

	    if (!phoneGood)
	    {
		this.problemList.append('<li>Invalid phone</li>');
		this.phoneForm.val('');
	    }

	    //Fade in bad modal dialgoue
	    $(".modal-dialog-bad").fadeIn('slow');
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

AuthenitcationForm.prototype.hookInputHandlers = function()
{
    this.nameForm.on('input', function(){
	var input = $(this);
	var enteredData = input.val();

	    if (enteredData.length < 5 && enteredData != '')
	    {
		this.nameForm.addClass("bg-danger");
		this.nameGood = false;
	    }
	    else
	    {
		this.nameForm.removeClass("bg-danger");
		this.nameGood = true;
	    }
    });

    this.emailForm.on('input', function(){
	var input = $(this);
	var enteredData = input.val();
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var out=emailRegex.test(input.val());

	if (out == false && enteredData != '')
	{
	    this.emailForm.addClass("bg-danger");
	    this.emailGood = false;
	}
	else
	{
	    this.emailForm.removeClass("bg-danger");
	    this.emailGood = true;
	}
    });

    this.phoneForm.on('input', function(){
	var input = $(this);
	var enteredData = input.val();
	var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

	var out=phoneRegex.test(input.val());

	if (out == false && enteredData != '')
	{
	    this.phoneForm.addClass("bg-danger");
	    this.phoneGood = false;
	}
	else
	{
	    this.phoneForm.removeClass("bg-danger");
	    this.phoneGood = true;
	}
    });
};

AuthenitcationForm.prototype.hookInputHandlers = function(){
    this.emailForm.focusout(function(){
	if (this.emailGood)
	{
	    this.emailForm.removeClass("bg-danger");
	}
    });

    this.emailForm.focusin(function(){
	if (!this.phoneGood && $('#phone-form').val() != '')
	{
	    this.phoneForm.addClass("bg-danger");
	}
	if (!this.nameGood && $('#name-form').val() != '')
	{
	    this.emailForm.addClass("bg-danger");
	}
    });

    this.phoneForm.focusin(function(){
	if (!this.emailGood && $('#email-form').val() != '')
	{
	    this.emailForm.addClass("bg-danger");
	}
	if (!this.nameGood && $('#name-form').val() != '')
	{
	    this.nameForm.addClass("bg-danger");
	}
    });

    this.nameForm.focusin(function(){
	if (!this.emailGood && $('#email-form').val() != '')
	{
	    this.emailForm.addClass("bg-danger");
	}
	if (!this.phoneGood && $('#phone-form').val() != '')
	{
	    this.phoneForm..addClass("bg-danger");
	}
    });


    this.phoneForm.focusout(function(){
	if (this.phoneGood)
	{
	    this.phoneForm.removeClass("bg-danger");
	}
    });

    this.nameForm.focusout(function(){
	if (this.nameGood)
	{
	    this.nameForm.removeClass("bg-danger");
	}
    });
};
