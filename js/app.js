//Construct form handlers with a phone form, an email form, a name form, a hidden dialogue to show when good (Actually unused), and your problem error list
var formHandler = new AuthenticationForm($(' #phone-form'), $('#email-form'), $('#name-form'), $('.modal-dialog-good'), $('#problems'));

//Hook submission to form name, response html, submission button, bad modal, and close buttons
formHandler.hookSubmission('sentMessage', 'contact-good.html', $('#submission'), $('.modal-dialog-bad'), $('.close, .close-it'));

//Hook input handlers to a style.
formHandler.hookInputHandlers('bg-danger');

//Hook input handlers to a style.
formHandler.hookChangeHandlers('bg-danger');
