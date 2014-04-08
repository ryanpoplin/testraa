(function($) {

	var configMap;

	configMap = {

		extendedHeight: 200,
		retractedHeight: 100

	};

	function toggleFooter() {

		var testFooterHeight;

		testFooterHeight = $('#test-footer').height();

		if (testFooterHeight === configMap.retractedHeight) {

				$('#test-footer').animate({
					height: 200
				});
				
				$('#test-footer-btn').animate({
					height: 230
				});

				$('#magic-footer-container').show();

				/*$('#footer-span').hide();*/

				return true;
			
			} else if (testFooterHeight === configMap.extendedHeight) {

				$('#test-footer').animate({
					height: 100
				});
				$('#test-footer-btn').animate({
					height: 130
				});

				$('#magic-footer-container').hide();

				$('#footer-span').show();

				return true;

			}

		return false;
	}

	$(function() {

		$('#magic-footer-container').hide();
		
		$('#test-footer-btn').on('click', function(event) {

			toggleFooter();
		
		});

	});

}(jQuery));