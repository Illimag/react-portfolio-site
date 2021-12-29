var $ = jQuery.noConflict();

(function($) {
    "use strict";
    
    var width  =  $(window).width();
    
    /*-------------------------------------------------*/
    /* =  Mobile Hover
    /*-------------------------------------------------*/
    var mobileHover = function () {
        $('*').on('touchstart', function () {
            $(this).trigger('hover');
        }).on('touchend', function () {
            $(this).trigger('hover');
        });
    };

    mobileHover();
    /*-------------------------------------------------*/
    /* =  loader
    /*-------------------------------------------------*/
    Pace.on("done", function(){
        $("#myloader").fadeOut(800);
    });
    /*-------------------------------------------------*/
    /* =  Menu
    /*-------------------------------------------------*/
    try {
        $('.menu-button').on("click",function() {
            
            //menu classic, menu sidemenu, menu basic
            var menu = $('#menu');
            var menuClassic = $('#menu-classic');
            var sidemenu = $('#sidemenu');
            var menuResponsiveSidemenu = $('#menu-responsive-sidemenu');
            var menuResponsiveClassic = $('#menu-responsive-classic');
            
            menu.toggleClass('open');
            menuClassic.toggleClass('open');
            sidemenu.addClass('sidemenu open');
            menuResponsiveSidemenu.toggleClass('open');
            menuResponsiveClassic.toggleClass('open');
            menu.addClass('animated slideInDown');
            $('.submenu', menuClassic).each(function() {
                $('.submenu', menuClassic).removeClass( "open" );
            });
            if ( sidemenu.hasClass( "slideInRight" ) ) {
                sidemenu.removeClass('animated slideInRight'); 
                sidemenu.addClass('animated slideOutRight');
                setTimeout(function(){ 
                    sidemenu.toggleClass('sidemenu open');
                    sidemenu.removeClass('animated slideOutRight');
                },1000);
            } else {
                sidemenu.addClass('animated slideInRight');   
            }
            if(width<992){
                $('body').toggleClass('no-scroll');
            }
        });
        $('#sidemenu').on("click","a.anchor",function() {
            var sidemenu = $('#sidemenu');
            var menuResponsiveSidemenu = $('#menu-responsive-sidemenu');
            
            if(width<992){
                
                $('body').removeClass('no-scroll');

                if ( sidemenu.hasClass( "slideInRight" ) ) {
                    sidemenu.removeClass('animated slideInRight'); 
                    sidemenu.addClass('animated slideOutRight');
                    setTimeout(function(){ 
                        sidemenu.toggleClass('sidemenu open');
                        sidemenu.removeClass('animated slideOutRight');
                    },1000);
                }
                menuResponsiveSidemenu.toggleClass('open');
            }
        });
        $('.menu-holder ul > li:not(.submenu) > a').on("click",function(){
            $('#menu').removeClass('open');
            $('body').removeClass('no-scroll');
        });
        //basic menu mobile
        $('.close-menu').on("click",function() {
            
            var menu = $('#menu');
            
            menu.removeClass('animated slideInDown');
            menu.addClass('animated fadeOutUp');
            setTimeout(function(){ 
                menu.toggleClass('open');
                menu.removeClass('animated fadeOutUp');
            },1000);
            if(width<991){
                $('body').toggleClass('no-scroll');
            }
        });
        //megamenu mobile
        if(width<991){
            
            var menuClassicSubmenu = $('.submenu', '#menu-classic');
            
            menuClassicSubmenu.on("click",function() {
                var open = false;
                if($(this).hasClass('open')) {
                        open = true;
                }
                menuClassicSubmenu.each(function() {
                    menuClassicSubmenu.removeClass( "open" );
                });
                if(open) {
                    $(this).addClass('open');
                }
                $(this).toggleClass('open');
            });
        }
    } catch(err) {

    };
    /*-------------------------------------------------*/
    /* =  Sticky menu
    /*-------------------------------------------------*/
    $(window).on('scroll', function (){

        var scroll  =  $(window).scrollTop();
        var height  =  $(window).height();
        var stickyHeader = $('header.fixed.transparent');

        if( scroll >= 90 ) {
            stickyHeader.addClass("fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
        } else if ( scroll <= height ) {
            stickyHeader.removeClass("fixed-top fadeInDown");
        } else {
            stickyHeader.removeClass("fixed-top animated fadeInDown");
        }
    });
    /*-------------------------------------------------*/
    /* =  Magnific popup
    /*-------------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        closeBtnInside: false,
        fixedContentPos: true
    });     
})(jQuery);

$(document).ready(function($) {
    "use strict";
    
    var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    /*-------------------------------------------------*/
    /* =  Carousel
    /*-------------------------------------------------*/
    try {
        $(".testimonials-carousel-simple").owlCarousel({
            loop:true,
            items:2,
            autoplay:false,
            dots:false,
            dots:true,
            responsive : {
                0 : {
                    items:1
                },
                650 : {
                    items:1
                },
                991 : {
                    items:2
                }
            }
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Scroll between sections
    /*-------------------------------------------------*/
    $('a.btn-alt[href*=#], a.btn-pro[href*=#], a.anchor[href*=#], a.btn-down[href*=#] ').on("click",function(event) {
        var $this = $(this);
        var offset = -70;
        $.scrollTo( $this.attr('href') , 850, { easing: 'swing' , offset: offset , 'axis':'y' } );
        event.preventDefault();
    });
});