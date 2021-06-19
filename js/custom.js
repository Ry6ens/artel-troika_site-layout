$(function(){
    // set cookie 
    var cookieName = 'check-user1';
    var cookieOptions = {expires: 1, path: '/'};
    $("#" + $.cookie(cookieName)).addClass("hidden");

    $("[data-toggle='tooltip']").tooltip();

    
    $(window).on({
        'load':function() {
            stickyAffix();
            stickyMap();
        },
        'scroll':function() {
            var top = $(this).scrollTop();
            if(top > 1) {
                $(".mm-container").addClass('scrolled');
                //$(".top-help-block-link").stop().slideUp(200);
            } 
            else {
                $(".mm-container").removeClass('scrolled');
                //$(".top-help-block-link").stop().slideDown(200);
            }
        }
    });

    $(document).on('change', '.radiobox', function() {
        if ($(this).hasClass('radiobox-changer-n')) {
            $(this).parents(".article-modal").find(".radiobox-container-n").slideDown(300);
            $(this).parents(".article-modal").find(".radiobox-container-y").slideUp(300);
        }
        if ($(this).hasClass('radiobox-changer-y')) {
            $(this).parents(".article-modal").find(".radiobox-container-y").slideDown(300);
            $(this).parents(".article-modal").find(".radiobox-container-n").slideUp(300);
        }
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > $(".header").outerHeight(true) - 100) {
            $(".sidemenu").slideDown(200);
            $(".mm-container-inside.sidepage").slideUp(200);
            $(".mm-container-inside.sidepage").css({backgroundColor: 'transparent'});
            $("#scroll-share").addClass('show');
            // if (st > lastScrollTop){
            //  $(".mm-container-inside.sidepage").stop().slideUp(300);
            // } else {
            //  $(".mm-container-inside.sidepage").stop().slideDown(300);
            // }
            // lastScrollTop = st;
        }
        else {
            $(".sidemenu").slideUp(200);
            $(".mm-container-inside.sidepage").slideDown(200);
            $(".mm-container.sidepage.scrolled").css({backgroundColor: 'transparent', borderBottom: '0'});
            $("#scroll-share").removeClass('show');
        }
    });


    $(document).on('click', '#scroll-up', function() {
        $('body, html').animate({
          scrollTop: 0
        }, 1000);
    });

    $(document).on("click", ".js-top-help-block_close", function(e){
        e.preventDefault();
        $(this).parents(".top-help-block").slideUp(300);
        $.cookie(cookieName, $(this).parents(".top-help-block").attr("id"), cookieOptions);
    });

    var $Slider_counter = $('.header-slider-nav_counter');
    var $HeaderSlider = $('#header-slider');
    $HeaderSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $Slider_counter.text(i + '/' + slick.slideCount);
    });
    $HeaderSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false
    });
    $(".header-slider-nav_left a").click(function(e){
        e.preventDefault();
        $HeaderSlider.slick('slickPrev');
    });
    $(".header-slider-nav_right a").click(function(e){
        e.preventDefault();
        $HeaderSlider.slick('slickNext');
    });

    $('.slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $Slider_counter.text(i + '/' + slick.slideCount);
    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false
    });
    $(".header-slider-nav_left a").on("click", function(e){
        e.preventDefault();
        $parent = $(this).closest(".header-slider-container");
        $parent.find(".slider").slick('slickPrev');
    });
    $(".header-slider-nav_right a").on("click", function(e){
        e.preventDefault();
        $parent = $(this).closest(".header-slider-container");
        $parent.find(".slider").slick('slickNext');
    });

    // emotions slider
    // $("#emotions-section_slider").slick({
    //  infinite: false,
    //  slidesToShow: 5,
    //  slidesToScroll: 1,
    //  autoplay: false,
    //  arrows: true,
    //  dots: false,
    //  speed: 250
    // });


$('#emotions-section_slider').slick({
  dots: false,
  infinite: false,
  speed: 250,
  autoplay: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('#emotions-section_slider2').slick({
  dots: false,
  infinite: false,
  speed: 250,
  autoplay: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 1
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).on('click mouseenter', '.slick-arrow.slick-disabled', function(e) {
    $(this).animateCss('jello');
});


// comments slider
$("#whyus-section_comments-slider").slick({
    // adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    fade:true
});
$(".whyus-section_comments-nav_left a").click(function(e){
    e.preventDefault();
    $("#whyus-section_comments-slider").slick('slickPrev');
});
$(".whyus-section_comments-nav_right a").click(function(e){
    e.preventDefault();
    $("#whyus-section_comments-slider").slick('slickNext');
});






$(document).on('click', '.js-open-spoiler', function(e) {
    e.preventDefault();
    var $parent = $($(this).parents(".js-spoiler-container"));
    $parent.find(".js-spoiler-box").slideToggle(200);
    $(this).find("i").toggleClass('icon-btn_spoiler_up');
    $(this).toggleClass('active');
    stickyMap();
});
$(document).on('click', '.js-spoiler-close-all', function(e) {
    e.preventDefault();
    var $parent = $($(this).parent().parent());
    $parent.find(".js-spoiler-box").slideToggle(200);
    $(this).find("i").toggleClass('icon-btn_spoiler_up');
    $(this).toggleClass('active');
    stickyMap();
});
$('body').scrollspy({ 
    target: '#sidemenu',
    offset: 190
});
$(document).on('click', '.sidemenu a', function(e) {
    e.preventDefault();
    elem = $(this).attr('href');
    $('body,html').animate({ scrollTop: $(elem).offset().top - 80}, 500);
});
$(document).on('click', '.scrollme', function(e) {
    e.preventDefault();
    elem = $(this).attr('href');
    $('body,html').animate({ scrollTop: $(elem).offset().top - 80}, 500);
});
$(document).find(".base-form textarea")
.focus(function() {
    $(this).addClass('active');
})
.blur(function(){
    if ($(this).val().length > 0) {
        $(this).addClass('active');
    }
    else {
        $(this).removeClass('active');
    }
});
$(document).on('click', '.file_upload button', function(event) {
    customFileInput($(this));
});
$(document).on('click', '.js-gallery-open', function(event) {
    event.preventDefault();
    event.stopPropagation();
    galleryInit($(this));
});
$(document).on('click',".m-g-next a", function(e) {
    $(this).closest(".m-g-viewbox").next().find("ul li.active").next().trigger('click');
    // $(item).next().trigger('click');
});
$(document).on('click',".m-g-prev a", function(e) {
    $(this).closest(".m-g-viewbox").next().find("ul li.active").prev().trigger('click');
    // $(item).prev().trigger('click');
});












function addRoom(i,$this) {
    parentbox = $this.find(".room-container");
    item = parentbox.find('.room-item:nth-child(1)').clone();
    item.find('.room-T').text('Room '+i+':');
    item.find('input[type=radio]').attr('name', "room"+i).prop('checked', false);
    item.find('input[type=checkbox]').attr('name', "roombed"+i).prop('checked', false);
    item.appendTo(parentbox);
}

function removeRoom(i,$this) {
    parentbox = $this.find(".room-container");
    item = [] = parentbox.find('.room-item');
    if (item.length > 1) {
        item.filter(":last-child").remove();
    }
}











$(document).on('click', '.checkgroup label', function() {
    $(this).parent().find("input").trigger('click');
});
$(document).on('click', '.radiogroup label', function() {
    $(this).parent().find("input").trigger('click');
});
$(document).on('click', '.changegroup-box .menus', function(e) {
    e.preventDefault();
    var curVal = $(this).parent().find("span").text();
    curVal = parseInt(curVal,10);
    if (!$(this).parent().hasClass('children')) {
        result = (curVal > 1) ? --curVal : 1;
    }
    else {
        result = (curVal > 0) ? --curVal : 0;
    }
    $(this).parent().find("span").text(result);
    $(this).parent().find("input").val(result);
    $this = $(this).closest('.modal');
    // removeRoom(result,$this);
});

$(document).on('click', '.changegroup-box .plus', function(e) {
    e.preventDefault();
    var curVal = $(this).parent().find("span").text();
    curVal = parseInt(curVal,10);
    result = ++curVal;
    $(this).parent().find("span").text(result);
    $(this).parent().find("input").val(result);
    $this = $(this).closest('.modal');
    // addRoom(result,$this);
});


$(document).on('click', '.changegroup-box .plus-room', function(e) {
    e.preventDefault();
    var curVal = $(this).parent().find("span").text();
    curVal = parseInt(curVal,10);
    result = ++curVal;
    $(this).parent().find("span").text(result);
    $(this).parent().find("input").val(result);
    $this = $(this).closest('.modal');
    addRoom(result,$this);
});

$(document).on('click', '.changegroup-box .menus-room', function(e) {
    e.preventDefault();
    var curVal = $(this).parent().find("span").text();
    curVal = parseInt(curVal,10);
    if (!$(this).parent().hasClass('children')) {
        result = (curVal > 1) ? --curVal : 1;
    }
    else {
        result = (curVal > 0) ? --curVal : 0;
    }
    $(this).parent().find("span").text(result);
    $(this).parent().find("input").val(result);
    $this = $(this).closest('.modal');
    removeRoom(result,$this);
});









    $(".form-modal").each(function() {
        $(this).validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    email: true,
                    required: true
                },
                text: {
                    required: true
                },
                location: {
                    required: true
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').removeClass("has-success").addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error').addClass("has-success");
            }
        });
    });
});

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});







function checkMap() {
    if ($("#map").length) {
        initMap();
    };
    if ($("#aboutMap").length) {
        aboutMap();
    };
    if ($("#smallMap").length) {
        //alert('ЕСТЬ ТУТ МАЛЕНЬКАЯ КАРТААААААААААААААА!!!!!!!!!!!!!');
         //initMap2();
         return initMap();
    };
}


function initMap() {
    var myLatlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
        scrollwheel: false,
        // draggable: false,
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
        disableDefaultUI: true
    };
  map = new google.maps.Map(document.getElementById('map'),mapOptions);
    map2 = new google.maps.Map(document.getElementById('smallMap'),mapOptions);
}


function aboutMap() {
    var myLatlng = new google.maps.LatLng(55.758754, 37.608181);
    var mapOptions = {
        scrollwheel: false,
        // draggable: false,
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.getElementById('aboutMap'),mapOptions);
    var image = '/local/templates/main/img/ic_loc.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 55.758754, lng: 37.608181},
        map: map,
        icon: image,
        title:"We are Hire"
    });
}


function stickyMap(){
    var windowWidth = $(window).width();
    if(windowWidth < 768) {
        $(".sticky-map").stick_in_parent({
            parent: ".map-sticky-row",
            offset_top: 1
        });
    }
    else {
        $(".sticky-map").stick_in_parent({
            parent: ".map-sticky-row",
            offset_top: 180
        });
    }
}



function stickyAffix(){
    $(".tour-faq-fluid-box").stick_in_parent({
        parent: ".tour-faq-box",
        offset_top: 150
    });
}




function customFileInput($then) {
    var wrapper = $then.parent(),
        inp = wrapper.find("input"),
        btn = wrapper.find("button"),
        img = wrapper.find(".file_upload-preview"),
        remove_item = wrapper.find(".delete-item");

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
    inp.trigger('click');
    inp.change(function(){
    var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );
        if( ! file_name.length )
            return;
        // if (file_name.length > 11) {
        //   file_name = file_name.substr(0, 11) + "...";
        // }
        // if( lbl.is( ":visible" ) ){
        //     lbl.text( file_name );
        // }else
            btn.text( file_name );
            btn.addClass('added');
            readURL(this);
            img.fadeIn(250);
    }).change();
    remove_item.click(function(){
        img.hide();
        btn.text("load photo");
        btn.removeClass('added');
        inp = inp.val("");
    });
}
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
function galleryInit($then) {
    var parentModal = $then.data('target');
    var $item = $(parentModal).find(".m-g-viewport ul li");
    var swipebox = $(parentModal).find('.m-g-viewbox');
    var $scroll = $(parentModal).find(".custom-scroll");
    var $track_w = 0;
    $($item).each(function() {
        $track_w += $(this).outerWidth(true);
        $(this).parent().css('width', $track_w);
    });
    $($item).eq(0).addClass('active');
    setTimeout(function(){
        $($scroll).customScroll({
            vertical:false
        });
    },300);
    $(swipebox).swipe({
        swipeLeft:function() {
           item = $(parentModal).find("ul li.active");
           $(item).next().trigger('click');
        },
        swipeRight:function() {
           item = $(parentModal).find("ul li.active");
           $(item).prev().trigger('click');
        }
    });
    $item.click(function(){
        selectItem($(this));
    });
}
function selectItem($then) {
    var $src = $then.find('img').attr('src');
    var $count = $then.find('img').data('count');
    var $alt = $then.find('img').attr('alt');
    $item_w = $then.outerWidth(true);
    $count = parseInt($count,10);
    if ($(window).width() < 768) {
        $item_offset = 1;
    }
    else {
        $item_offset = 2;
    }
    $scrollTo = $item_w * ($count - $item_offset);
    var p = $then.parent().parent().parent();
    var scrollbar = $then.parent().parent();
    $(p).find("ul li").removeClass('active');
    var active = $then.addClass('active');
    $(scrollbar).animate({scrollLeft : $scrollTo}, 500);
    updateImage($src,$alt,$then);
}
function updateImage($src,$alt,$then) {
    var parent = $then.parents(".m-g-viewport").prev();
    var img = $then.parents(".m-g-viewport").prev().find("img");
    var text = $then.parents(".m-g-viewport").prev().find(".m-g-viewbox-comment");
    $(parent).animate({
        opacity: 0},
        200, function() {
        $(img).attr('src', $src);
        $(text).text($alt);
    });
    $(parent).delay(200).animate({opacity: 1},300);
}
function updateScrollbar() {
    $parentmodal = $($(".modal.in"));
    $scroll = $parentmodal.find(".custom-scroll");
    $($scroll).customScroll({
        vertical:false
    });
}

function updateClock(t) {

    var currentTime = new Date(t);
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes;
    $(".curTime").text(currentTimeString);
    setInterval(function(){
        t = t+60000;
        updateClock(t);
    },60000);
}





