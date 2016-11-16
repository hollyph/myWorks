function rannum(){
	var str = '';
	for(var i = 0 ; i<6; i++){

		str += parseInt(Math.random()*10);
	}
	return str;
}
var reg = {
	dom:{},
	phum:0,
	password:0,
	pflag:false,
	psw1flag:false,
	psw2flag:false,
	yzmflag:false,
	i:parseInt(Math.random()*8),
	code:['gb67','yv3f','fkr6','ye97','9rb5','tppq','5cdv','r53w'],
	init:function(){
		this.initDom();
		this.phone();
		this.password();
		this.psw2();
		this.regbtn();
	},
	initDom:function(){
		var dom = this.dom;
		dom.com = $('.r_com');    
		dom.phone = $('#phone');
		dom.ycode = $('.syzm');
		dom.icbtn = $('.fill').find('img');
        dom.icbtn.attr('src','../img/yzm'+(reg.i+1)+".jpg");
        dom.psw1 = $('#password');   //密码框
        dom.psw2 = $('#psw2');  //确认密码框
        dom.mcode = $('#check');   //短信验证码
        dom.regbtn = $('.r_reg'); //提交按钮
	},
	phone:function(){
		var dom = this.dom;
		var self = this;
		//console.log(1)
		var regpm = /^1\d{10}$/;
		//手机号验证
		dom.phone.on('input',function(){			
			 self.phnum = $(this).val();
		}).on('blur',function(){
			$(this).siblings('span').hide().siblings('i').hide();
			self.phnum = $(this).val();
             
			if(!regpm.test(self.phnum)){

                 $(this).siblings('span').show().html('手机格式不正确').siblings('i').hide();
			}else{
                self.pflag = true;
				$(this).siblings('i').css('display','inline-block').siblings('span').hide();
			}
		})
		//验证码点击事件
		dom.ycode.click(function(){
			 $('.barrage').show();
		})
		$('.close').on('click',function(){
			$('.barrage').hide();
		})
		/*$('.fill').children('input').on('blur',function(){
			 self.zymcode = $(this).val();
		})*/
		//获取新的验证码
		dom.icbtn.click(function(){
			 reg.i = parseInt(Math.random()*8);
			 dom.icbtn.attr('src','../img/yzm'+(reg.i+1)+".jpg");
		})
		//弹窗事件
		$('.ycode').children('a').on('click',function(){
			 self.icode = $('.icode').val();
			 //console.log(self.icode)
			 var regt = new RegExp(reg.code[reg.i],'ig');
			 //console.log(reg.code[reg.i])
             var contentr = self.icode.match(regt);
              dom.phone.siblings('span').hide().siblings('i').hide();
              dom.mcode.siblings('span').hide().siblings('i').hide();
             /*if(self.icode == ''){
             	 $('.ycode').children('a').off('click');
             }  
             	else*/ if(self.icode!=''&&contentr!=null){
                     $('.barrage').hide();
                     reg.message = rannum();
			         console.log(reg.message)
			         dom.phone.siblings('i').css('display','inline-block');
                     dom.mcode.blur(function(){
						self.mval  = dom.mcode.val();
						if(self.mval  ==''){
							dom.mcode.siblings('span').html('请填写短信验证码').show().siblings('i').hide();
  						}else if(self.mval  == reg.message){

  							self.yzmflag = true;
							 $(this).siblings('i').css('display','inline-block').siblings('span').hide();
						}else{
							dom.mcode.siblings('span').html('短信验证码错误').show().siblings('i').hide();
						}
					})

             }else if(self.icode!=''&&contentr==null){
              	    dom.phone.siblings('span').show().html('验证码错误');
              }	    $('.barrage').hide();
        })    
	},
	//设置密码
	password:function(){
        var dom= this.dom;
        var self = this;
		var reg = /^\W{6,16}$/;
		var reg1 = /^\d{6,16}$/;
		var reg2 = /^[a-zA-Z]{6,16}$/;
		dom.psw1.blur(function(){
			
			self.pswvalue = dom.psw1.val();
			//console.log(typeof content);
			console.log(self.pswvalue);
			//$(this).siblings('span').hide();
			if(self.pswvalue == ''){

				 $(this).siblings('span').html('密码不能为空').show().siblings('i').hide();

			}else if(self.pswvalue.length<6||self.pswvalue.length>16){
                 // console.log(self.pswvalue.lenth);

				 $(this).siblings('span').html('密码长度为6-16位').show().siblings('i').hide();

			}else if(reg1.test(self.pswvalue)){
                  //console.log('num')

				 $(this).siblings('span').html('不能全为数字').show().siblings('i').hide();
				 
			}else if(reg2.test(self.pswvalue)){

				 $(this).siblings('span').html('不能全为字母，至少包含一个数字或符号').show().siblings('i').hide();
				console.log('zimu')
			}else if(reg.test(self.pswvalue)){

				 $(this).siblings('span').html('不能全为符号').show().siblings('i').hide();
			     console.log("fuhao")
			}else{
				 self.psw1flag = true;
				 $(this).siblings('i').css('display','inline-block').siblings('span').hide();
				// self.flag = true;
			}
		})
	},
	psw2:function(){
		var self = this;
		var dom = this.dom;
		self.password2 = dom.psw2.val();
		dom.psw2.focus(function(){
			self.password2 = $(this).val();
			$(this).siblings('span').hide();
			$(this).siblings('i').hide();
			/*if(password == ''){
				 $(this).siblings('span').text("请再次输入登录密码").show();
				 $(this).siblings('span').show();    	     
			}  */     	
		})
		dom.psw2.on('blur',function(){
			self.password2 = dom.psw2.val();
			$(this).siblings('span').text('').show();
			if(self.password2 == ''){
				console.log('kong')
				self.flag = false;
				$(this).siblings('span').text('确认密码不能为空').siblings('i').hide();
			}else if(self.password2 != self.pswvalue){
				console.log('buyyiz')
				self.flag = false;
				$(this).siblings('span').text('两次密码不一致').siblings('i').hide();
			}else{
				$(this).siblings('i').css('display','inline-block');
				//console.log(true)
                // self.flag = true;
                self.psw2flag = true;
			}
		})
	
	},
	regbtn:function(){
		var dom = this.dom;
		var self = this;
		dom.regbtn.on('click',function(){
			if( self.psw1flag&&self.psw2flag&&self.pflag&&self.yzmflag){
				alert('注册成功');
				window.location.href = '../index.html';
				//self.user = JSON.stringify(self.phnum);
				//self.userpsw = JSON.stringify(self.pswvalue);
				/*console.log(self.phnum);
				console.log(self.pswvalue);
				console.log(self.user);*/
				//self.userstr = JSON.stringify(self.user);
				//console.log(self.userstr)
				//console.log(JSON.parse(self.user))
				//setCookie(self.user,self.userpsw,30);
				setCookie(self.phnum,self.pswvalue,30);
				//console.log(getCookie(self.user))
				//console.log(document.cookie);
                
			}else{
				alert('请填写完信息');
			}
		})
	}

	
}
$(function(){
	reg.init();
})