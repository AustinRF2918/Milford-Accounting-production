var nameGood = false;
var emailGood = false;
var phoneGood = false;

$('#submission').click(false);
$(".modal-dialog-show").fadeIn('slow');

$('.close, .close-it').click(function(){
    $('.modal-dialog-show, .modal-dialog, .modal-dialog-bad').fadeOut();
});

$('#submission').click(function()
{
    $('#problems').empty();
    //Use php at this point to send form data.
    if (nameGood && emailGood && phoneGood)
    {
        document.forms["sentMessage"].submit();
        window.location.href = 'contact-good.html';
    }
    else
    {
	if (!nameGood)
	{
	    $('#problems').append('<li>Invalid name</li>');
	    $('#name-form').val('');
	}

	if (!emailGood)
	{
	    $('#problems').append('<li>Invalid email</li>');
	    $('#email-form').val('');
	}

	if (!phoneGood)
	{
	    $('#problems').append('<li>Invalid phone</li>');
	    $('#phone-form').val('');
	}
	$(".modal-dialog-bad").fadeIn('slow');
    }
})

$('#name-form').on('input', function(){
    var input = $(this);
    var enteredData = input.val();

	if (enteredData.length < 5 && enteredData != '')
	{
        $('#name-form').addClass("bg-danger");
	    nameGood = false;
	}
	else
	{
        $('#name-form').removeClass("bg-danger");
	    nameGood = true;
	}
});

$('#email-form').on('input', function(){
    var input = $(this);
    var enteredData = input.val();
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var out=emailRegex.test(input.val());

    if (out == false && enteredData != '')
    {
        $('#email-form').addClass("bg-danger");
        emailGood = false;
    }
    else
    {
        $('#email-form').removeClass("bg-danger");
        emailGood = true;
    }
});

$('#email-form').focusout(function(){
    if (emailGood)
    {
        $('#email-form').removeClass("bg-danger");
    }
});

$('#email-form').focusin(function(){
    if (!phoneGood && $('#phone-form').val() != '')
    {
        $('#phone-form').addClass("bg-danger");
    }
    if (!nameGood && $('#name-form').val() != '')
    {
        $('#name-form').addClass("bg-danger");
    }
});

$('#phone-form').focusin(function(){
    if (!emailGood && $('#email-form').val() != '')
    {
        $('#email-form').addClass("bg-danger");
    }
    if (!nameGood && $('#name-form').val() != '')
    {
        $('#name-form').addClass("bg-danger");
    }
});

$('#name-form').focusin(function(){
    if (!emailGood && $('#email-form').val() != '')
    {
        $('#email-form').addClass("bg-danger");
    }
    if (!phoneGood && $('#phone-form').val() != '')
    {
        $('#phone-form').addClass("bg-danger");
    }
});


$('#phone-form').focusout(function(){
    if (phoneGood)
    {
        $('#phone-form').removeClass("bg-danger");
    }
});

$('#name-form').focusout(function(){
    if (nameGood)
    {
        $('#name-form').removeClass("bg-danger");
    }
});


$('#phone-form').on('input', function(){
    var input = $(this);
    var enteredData = input.val();
    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    var out=phoneRegex.test(input.val());

    if (out == false && enteredData != '')
    {
        $('#phone-form').addClass("bg-danger");
        phoneGood = false;
    }
    else
    {
        $('#phone-form').removeClass("bg-danger");
        phoneGood = true;
    }
});
