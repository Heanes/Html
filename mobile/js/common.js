/**
 * @doc 切换标签后标题文字更改
 */
var documentTitle=document.title;
	document.addEventListener("visibilitychange", function() {
		document.title = document.hidden ? '等您来光临！' : documentTitle;
});





jQuery(function() {


	/**
	 *  @doc 登录数据验证
	 *  @author Heanes
	 *  @time 2015-06-04 15:40:53
	 */
	jQuery('#login_form').on("submit", function () {

		//用户名验证
		var user_name=$('input[name="user_name"]');
		//为空验证
		if(user_name.val()==''){
			alert('未填写用户名或手机号！');
			user_name.css({border:'1px solid red'});
			return false;
		}
		//长度验证
		if(user_name.val().length<3){
			alert('用户名过短！！');
			return false;
		}


		//密码验证
		//为空验证
		var user_pwd=$('input[name="user_pwd"]');
		if(user_pwd.val()==''){
			alert('未填写密码！');
			user_pwd.css({border:'1px solid red'});
			return false;
		}
		//长度验证
		if(user_pwd.val().length<6){
			alert('密码长度过短');
			return false;
		}
		if(user_pwd.val().length>64){
			alert('密码长度太长');
			return false;
		}

	});


	/**
	 * @doc 注册数据验证
	 * @author Heanes
	 * @time 2015-06-04 15:42:16
	 */
	jQuery('#reg_form').on("submit", function () {

		//手机号验证
		var mobile=$('input[name="mobile"]');
		//为空验证
		if(mobile.val()==''){
			alert('未填写用户名或手机号！');
			mobile.css({border:'1px solid red'});
			return false;
		}

		//长度验证
		if(mobile.val().length<3){
			alert('手机号过短！');
			mobile.css({border:'1px solid red'});
			return false;
		}


		//密码验证
		//为空验证
		var user_pwd=$('input[name="user_pwd"]');
		if(user_pwd.val()==''){
			alert('未填写密码！');
			user_pwd.css({border:'1px solid red'});
			return false;
		}
		//长度验证
		if(user_pwd.val().length<6){
			alert('密码长度过短');
			user_pwd.css({border:'1px solid red'});
			return false;
		}
		if(user_pwd.val().length>64){
			alert('密码长度太长');
			user_pwd.css({border:'1px solid red'});
			return false;
		}
		//重复密码验证
		var user_pwd_repeat=$('input[name="user_pwd_repeat"]');
		if(user_pwd_repeat.val()!=user_pwd.val()){
			alert('两次密码填写不一致！');
			user_pwd_repeat.css({border:'1px solid red'});
			return false;
		}

	});

	/**
	 * @doc 注册登录实时响应验证
	 * @author Heanes
	 * @time 2015-06-04 17:45:41
	 */
	//长度验证
	var user_name=$('input[name="user_name"]');
	user_name.on("input",function(){
		verify.StringLength(this,3);
	})

	//手机号验证
	var mobile=$('input[name="mobile"]');
	mobile.on("input",function(){
		verify.verifyMobile(this);
	})

	//为空验证
	var user_pwd=$('input[name="user_pwd"]');
	user_pwd.on("input",function(){
		verify.StringLength(this,6);
	})
	//重复一致性验证
	var user_pwd_repeat=$('input[name="user_pwd_repeat"]');
	user_pwd_repeat.on("input",function(){
		verify.VerifyRepeat(this,'input[name="user_pwd"]');
	})


	/**
	 * @doc 提交贷款不通过原因验证
	 * @author Heanes
	 * @time 2015-06-05 09:43:00
	 */
	jQuery('#loan_refuse_form').on("submit", function () {
		//评论内容验证
		var refuse_reason=$('textarea[name="refuse_reason"]');
		//为空验证
		if(refuse_reason.val()==''){
			alert('请填写原因');
			refuse_reason.css({border:'1px solid red'});
			return false;
		}

		//长度验证
		if(refuse_reason.val().length<5){
			alert('不通过原因至少5个字符');
			refuse_reason.css({border:'1px solid red'});
			return false;
		}
	})

	// 贷款不通过原因验证
	var refuse_reason=$('textarea[name="refuse_reason"]');
	refuse_reason.on("input",function(){
		verify.StringLength(this,5);
	})

	/**
	 * @doc 评论提交验证
	 * @author Heanes
	 * @time 2015-06-05 09:43:00
	 */
	jQuery('#add_comment').on("submit", function () {
		//评论内容验证
		var comment_content=$('textarea[name="comment_content"]');
		//为空验证
		if(comment_content.val()==''){
			alert('请填写评论内容');
			comment_content.css({border:'1px solid red'});
			return false;
		}

		//长度验证
		if(comment_content.val().length<1){
			alert('评论内容至少1个字');
			comment_content.css({border:'1px solid red'});
			return false;
		}
	})
	//文章评论长度
	var comment_content=$('textarea[name="comment_content"]');
	comment_content.on("input",function(){
		verify.StringLength(this,1);
	})




});

var _handle='';//储存是否填写正确
//表单验证
function showNotic(_this){
	$(_this).parent().find(".input-error-notice").fadeIn(100);
	$(_this).focus();
}//错误提示显示
function hideNotic(_this){
	$(_this).parent().find(".input-error-notice").fadeOut(100);
}//错误提示隐藏
var verify={
	verifyEmail:function(_this){
		var validateReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var _value=$(_this).val();
		if(!validateReg.test(_value)){
			showNotic(_this)
			_handle=false;
		}else{
			hideNotic(_this)
			_handle=true;
		}
		return _handle;
	},//验证邮箱
	verifyMobile:function(_this){
		var validateReg = /^((\+?86)|(\(\+86\)))?1\d{10}$/;
		var _value=$(_this).val();
		if(!validateReg.test(_value)){
			showNotic(_this);
			_handle=false;
		}else{
			hideNotic(_this);
			_handle=true;
		}
		return _handle
	},//验证手机号码
	StringLength:function(_this,length){
		var _length=$(_this).val().length;
		if(_length<length){
			showNotic(_this)
			_handle=false;
		}else{
			hideNotic(_this)
			_handle=true;
		}
		return _handle;
	},//验证设置密码长度
	VerifyRepeat:function(_this,other){
		var compare=$(other);
		if($(_this).val()!=compare.val()){
			showNotic(_this);
			_handle=false;
		}else{
			hideNotic(_this);
			_handle=true;
		}
		return _handle;
	},//重复行验证
	VerifyCount:function(_this){
		var _count="123456";
		var _value=$(_this).val();
		//console.log(_value)
		if(_value!=_count){
			showNotic(_this);
		}else{
			hideNotic(_this);
		}
	}//验证验证码
}
















// 计算页面的实际高度，iframe自适应会用到
function calcPageHeight(doc) {
	var cHeight = Math.max(doc.body.clientHeight,doc.documentElement.clientHeight);
	var sHeight = Math.max(doc.body.scrollHeight,doc.documentElement.scrollHeight);
	var height = Math.max(cHeight, sHeight);
	return height
}
/**
 * @doc 自动设置iframe高度
 * @author 方刚
 * @time 2015-05-18 15:51:15
 */
function autoHeight(){
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
 * @author 方刚
 * @time 2015-05-18 15:55:46
 */
function isExitsVariable(variableName) {
    try {
        if (typeof(variableName) == "undefined") {
            //alert("value is undefined"); 
            return false;
        } else {
            //alert("value is true"); 
            return true;
        }
    } catch(e) {}
    return false;
}