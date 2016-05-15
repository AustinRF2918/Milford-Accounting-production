var nameGood = false;
var emailGood = false;
var phoneGood = false;

$('#submission').click(false);

$('.close, .close-it').click(function(){
    $('.modal-dialog').fadeOut('slow');
});

$('#submission').click(function()
{
    $('#problems').empty();
    //Use php at this point to send form data.
    if (nameGood && emailGood && phoneGood)
    {
	document.forms["sentMessage"].submit();

    }
    else
    {
	if (!nameGood)
	{
	    $('#problems').append('<li>Invalid name</li>');
	}

	if (!emailGood)
	{
	    $('#problems').append('<li>Invalid email</li>');
	}

	if (!phoneGood)
	{
	    $('#problems').append('<li>Invalid phone</li>');
	}
	$(".modal-dialog-bad").fadeIn('slow');
    }
})

$('#name-form').on('input', function(){
    var input = $(this);
    var enteredData = input.val();
	if (enteredData.length < 5)
	{
	    nameGood = false;
	}
	else
	{
	    nameGood = true;
	}
});

$('#email-form').on('input', function(){
    var input = $(this);
    var enteredData = input.val();
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var out=emailRegex.test(input.val());

    if (out == false)
    {
	emailGood = false;
    }
    else
    {
	emailGood = true;
    }
});

$('#phone-form').on('input', function(){
    var input = $(this);
    var enteredData = input.val();
    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    var out=phoneRegex.test(input.val());

    if (out == false)
    {
	phoneGood = false;
    }
    else
    {
	phoneGood = true;
    }
});
