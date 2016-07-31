var dialog={
	msg:'警告!',
	time:1000,
	exsits:false,
	box:null,
	hint:function(msg,callback){
		var msg=msg || this.msg;

		if(!!this.box){
			//dom存在
			this.box.show();
		}else{
			//dom不存在
			var $dom=$('<div></div>');
			this.box=$dom;
			$dom.css({
				'width':'200px',
				'height':'60px',
				'position':'fixed',
				'top':0,
				'left':0,
				'right':0,
				'bottom':0,
				'margin':'auto',
				'zIndex':'99',
				'backgroundColor':'black',
				'color':'white',
				'borderRadius':'5px',
				'lineHeight':'30px',
				'fontSize':'20px',
				'textAlign':'center',
				'transform':'scale(0.8,0.8)'
			});
			$(document.body).append($dom);
		}

		this.box.html(msg).animate({'opacity':0,'transform':'scale(1.0,1.0)'},1700,function(){
			this.box.hide().css({'opacity':1,'transform':'scale(0.8,0.8)'});
		}.bind(this));
		callback && callback.call(this);
	}
}
