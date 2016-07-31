$(function(){

    var winWidth=$(window).width();
    //临时解决办法,不让图片高度太小
    var $img=$('.sy-slides-wrap').find('img');
    if(winWidth<=1200){
        $img.not($img.eq(0)).hide();
        $img.eq(0).height('800px');
    }else{
        $img.not($img.eq(0)).each(function(index,ele){
            $(this).attr('src',$(this).data('src'));
        });
        //启动背景幻灯片插件
        $("#slider").slippry({
            transition: 'kenburns',
            useCSS: true,
            speed: 5000,
            pause: 9000,
            auto: true,
            controls: false,
            preload: 'visible',
            autoHover: false
        });
    }

	//启动地址三级联动插件
	$("#address").citySelect({
		prov:"北京",
		city:"海淀区",
		required:true,
		nodata:'none'
	});
});
$(function(){
	//表单验证
	var $form=$('#coop-form');
	var $allInput=$($form).find('input').add($form.find('textarea'));
	$form.on('submit',function(){
		var allowSub=true;	//允许提交
		$allInput.each(function(index,ele){
			if($.trim($(this).val())==='')
				allowSub=false;
		});
		if(!allowSub){
			dialog.hint('表单未填写完整.');
			return false;
		}
		
		//所有控件的值
		var name=$form.find('[name="name"]').val();
		var sex=$form.find('[name="sex"]').val();
		var tel=$form.find('[name="tel"]').val();
		var email=$.trim($form.find('[name="email"]').val());
		var notes=$.trim($form.find('textarea').val());
		var prov=$form.find('[name="prov"]').val();
		var city=$form.find('[name="city"]').val();
		var dist=$form.find('[name="dist"]').val();

		//手机号验证
		var regTel=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(!regTel.test(tel)){
			dialog.hint('您输入的手机号有误!');
			return false;
		}
		//邮箱验证
		var regEMail=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		if(!regEMail.test(email)){
			dialog.hint('您输入的邮箱有误!');
			return false;
		}
		//留言不能少于15个字
		if(notes.length<15){
			dialog.hint('您的留言少于15个字!');
			return false;
		}
		ajaxSub({
				name:name,
				sex:sex,
				tel:tel,
				email:email,
				prov:prov,
				city:city,
				dist:dist,
				note:notes
			},function(){
				$form.get(0).reset();
			});
		return false;
	});
	
	//改成ajax提交
	function ajaxSub(json,callback){
		$.ajax({
			url:$form.attr('action'),
			type:$form.attr('method').toUpperCase(),
			dataType:'json',
			data:json,
			success:function(data){
				console.log(data);
				dialog.hint(data.msg);
				callback && callback();
			},
			error:function(err){
				console.error('ajax error',err);
			}
		});
	}
});
$(function(){
	var $docMove=$('html,body');
	var $navBut=$('.navigation nav');
	var allowClick=true;	//滑动未完成屏蔽点击
	$navBut.each(function(){
		var index=$(this).attr('index');
		var top=$('#'+index).offset().top;
		$(this).on('click',function(){
			if(!allowClick) return;
			allowClick=false;
			$docMove.animate({
				'scrollTop':top
			},1000,function(){
				allowClick=true;
			});
		});
	});

	var $coopBut=$('#cooperation_butt');
	$coopBut.on('click',function(){
		$navBut.eq(1).trigger('click');
	});

	var $valBox=$('#li-active');
	var $li=$valBox.children('li');
	$li.css({
		'position':'relative',
		'left':'100px',
		'opacity':0
		});
	var docOffTop=$valBox.offset().top-600;
	var allowMove=true;
	$(document).on('scroll',function(){
		if(!allowMove) return;
		var scrollTop=$(this).scrollTop();
		if(scrollTop>=docOffTop){
			allowMove=false;
			$li.animate({
				'left':0,
				'opacity':1
			},700);
		}
	});
});
