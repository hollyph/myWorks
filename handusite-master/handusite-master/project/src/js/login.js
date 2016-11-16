var login = {
	dom:{},
	flag:true,
	i:parseInt(Math.random()*8),
	code:['gb67','yv3f','fkr6','ye97','9rb5','tppq','5cdv','r53w'],
	init:function(){
		this.initDom();
		this.bindEvent();
	},
	initDom:function(){
		var dom = this.dom;
		dom.$username = $('#username');
		dom.$password = $('#password');
		dom.$code = $('#check');
		dom.$error = $('.error');
		dom.$loginbtn = $('.loginbtn');
		dom.$autologin = $('.autologin');
		dom.$img = dom.$code.siblings('a').children('img');
		dom.$img.attr('src','../img/yzm'+(login.i+1)+".jpg");
	},
	bindEvent:function(){
		var dom = this.dom;
		var self = this;
		dom.$code.siblings('a').children('img').click(function(){
			 login.i = parseInt(Math.random()*8);
			 dom.$img.attr('src','../img/yzm'+(login.i+1)+".jpg");
		})
        dom.$loginbtn.on('click',function(){
        	self.loginuser = dom.$username.val();
        	self.loginpsw = dom.$password.val();
        	self.icode = dom.$code.val();
        	var userpsw = getCookie(self.loginuser);
        	var regt = new RegExp(login.code[login.i],'ig');
            var contentr = self.icode.match(regt);

            if(self.icode!=''&&contentr==null){
              	         dom.$error.html('验证码错误');
              	         self.flag = false;
            }
            if(userpsw){
        		if(self.loginpsw == userpsw){
                     
                     if(self.flag){
                     	
                     	 window.location.href = '../index.html';
                     	 setCookie('username',self.loginuser,1);
                     	 console.log(getCookie('username'));
                         	
                     }                     
        		}else{
        			self.flag = false;
        			dom.$img.attr('src','../img/yzm'+(parseInt(Math.random()*8)+1)+".jpg");
        			dom.$error.html('用户名或密码错误');
        		}
        	}else{
        		dom.$error.html('用户名不存在');
        		dom.$img.attr('src','../img/yzm'+(parseInt(Math.random()*8)+1)+".jpg");
        	}
        })
	} 
}
$(function(){
	login.init();
})