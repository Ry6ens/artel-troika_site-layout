$(function(){
	$(document).on("click",".open-news",function(){
		var parentModal = $(this).data('target');
		var track = $(parentModal).find(".m-g-viewport ul li");
		var swipebox = $(parentModal).find('.m-g-viewbox');
		var $scroll = $(parentModal).find(".custom-scroll");
		var $track_w = 0;
		$(track).each(function() {
			$track_w += $(this).outerWidth(true);
			$(this).parent().css('width', $track_w + 30);
		});
		setTimeout(function(){
			$($scroll).customScroll({
				vertical:false
			});
		},300);
		$(swipebox).swipe({
			swipeLeft:function() {
	           item = $(this).next().find("ul li.active");
	           $(item).next().trigger('click');
	        },
	        swipeRight:function() {
	           item = $(this).next().find("ul li.active");
	           $(item).prev().trigger('click');
	        }
		});
	});
	$(window).on({
    	'resize':function() {
    		updateScrollbar();
    	}
    });
	$(document).on('click', '.custom-scroll_inner li > *', function(e) {
		e.preventDefault();
		var $then = $(this);
		selectItem($then);
	});

	$(document).on('click',".m-g-next a", function(e) {
		var item = $(this).closest(".m-g-viewbox").next().find("ul li.active");
		$(item).next().trigger('click');
	});
	$(document).on('click',".m-g-prev a", function(e) {
		var item = $(this).closest(".m-g-viewbox").next().find("ul li.active");
		$(item).prev().trigger('click');
	});
	$(document).on('click', ".modal-next-box",function(e){
	    e.preventDefault();
	    var id = $(this).closest('.modal').attr("id");
	    id = "#"+id;
	    var child = $(this).data('link');
	     $(id).modal('hide');
	     setTimeout(function(){
	      $(document).find('a[data-target='+child+']').trigger('click');
	     },1200);
  	});
});
function selectItem($then) {
	var $src = $then.find('img').attr('src');
	var $count = $then.find('img').data('count');
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
	updateImage($src,$then);
}

function updateImage($src,$then) {
	var viewbox = $then.parents(".m-g-viewport").prev().find("img");
	$(viewbox).animate({
		opacity: 0},
		200, function() {
		$(this).attr('src', $src);
	});
	$(viewbox).delay(200).animate({opacity: 1},300);
}

function updateScrollbar() {
	$parentmodal = $($(".modal.in"));
	$scroll = $parentmodal.find(".custom-scroll");
	$($scroll).customScroll({
		vertical:false
	});
}