$(function(){
	
	$(".bannerTitle_right ul li").mouseover(function(){
		var index=$(this).index();
		show(index);
		$(this).addClass("current").siblings("li").removeClass("current");
	});
	var a=setInterval(function(){goNext()},5000);
	$(".bannerImg").hover(function(){
		clearInterval(a);
	},function(){
		a=setInterval(function(){goNext()},5000);
	});
	
	function show(index){
		var size=$(".ImageQx").eq(index).position().left;
		$(".ImageQxBox").stop().animate({left:-size},300,"swing");
	}
	
	function goNext(){
		if($(".bannerTitle_right ul li.current").index()==$(".bannerTitle_right ul li").size()-1){
			$(".bannerTitle_right ul li:first").addClass("current").siblings().removeClass("current");
			show(0);
		}else{
			  var go=$(".bannerTitle_right ul li.current").index()+1;
			  $(".bannerTitle_right ul li.current").next().addClass("current").siblings().removeClass("current");			
			  show(go);
		}			
	}
	/*下拉菜单*/
	$(".nav li").hover(function(){
		$(this).find(".nav_off").slideDown(200);
	},function(){
		$(this).find(".nav_off").slideUp(200);
	});
	$(".nav li h3").hover(function(){
		$(this).find(".nav_off_div").slideDown(200);
	},function(){
		$(this).find(".nav_off_div").hide();
	});
	
	/*左侧选中*/
	/*$(".list_left1 a").each(function(k,v){
		 var _find = this.href;
		 var _href = window.location.href;
		 console.debug(v);
		if(_href.indexof(_find) !== -1){
			$(this).parent().addclass('list_left1_off');
		}else{
		   $(this).parent().removeclass('list_left1_on');
		}
	});*/
	
	
	$(".list_left1 a").each(function(index, v) {
         var _find = v.href;
		 var _href = window.location.href;
		if(_href.indexOf(_find) !== -1){
			$(this).parent().addClass('list_left1_off').removeClass('list_left1_on');
		}else{
		   $(this).parent().addClass('list_left1_on').removeClass('list_left1_off');
		}
		
    });	
});
