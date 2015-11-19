$(document).ready(function() {
  var windowElement = $(window);
  var windowHeight = windowElement.height(),
    viewRangeTop = windowHeight * .2,
    viewRangeBottom = windowHeight * .95;

  var elementCount = {};

  //Setup Animate for elements outside of veiw range on page load
  function setupAnimations(){
    $('.animate-in').each(function() {
      var element = $(this);
      var elementTop = element.offset().top - windowElement.scrollTop();

      // Check if this element is view range
      if (elementTop > viewRangeBottom && elementTop > windowHeight + windowElement.scrollTop()) {
        element.addClass("waiting");

        // Track ScrollTops and Set Delay on Elements with Same ScrollTop
        var count = elementCount[elementTop];
        if(count == null) count = 0;
        var delay = count * 1000 * .5;
        count += 1;
        elementCount[elementTop] = count;
        if(count > 1) element.css({
          '-moz-transition-delay': delay +'ms',
          '-webkit-transition-delay': delay +'ms',
          'transition-delay': delay +'ms'
        }).data('delay', delay);

        // Prevents Seeing Animate Offscreen on Setup
        setTimeout(function() {element.addClass('set-transition');}, 100);
      }
    });
  }
  setTimeout(setupAnimations, 500);

  windowElement.on('scroll resize load', function() {
    // On each scroll check if class is in view range
    $('.animate-in.waiting').each(function() {
      var element = $(this);
      var elementTop = element.offset().top - windowElement.scrollTop();

      // Check if this element is view range
      if (elementTop < viewRangeBottom && (elementTop + element.height()) > viewRangeTop) {
        element.removeClass("waiting")
        setTimeout(function() {
          element.css({
            '-moz-transition-delay': '0s',
            '-webkit-transition-delay': '0s',
            'transition-delay': '0s'
          });
        }, element.data('delay'));
      }
    });
  });
});
