var viewerApp = angular.module("viewerApp", []);

viewerApp.controller("ViewerController", function($scope) {
	$scope.message = "Poc Impl Viewer";

	$scope.baseImagePath = "static/img/";
	$scope.displayedImage = $scope.baseImagePath + "Koala.jpg";

	$scope.basePDFPath = "static/pdf/";
	$scope.displayedPDF = $scope.basePDFPath + "Hello.pdf";	

	$scope.displayImage = function(imageToDisplay) {
		$scope.displayedImage = $scope.baseImagePath + imageToDisplay;
	}

	$scope.changePDF = function(pdfToDisplay){
		$scope.displayedPDF = $scope.basePDFPath + pdfToDisplay;
		$scope.renderPDF();
	}

	$scope.renderPDF = function(){
		PDFJS.getDocument($scope.displayedPDF).then(function(pdf) {
		  	pdf.getPage(1).then(function(page) {
			  	var scale = 1.5;
				var viewport = page.getViewport(scale);

				var canvas = document.getElementById('canvas');
				var context = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				var renderContext = {
				  canvasContext: context,
				  viewport: viewport
				};

				page.render(renderContext);
			});
		});
	}

	$scope.renderPDF();
});