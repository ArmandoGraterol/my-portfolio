$(document).ready( function() {
  let scrollLink = $('.scroll');

  scrollLink.click( function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  })

  $(window).scroll(function (){
    let scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 60;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('link--active');
        $(this).parent().siblings().removeClass('link--active');
      }
    })
  })
})