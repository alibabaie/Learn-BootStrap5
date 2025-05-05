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

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  items:1
})

// end slider1

})

function LoadingEnd () {
    var loaded = $("#preloader");
    loaded.addClass("d-none");
}