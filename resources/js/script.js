$(document).ready(function(){
	 $("a[href^='#']").on('click', function (e) {
            var hash = this.hash;

            $('html, body').animate({
                  scrollTop: $(hash).offset().top
            }, 1000, function () {

                  window.location.hash = hash;
            });
            return false;
      });
});