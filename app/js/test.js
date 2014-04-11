(function($) {

	var configMap;

	configMap = {

		extendedHeight: 200,
		retractedHeight: 100

	};

	function animateRotate(d){

    	$({deg: 0}).animate({deg: d}, {
        	step: function(now){
        		console.log(now);
            		$("#test-footer-btn").css({
                 		transform: "rotate(" + now + "deg)"
            		});
        	}
    	});

	}

	function toggleFooter() {

		var testFooterHeight;

		testFooterHeight = $('#test-footer').height();

		if (testFooterHeight === configMap.retractedHeight) {

				$('#test-footer').animate({
					height: 200
				});
				
				$('#test-footer-btn').animate({
					bottom: 160
				});

				animateRotate(180);

				$('#magic-footer-container').fadeIn();

				return true;
			
			} else if (testFooterHeight === configMap.extendedHeight) {

				$('#test-footer').animate({
					height: 100
				});
				$('#test-footer-btn').animate({
					bottom: 60
				});

				$('#magic-footer-container').fadeOut();

				animateRotate(-360);

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