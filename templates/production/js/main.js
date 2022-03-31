$(function () {

    $('.index__fly').each(function () {
        
        $(this).paroller({ type: 'foreground', direction: 'vertical' });
    });

    $(".scroll_to").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'), top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});

    $('.up_button_ico').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: 0}, 800);
    });

    var scroolToTopButton = $("#upToTopButton");

    scroolToTopButton.on('click', function() {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    window.onscroll = function() {
        
        var oH = document.documentElement.clientHeight / 2;

        if (document.body.scrollTop > oH || document.documentElement.scrollTop > oH) {
            scroolToTopButton.show();
        } else {
            scroolToTopButton.hide();
        }

    };
});