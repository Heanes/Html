window.onload=function(){
	/**
	 * @doc 切换标签后标题文字更改
	 * @author Heanes
	 * @time 2015-05-09 12:49:28
	 */
	var original_document_title = document.title;
	document.addEventListener("visibilitychange", function () {
		document.title = document.hidden ? '你快回来~ | 海利系统 - '+ original_document_title : original_document_title;
	});

	/**
	 * @doc 页面等待加载时显示信息
	 * @author Heanes
	 * @time 2015-08-14 12:51:38
	 */
	//document.write('<div id="loading" style="position:absolute;top:0;z-index:2;background:#fff;height:100%;width:100%"><style type="text/css">body{margin:0;padding:0;}</style><div style="background:rgba(0,0,0,0.8);border-radius:5px;position:absolute;top:50%;left:50%;margin:-15px 0 0 -80px;padding:0 10px;line-height:30px;font-size:14px;height:30px;text-align:center;color:#f1f1f1">正在玩命加载中...</div></div>');
};

/**
 * @doc 检测浏览器是否是微信
 * @returns {boolean}
 * @author Heanes
 * @time 2015-07-31 13:05:54
 */
function isWeiXin(){
	var ua = window.navigator.userAgent.toLowerCase();
	return ua.match(/MicroMessenger/i) == 'micromessenger';
}

/**
 * @doc 页面效果
 * @author Heanes
 * @time 2015-06-09 12:49:45
 *
 */
jQuery(function () {

	if(!isWeiXin()){
		//alert('请在微信上访问！');
		//$('body').html('<p style="text-align:center;">请在微信上访问！</p>');
	}




	/**
	 * @doc 图片未找到时的处理
	 * @author Heanes
	 * @time 2015-07-08 12:10:55
	 */
	//方式一，针对单个
	/*
	 var img = document.getElementById("myImg");
	 img.onerror = function () {
	 this.style.display = "none";
	 };
	 */
	//方式二，正对整站
	//jQuery方式
	$("img").error(function () {
		//$(this).attr("src","/public/static/image/common/image_not_found.png");
	});
	//原生JS形式
	var images=document.getElementsByTagName("img");
	for(i=0;i<images.length;i++){
		images[i].onerror=function(){
			this.src = "/public/static/image/common/image_not_found.png";
		};
		//images[i].style.height="247px";
	}

});

/**
 * @doc 计算页面的实际高度，iframe自适应会用到
 * @param doc 调整对象
 * @returns {number}
 * @author 方刚
 * @time 2015-05-18 15:51:15
 */
function calcPageHeight(doc) {
	var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight);
	var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
	return Math.max(cHeight, sHeight);
}
/**
 * @doc 自动设置iframe高度
 * @author 方刚
 * @time 2015-05-18 15:51:15
 */
function autoHeight() {
	var height = calcPageHeight(document.getElementById('autoHeight').contentWindow.document);
	//console.log(document);
	//console.log(document.getElementById('autoHeight').contentWindow.document);
	parent.document.getElementById('autoHeight').style.height = height + 'px';
}

/**
 * @doc 是否存在指定函数
 * @author 方刚
 * @time 2015-05-18 15:55:29
 */
function isExitsFunction(fname, object) {
	object = !object || typeof object !== 'object' ? window : object;
	return typeof object[fname] === 'function';
}

/**
 * @doc 是否存在指定变量
 * @param variableName 变量名称
 * @returns {boolean} true-存在，false-不存在
 * @author 方刚
 * @time 2015-05-18 15:55:46

 */
function isExitsVariable(variableName) {
	try {
		return typeof(variableName) != "undefined";
	} catch (e) {
	}
	return false;
}

/*
 * 为低版本IE添加placeholder效果
 *
 * 使用范例：
 * [html]
 * <input id="captcha" name="captcha" type="text" placeholder="验证码" value="" >
 * [javascrpt]
 * $("#captcha").placeholder();
 *
 * 生效后提交表单时，placeholder的内容会被提交到服务器，提交前需要把值清空
 * 范例：
 * $('[data-placeholder="placeholder"]').val("");
 * $("#form").submit();
 *
 */
(function ($) {
	$.fn.placeholder = function () {
		var isPlaceholder = 'placeholder' in document.createElement('input');
		return this.each(function () {
			if (!isPlaceholder) {
				$el = $(this);
				$el.focus(function () {
					if ($el.attr("placeholder") === $el.val()) {
						$el.val("");
						$el.attr("data-placeholder", "");
					}
				}).blur(function () {
					if ($el.val() === "") {
						$el.val($el.attr("placeholder"));
						$el.attr("data-placeholder", "placeholder");
					}
				}).blur();
			}
		});
	};
})(jQuery);
