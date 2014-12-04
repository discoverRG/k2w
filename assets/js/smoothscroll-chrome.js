// Smooth Scrolling for Internal Links
  $('a[href*=#]').each(function() {
    if($(this).attr('href').indexOf("#") == 0) {
      $(this).click(function(e) {
        e.preventDefault();
        var targetOffset = $($(this).attr('href')).offset().top;
        $('body').animate({scrollTop: targetOffset - 60}, 700);
      });
    }
  });