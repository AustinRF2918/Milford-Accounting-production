<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>TestBed</title>
        <link rel="stylesheet" href="css/app.css" type="text/css">	
        <link href="http://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet" type="text/css">
        <link href="css/ys.css" rel="stylesheet">
    </head>
<body >
   <div class="bg-pages">                                                                       
     <div class="navbar-general">                                                             
       <div class="container">                                                              
         <a href="index.html" class="btn-navbar btn-navbar-brand tp-md-up-2 tp-sm-in-2 tp-xs-in-1">Home</a>                                                                                   
         <a href="#" class="btn-navbar btn-navbar-other tp-md-up-2 tp-sm-in-2 tp-xs-in-1 active">Contact</a>                                                                              
         <a href="about.html" class="btn-navbar btn-navbar-other tp-md-up-2 tp-sm-in-2 tp-xs-in-1">About</a>                                                                                  
       </div>                                                                               
     </div>                                                                                   
</div>  
    <div class="container-fluid contact-content row-xs-13-over contact-page-cta login-cluster form-cluster-md-8">
	<div class="row">
        <div class = "top-xs-1-over">
	    <div class="form-cluster-md-8 jumbotron-minimal-forms">
		<div class="form-cluster-title form-cluster-custom ">
		    <h4 class="tp-sm-up-5 text-uppercase text-xs-center m-b-3">Contact Me</h4>
		</div>
		<form name="sentMessage" id="contactForm" novalidate method="post" action="contactresponse.php">
		    <div class="form-group row">
			<div class="col-sm-12">
			<input type="text" class="form-control" name="name" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."><p class="help-block text-danger"></p>
			</div>
		    </div>
		    <div class="form-group row">
			<div class="col-sm-12">
			<input type="email" class="form-control" name="email" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."><p class="help-block text-danger"></p>
			</div>
		    </div>
		    <div class="form-group row">
			<div class="col-sm-12">
			<input type="tel" class="form-control" name="phone" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."><p class="help-block text-danger"></p>
			</div>
		    </div>
		    <div class="form-group row">
			<div class="col-sm-12">
                <textarea rows="5" class="form-control" name="message" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea><p class="help-block text-danger"></p>
			</div>
		    </div>
		    <div class="col-md-4 col-md-offset-4">
			<button type="submit" class="btn btn-cta btn-block  m-t-1 block-center">Submit</a>
		    </div>
		</form>
	    </div>
    </div>
	</div>
        <div class="navbar navbar-fixed-bottom bg-white">
            <p class="text-xs-center hidden-sm-down m-b-0 m-t-0">Copyright Milford Accounting, 2016</p>
        </div>
    </div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
    </body>
</html>
