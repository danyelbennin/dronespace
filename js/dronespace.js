$(document).ready(function(){
        $("#myCarousel").carousel({
         interval : 8000,
         pause: false
        });
    });

$.fn.extend({
    animateCss: function (wobble) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + wobble).one(animationEnd, function() {
            $(this).removeClass('animated ' + wobble);
        });
    }
});

$('#main-heading').animateCss('wobble');


