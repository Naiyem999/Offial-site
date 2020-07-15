//sticky menu
$(document).ready(function(){
    
    $(".stcky-section").waypoint(function(direction){
        if(direction == "down"){
                $("nav").addClass("sticky");
            }   else{
                    $("nav").removeClass("sticky");
            }
    });
});
//AOS 
AOS.init();
// smooth
var scroll = new SmoothScroll('a[href*="#"]');

//backspacing menu
var typed = new Typed('.backspacing', {
    strings: [
        "Motivational Speakers",
        "Professional Speakers",
        "Business Speakers", 
        "Professional Life Coach"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 3000,
    startDelay: 1000,
    loop: true,
    showCursor: true
    });
    //carousel 
    $('.test-slides , .service-crsl').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
    0:{
    items:1
    },
    600:{
    items:2
    },
    1000:{
    items:3
    }
    }
    });

    $('.tstmnl').owlCarousel({
    loop:true,
    nav:false,
    margin:20,
    autoplay:true,
    responsive:{
    0:{
    items:1
    },
    }
    });

    $('body').scrollspy({ target: '#list-example' })































