console.log("hello.");
var blueBikeApplication = angular.module("blueBikeLandingPage", ['ngAnimate']);

blueBikeApplication.controller("lightboxController", function($scope){
    $scope.lightboxActive = false;
    $scope.nameBuffer = "";
    $scope.imageBufferList = "";
    $scope.imageBuffer = "";
    $scope.currentImageBuffer = 0;

    //CUSTOM VARIABLES
	//Focused style
	$scope.focused = "col-md-2";

	//Nonfocused style
	$scope.unfocused = "col-md-1";

	//Number of photo/types in gallery.
	$scope.selectionNumber = 3;

	//Mapping of selection numbers to
	$scope.selectionMap = {0 : $('#medium-phone'), 1 : $('#medium-desktop'), 2: $('#medium-laptop')}

	//Names of s.
	$scope.names = ["The Card Buggy", "Milford Accounting", "Leadsnare"]

	//Mapping of  names to link lists, with selection number as the number of possibiities.
	$scope.assetMap = {"The Card Buggy" : ["img/asset-phone.png", "img/asset-desktop.png", "img/asset-laptop.png"],
			    "Milford Accounting" : ["img/asset-phone.png", "img/asset-desktop.png", "img/asset-laptop.png"],
			    "Leadsnare" : ["img/asset-phone.png", "img/asset-desktop.png", "img/asset-laptop.png"]}

    //Define another function that sets src values.
    $scope.toggleLightbox = function(arguments)
    {
	if (!$scope.lightboxActive && arguments != "close")
	{
	    $scope.lightboxActive = !$scope.lightboxActive;
	    for (var i = 1; i < $scope.selectionNumber; i++)
	    {
		makeSmaller($scope.selectionMap[i], $scope.focused, $scope.unfocused)
	    }

	    makeLarger($scope.selectionMap[0], $scope.unfocused, $scope.focused)

	    $scope.nameBufferNumeric = arguments - 1;
	    $scope.nameBuffer = $scope.names[arguments - 1];
	    $scope.imageBufferList = $scope.assetMap[$scope.nameBuffer];
	    $scope.imageBuffer = $scope.imageBufferList[0];

	    //console.log("Showing lightbox");
	    //console.log("Toggling Lightbox: ", arguments);
	}

	if ($scope.lightboxActive && arguments == "close")
	{
	    $scope.lightboxActive = !$scope.lightboxActive;
	    $scope.currentImageBuffer = 0;
	    //console.log("Hiding lightbox");
	}
    };

    $scope.setMediaBuffer = function(numeric)
    {
	if (numeric < $scope.selectionNumber && $scope.selectionNumber > 0 && $scope.currentImageBuffer  != numeric)
	{
	    rotateImages($scope.selectionMap[$scope.currentImageBuffer], $scope.selectionMap[numeric], $scope.focused, $scope.unfocused);
	}
	else
	{
	    //console.log("Media buffer at invalid position.")
	}

	//console.log("Seting currentImageBuffer: ", numeric);
	$scope.currentImageBuffer = numeric;
	$scope.imageBuffer = $scope.imageBufferList[numeric];
    };

    $scope.setMediaBufferKeyboard = function()
    {
	console.log("Changing mediaBuffer location.");
	//Right Boundary
	if ($scope.currentImageBuffer == $scope.selectionNumber)
	{
	    $scope.currentImageBuffer = 0;
	}
	else
	{
	    $scope.currentImageBuffer += 1;
	}
    };
    $scope.initializeLightbox = function(){

    $('body').keypress(function(e)
    {
	$scope.$apply(function(){
	    if (e.key === "ArrowLeft" && $scope.currentImageBuffer != 0)
	    {
		$scope.setMediaBuffer($scope.currentImageBuffer - 1);
	    }

	    if (e.key === "ArrowRight" && $scope.currentImageBuffer != $scope.selectionNumber - 1)
	    {
		$scope.setMediaBuffer($scope.currentImageBuffer + 1);
	    }
	});
    });
    };
});

var rotateImages = function($selectorOne, $selectorTwo, focused, nonFocused)
{
    makeSmaller($selectorOne, focused, nonFocused,
		makeLarger, $selectorTwo);
};

//Utility functions.
var makeSmaller = function($selector, focused, nonFocused, optionalCallback, optionalSelector)
{
    if ($selector.hasClass(focused))
    {
	$selector.switchClass(focused, nonFocused, 250, "easeInOutQuad");
    }

    if (optionalCallback != null)
	{
	setTimeout(function(){
	    $selector.switchClass(focused, nonFocused, 250, "easeInOutQuad");
	    optionalCallback(optionalSelector, nonFocused, focused);
	});
    }

};

var makeLarger = function($selector, nonFocused, focused, optionalCallback)
{
    if ($selector.hasClass(nonFocused))
    {
	$selector.switchClass(nonFocused, focused, 250, "easeInOutQuad");
    }
};


