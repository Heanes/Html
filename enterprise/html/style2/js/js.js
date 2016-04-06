/**
 * @doc 大部分页面js脚本
 * @author 方刚
 * @time 2015-05-13 16:58:14
 */
$(function() {
	/****************************************首页区域*******************************************/
	/**
	 * 响应式幻灯，支持触摸滑动
	 * @author 方刚
	 * @time 2014-11-28 14:02:12
	 */
	if(jQuery.isFunction(jQuery.fn.excoloSlider)){
		$("#index_slide").excoloSlider({
			pagerClass : "index-slide-pager",
			prevnextNav : false,
			autoPlay : true
		});
	}
	
	
	/* SuperSlide2 */
	jQuery("#topBar").slide({
		mainCell : "ul",
		autoPlay : true,
		effect : "topLoop"
	});
	
	jQuery(".nav").slide({
		type : "menu",
		titCell : ".m",
		targetCell : ".sub",
		effect : "slideDown",
		delayTime : 300,
		triggerTime : 100,
		returnDefault : true
	});
	
	jQuery(".banner").slide({
		titCell : ".hd ul",
		mainCell : ".bd ul",
		effect : "fold",
		autoPlay : true,
		autoPage : true,
		trigger : "click"
	});
	
	
	jQuery(".focusBox").slide({
		titCell : ".num li",
		mainCell : ".pic",
		effect : "fold",
		autoPlay : true,
		trigger : "click",
		//下面startFun代码用于控制文字上下切换
		startFun : function(i) {
			jQuery(".focusBox .txt li").eq(i).animate({
				"bottom" : 0
			}).siblings().animate({
				"bottom" : -36
			});
		}
	});
	
	jQuery(".slideTxtBox").slide();
	
	jQuery(".adSlide").slide({
		titCell : ".hd ul",
		mainCell : ".bd ul",
		autoPlay : true,
		effect : "top",
		autoPage : true
	});
	
	jQuery(".picScroll").slide({
		mainCell : "ul",
		autoPlay : true,
		effect : "left",
		vis : 5,
		scroll : 2,
		autoPage : true,
		pnLoop : false
	});
	
	jQuery("#txtMarqueeTop").slide({
		mainCell : "ul",
		autoPlay : true,
		effect : "topMarquee",
		interTime : 50,
		vis : 7
	});
	
	jQuery("#sideMenu").slide({
		titCell : ".hd",
		targetCell : ".bd",
		effect : "slideDown",
		trigger : "click"
	});
	
	jQuery(".friendLink").slide({
		mainCell : "ul",
		autoPlay : true,
		effect : "leftMarquee",
		interTime : 50,
		vis : 6
	});
	
	
});