/* MASSIVE MENU 

Full screen adaptive menu

Build 0.2 Alpha
Author: Massive
*/

$(window).scroll(function(){
    var params = new Object();
    params.docH = $(document).height();
    params.winH = $(window).height();
    params.scrollTop = $(this).scrollTop();
    params.checkSum = params.scrollTop + params.winH;
    if(parseInt(params.scrollTop) > 0){
        $('#upLine').slideUp('fast');
    }else{
        $('#upLine').slideDown('fast');
    }
});

function Autoscroll(param){
    var w = $(window).width();
    var mm_nav_h;
    $('body,html').animate({ scrollTop: $(param).offset().top - 100}, 1000); // анимируем скроолинг к элементу scroll_el
}


function OpenMenu(){
    $(".mm-mobile-menu").slideDown(300);
    setTimeout(function(){
        $("body").addClass('mm-fixed-body');
        $(".mm-open-icon").addClass('active');
        $('#logoImg').slideUp('fast');
        $('.top-help-block').css({display: 'none'});
        $('#langButton2').css({display: 'block'});
        $('#upMenu').css({backgroundColor: '#f4f1e7', opacity: '1'});
        $('#bigButton').css({display: 'none !important;'});
        $('#upLine').css({opacity: '0'});
    },100);
}

function CloseMenu(position){
    $("body").removeClass('mm-fixed-body');
    window.scrollTo(0,position);
    $(".mm-mobile-menu").slideUp(300);
    $('#logoImg').slideDown('fast');
    $('#bigButton').css({display: 'block !important;'});
    $('#upMenu').css({backgroundColor: 'transparent'});
    $('.top-help-block').css({
        display: 'block',
        backgroundColor: '#fff',
        opacity: '1'
    });
    $('#upLine').css({opacity: '1'});
    setTimeout(function(){
        $(".mm-open-icon").removeClass('active');
    },200);
}

function addHeight() {
    var h = $(window).height();
    h = h - $(".mm-container").outerHeight(true);
    $(".mm-mobile-menu").css('height', h);
    $(".mm-nav-mobile").css('height', h);
}


$(function (){
    var position;
    $(window).on({
        'resize':function() {
            if ($(".mm-open-icon").hasClass('active')) {
                CloseMenu(position);
            }
            addHeight();
        }
    });
    addHeight();
    $(document).on("click",".mm-open-icon",function(e){
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            position = window.pageYOffset;
            OpenMenu();
        }
        else {
            CloseMenu(position);
        }
    });
});

// $(function (){
//     var position;
//     $(window).on({
//         'resize':function() {
//             if ($(".mm-open-icon").hasClass('active')) {
//                 CloseMenu(position);
//             }
//             addHeight();
//         }
//     });
//     addHeight();
//     $(document).on("click",".mm-open-icon",function(e){ 
//         e.preventDefault();
//         if (!$(this).hasClass('active')) {
//             position = window.pageYOffset;
//             OpenMenu();
//         }
//         else {
//             CloseMenu(position);
//         }
//     });
// });



