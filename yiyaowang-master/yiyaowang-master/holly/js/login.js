var login = {
	dom:{},
	init:function(){
		this.initDom();
		this.bindEvent();
	},
	initDom:function(){
		var dom = this.dom;
		dom.btn = $('.regbtn');
		dom.it1 = $('.it1');
		dom.it2 = $('.it2');
		dom.alogin = $('.checked1');

	},
	bindEvent:function(){
		var dom = this.dom;
		var reg = /\d{10}$/;
		$('.r_it').each(function(index){
			$(this).focus(function(){
                 if(index==0){
                 	$(this).siblings('span').hide();
                 	$(this).siblings('p').hide();
                 }
                 $(this).css('borderColor','#0099F1');
                 $(this).siblings('p').hide();
			})
			$(this).blur(function(){
				$(this).css('borderColor','#e6e6e6');
			})
		})
		dom.btn.click(function(){
			if(dom.it1.val()==''){
				dom.it1.siblings('span').show();
			}else if(dom.it1.val()!=''&&dom.it2.val()==''){
				dom.it2.siblings('p').show();
				dom.it2.css('borderColor','#e72418');
			}else if(!reg.test(dom.it1.val())){
                dom.it1.siblings('p').html('手机号格式不对').show();
                dom.it1.css('borderColor','#e72418');
               // dom.it1.siblings('p').show();
			}else{
				alert(dom.it1.val()+'登录成功！');
				
				window.location.href = '../index.html'
			}
		})
		/*dom.alogin.click(function(){
			if(this.checked){
				setCookie('phone',dom.it1.val(),14);
			}
			console.log(1)
		})
		(function(){
			var username = getCookie('phone');
			if(username!=''){
				alert('登录成功！');
			}
		})*/
	}

}
$(function(){
	login.init();
})