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
        		if (180 === 180) {
        			$('#test-footer-btn').css({
        				transform: "rotate(" + -now + "deg)"
        			});
        		} else {
            		$("#test-footer-btn").css({
                 		transform: "rotate(" + now + "deg)"
            		});
        		}
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
					height: 230
				});

				$('#magic-footer-container').fadeIn();

				return true;
			
			} else if (testFooterHeight === configMap.extendedHeight) {

				$('#test-footer').animate({
					height: 100
				});
				$('#test-footer-btn').animate({
					height: 130
				});

				$('#magic-footer-container').fadeOut();

				$('#footer-span').show();

				return true;

			}

		return false;
	}

	$(function() {

		$('#magic-footer-container').hide();
		
		$('#test-footer-btn').on('click', function(event) {

			animateRotate(180);
			
			toggleFooter();
		
		});

	});

}(jQuery));