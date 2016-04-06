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
	
	/* 依赖于SuperSlide2 */
	/* 顶部滚动 */
	jQuery('.topbar-left').slide({
		mainCell : "ul.switch-top",
		autoPlay : true,
		effect : "topLoop"
	});
	
	/* 导航栏 */
	var ind = 0; //初始位置
	var nav= jQuery(".nav");
	var init = jQuery(".nav .m").eq(ind);
	var block = jQuery(".nav .block"); //滑块
	//block.css({"left":init.position().left-3}); //初始化滑块位置
	nav.hover(function() {
		block.show();
	}, function() {
		/*
		block.animate({
			"left" : init.position().left - 3
		}, 100);
		*/
		block.hide();//移除导航滑块隐藏
	}); //移出导航滑块返回

	jQuery(".nav").slide({ 
			type:"menu", //效果类型
			titCell:".m", // 鼠标触发对象
			targetCell:".sub", // 效果对象，必须被titCell包含
			delayTime:300, // 效果时间
			triggerTime:0, //鼠标延迟触发时间
			//returnDefault:false,//on返回初始位置
			//defaultIndex:ind,//初始位置
			startFun:function(i,c,s,tit){ //控制当前滑块位置
				block.show();
				block.animate({"left":tit.eq(i).position().left-3},100);
			}
		});
	
	/* 选项卡 */
	jQuery(".slideTxtBox").slide();
	/* 新闻切换 */
	jQuery(".slideNewsIndex").slide();
	
	/* 通知公告  文字无缝滚动 */
	jQuery("#txtMarqueeTop").slide({
		mainCell : "ul",
		autoPlay : true,
		effect : "topMarquee",
		interTime : 50,
		vis : 10
	});
	
	/* 项目案例  手风琴 */
	jQuery("#sideMenu").slide({
		titCell : ".hd",
		targetCell : ".bd",
		effect : "slideDown",
		trigger : "click"
	});
	
	/* 友情链接滚动显示 */
	jQuery(".friendlink-content-list").slide({
		mainCell : "ul",
		autoPlay : true,
		effect : "leftMarquee",
		interTime : 50,
		vis : 6
	});
	
	/* 首页产品展示成组滚动 */
	/*
	SuperSlide组合注意：
	1、内外层mainCell、targetCell、prevCell、nextCell等对象不能相同，除非特殊应用；
	2、注意书写顺序，通常先写内层js调用，再写外层js调用
	*/

	/* 内层图片无缝滚动 */
	//jQuery(".slideGroup .slideBox").slide({ mainCell:"ul",vis:3,prevCell:".sPrev",nextCell:".sNext",effect:"leftMarquee",interTime:50,autoPlay:true,trigger:"click"});
	jQuery(".slideGroup .slideBox").slide({ mainCell:"ul",vis:7,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop",autoPlay:true});
	/* 外层tab切换 */
	jQuery(".slideGroup").slide({titCell:".parHd li",mainCell:".parBd"});


});