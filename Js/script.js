$ (function(){
setTimeout(LoadingEnd,1000);

// start dropdown

$('.custom-dropdown').on('show.bs.dropdown', function() {
    // $(this).find('.dropdown-menu').first().stop(false, false).slideDown();
     // $(this).find('.dropdown-menu').addClass('active');
     var that = $(this);
    setTimeout(function(){
        that.find('.dropdown-menu').addClass('active');
    }, 100);
    

  });
  $('.custom-dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').removeClass('active');
  });

// end dropdown

// start slider 1

$('#slider-first').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  items:1,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  animateOut:false,
  smartSpeed:1500
})

// end slider1

// start slider seccond

$('#slider-second').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  items:1,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  animateOut:false,
  smartSpeed:1200
})

// end slider seccond

})

function LoadingEnd () {
    var loaded = $("#preloader");
    loaded.addClass("d-none");
}