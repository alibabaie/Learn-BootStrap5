$ (function(){

  // start tooltip

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// end tooltip
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

// start slider three

$('#slider-three').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  items:1,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  animateOut:false,
  smartSpeed:1500,
  responsive:{
    0:{
        items:1
    },
    576:{
        items:2
    },
    768:{
        items:3
    },
    992:{
        items:1
    }
}
})

// end slider three

// start slider four

$('#slider-four').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  rtl:true,
  items:1,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  animateOut:false,
  smartSpeed:1500,
  navText:[
    '<span class="fs-3 fw-bold bi bi-chevron-double-right"></span>',
    '<span class="fs-3 fw-bold bi bi-chevron-double-left"></span>'
  ],
  responsive:{
    0:{
        items:1
    },
    576:{
        items:2
    },
    768:{
        items:3
    },
    992:{
        items:4
    }
}
})

// end slider four

})

function LoadingEnd () {
    var loaded = $("#preloader");
    loaded.addClass("d-none");
}