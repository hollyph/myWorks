var phone= {
	dom:{},
	flag:false,
	init:function(){
		this.initDom();
		this.pnum();
		// this.password();
		// this.check();
	},
	initDom:function(){
		var dom = this.dom;
		dom.it1 = $('.it1');
		dom.code1 = $('.code1');
		dom.code2 = $('.code2');
	},
	pnum:function(){
	   var dom = this.dom;
	   dom.it1.focus(function(){
			$(this).siblings('span').hide();
			$(this).siblings('p').hide();
			$(this).css('borderColor',"#0099F1");
	        
		})
		dom.it1.blur(function(){
			var content = dom.it1.val();
			var regpm = /^1\d{10}$/;
			if(content == ""){
				  $(this).siblings('span').show()
				  $(this).css('borderColor','#ffaa00');
			}else if(!regpm.test(content)){
				  $(this).siblings('p').val('手机格式不正确');
				  $(this).siblings('p').show();
				  $(this).css('borderColor',"#e72418");
			}else{
				  $(this).css({borderColor:'#e6e6e6'});
				  $(this).siblings('span').show();
				  $(this).siblings('span').html(" ");
				  $(this).siblings('span').css('background','url(../images/reg_icon.png) no-repeat right -1px');
				  $('.reg').css('height','610px');
				  dom.code1.show();
				  dom.code2.show();
				  phone.flag = true;
				  
			}
	
		})
	   
	}
}
var psw1 = {
	dom:{},
	flag:false,
	init:function(){
		this.initDom();
		this.bindEvent();
	},
	initDom:function(){
		var dom = this.dom;
		dom.it2 = $('.it2');

	},
	bindEvent:function(){
		var dom = this.dom;
		var reg = /^\W{6,20}$/;
		var reg1 = /^\d{6,20}$/;
		var reg2 = /^[a-zA-Z]{6,20}$/;
		//console.log(dom.it2.val());
		dom.it2.focus(function(){
			var it2val = $(this).val();
		   // console.log(it2val);
			$(this).siblings('span').hide();
			$(this).siblings('p').hide();
			$(this).css('borderColor',"#0099F1");
			if(it2val==""){
				 $(this).siblings('.tip').css('color','#5E5E5E');
				 $(this).siblings('.tip').html("6-20位字符，建议由字母、数字和符号两种以上组合");
				 $(this).siblings('.tip').show();
			}else{
				 if(!(reg.test(it2val)||reg1.test(it2val)||reg2.test(it2val))){
					if(it2val.length>=10&&it2val.length<=14){
					  //   console.log(2)
						$('.safe').find('span').css('background','url(../images/safe.png) no-repeat 0 -15px');
					}else if(it2val.length>14){
						$('.safe').find('span').css('background','url(../images/safe.png) no-repeat 0 -30px');
					}
				 }
				 $(this).siblings('.safe').show();
				 
			}
		  
		})
		dom.it2.blur(function(){
			
			var content = dom.it2.val();
			//console.log(typeof content);
			//console.log(content);
			$(this).siblings('.safe').hide();
			$(this).siblings('.tip').html('');
			$(this).siblings('.tip').css('color',"#e72418")
			$(this).siblings('.tip').show();
			$(this).css('borderColor','#e72418');
			if(content == ''){

				 $(this).siblings('.tip').html('密码不能为空');

			}else if(content.length<6||content.length>20){

				 $(this).siblings('.tip').html('密码长度为6-20位');

			}else if(reg1.test(content)){

				 $(this).siblings('.tip').html('不能全为数字');
				 
			}else if(reg2.test(content)){
				 $(this).siblings('.tip').html('不能全为字母，至少包含一个数字或符号');
				
			}else if(reg.test(content)){
				 $(this).siblings('.tip').html('不能全为符号');
			 
			}else{
				 $(this).css('borderColor','#e6e6e6');
				 $(this).siblings('span').show();
				 psw1.flag = true;
			}
		})
	}
}
var psw2 = {
	dom:{},
	flag:false,
	init:function(){
		this.initDom();
		this.check();
	    //console.log(phone.val)
	},
	initDom:function(){
		var dom = this.dom;
		dom.it3 = $('.it3');
	},
	check:function(){
		var dom = this.dom;
		var password = dom.it3.val();
		//console.log(password)
		
		dom.it3.focus(function(){
			 //var password = $(this).val();
			$(this).siblings('span').hide();
			$(this).siblings('p').hide();
			$(this).css({background:"#fff",borderColor:"#0099F1"});
			if(password == ''){
				 $(this).siblings('p').css('color','#5E5E5E');
				 $(this).siblings('p').text("请再次输入登录密码");
				 $(this).siblings('p').show();    	     
			}       	
		})
		dom.it3.blur(function(){
			var password = dom.it3.val();
			$(this).siblings('p').css('color',"#e72418");
			$(this).css('borderColor',"#e72418");
			$(this).siblings('p').text('');
			if(password == ''){
				$(this).siblings('p').text('确认密码不能为空');
			}else if(password != psw1.dom.it2.val()){
				$(this).siblings('p').text('两次密码不一致');
			}else{
				$(this).siblings('span').show();
				$(this).css('borderColor','#e6e6e6');
                 psw2.flag = true;
			}
		})
	}
}
function random(){
	return parseInt(Math.random()*4);
}
var icode = {
	dom:{},
	flag:false,
	i:random(),
	code:['3fd3','cbea','2bB','8dab'],
	init:function(){
		this.initDom();
		this.bindEvent();   
	},
	initDom:function(){
		var dom = this.dom;
		dom.icode = $('.icode');
		dom.iclick = $('.iclick');
		dom.cbtn = $('.cbtn');
		dom.iclick.attr('src','../images/Code'+icode.i+".jpg");
		//console.log(icode.i)
	},
	bindEvent:function(){
		var dom = this.dom;
		dom.iclick.click(function(){
			 icode.i = random();
			 dom.iclick.attr('src','../images/Code'+icode.i+".jpg");
		})
		dom.cbtn.click(function(e){
			 e = e || event;
			 e.preventDefault();
			 icode.i = random();
			 dom.iclick.attr('src','../images/Code'+icode.i+".jpg");
		})
		dom.icode.focus(function(){
			dom.icode.siblings('p').hide();
			dom.icode.siblings('span').hide();
			dom.icode.css('borderColor',"#0099F1");
		})
		dom.icode.blur(function(){
			var content = dom.icode.val();
            var regt = new RegExp(icode.code[icode.i],'ig');
            var contentr = content.match(regt);
			if(content==''){
				dom.icode.siblings('p').html('请输入验证码');
				dom.icode.siblings('span').css("backgroundPosition","0 -29px");
				dom.icode.siblings('p').show();
				dom.icode.siblings('span').show();
			}else if(contentr!=null){
				dom.icode.siblings('span').css("backgroundPosition","0 -1px");
				dom.icode.siblings('span').show();
				dom.icode.css('borderColor','#e6e6e6');
				icode.flag = true;
			}else{
				dom.icode.siblings('p').html('验证码错误');
				dom.icode.siblings('span').css("backgroundPosition","0 -29px");
				dom.icode.siblings('p').show();
				dom.icode.siblings('span').show();
			}
		})

	}
}
function rannum(){
	var str = '';
	for(var i = 0 ; i<6; i++){

		str += parseInt(Math.random()*10);
	}
	return str;
}
var mcode = {
	dom:{},
	code:[],
	flag:false,
	init:function(){
		this.initDom();
		this.bindEvent();
	},
	initDom:function(){
		var dom = this.dom;
		dom.mcode = $('.mcode');
		dom.mbtn = $('.mbtn');
	},
	bindEvent:function(){
		var dom = this.dom;
		dom.mbtn.click(function(){
			mcode.code = rannum();
			console.log(mcode.code)
		})
		dom.mcode.focus(function(){
			dom.mcode.siblings('p').hide();
			dom.mcode.css('borderColor',"#0099F1")
			dom.mcode.siblings('span').hide();
		
		})
		dom.mcode.blur(function(){
			var mval = dom.mcode.val();
			if(mval ==''){
				dom.mcode.siblings('p').html('请填写短信验证码');
				dom.mcode.siblings('p').show();
				dom.mcode.siblings('span').css("backgroundPosition","0 -29px");
				dom.mcode.siblings('span').show();
			}else if(mval == mcode.code){
				dom.mcode.siblings('span').show();
				dom.mcode.siblings('span').css("backgroundPosition","0 -1px");
				dom.mcode.css('borderColor','#e6e6e6');
				mcode.flag = true;
			}else{
				dom.mcode.siblings('p').html('短信验证码错误');
				dom.mcode.siblings('p').show();
				dom.mcode.siblings('span').css("backgroundPosition","0 -29px");
				dom.mcode.siblings('span').show();
			}
		})
		
	}

}

var protocal =  {
	dom:{},
	init:function(){
		this.initDom();
		this.bindEvent();
	},
	initDom:function(){
		var dom = this.dom;
		dom.check = $('.checked1');
		dom.spshow =$('.spshow');
	},
	bindEvent:function(){
		var dom = this.dom;

		dom.check.click(function(){

			if(dom.check[0].checked){
			      //console.log(1)
			     dom.spshow.hide();		
		    }else{
			     dom.spshow.show();
		    }
		})
		
	}
}

var regbtn  = {
	dom:{},
	user:[{}],
	obj:{},
	init:function(){
		this.initDom();
		this.bindEvent();
	},
	initDom:function(){
		var dom  = this.dom;
		dom.rbtn = $('.regbtn');
	},
	bindEvent:function(){
		var dom = this.dom;
		//console.log(phone.dom.it1.val());
		dom.rbtn.click(function(){
			 /*for(var i = 0; i<regbtn.user.length; i++){
				if(phone.dom.it1.val() == regbtn.user[i].pnumber){
				   //alert('用户名已存在');
				   regbtn.flag = false;
				}
			 }
			 if(regbtn.flag){
				alert('注册成功');
				regbtn.user.push(regbtn.obj);
				console.log(regbtn.user.length);
				console.log(regbtn.user);
			 }else{
				alert('用户名已存在');
			 }
			 console.log(regbtn.flag);
		})*/
		if(phone.flag&&psw1.flag&&psw2.flag&&icode.flag&&mcode.flag&&protocal.dom.check[0].checked){
			alert('注册成功');
			//setCookie('phone',phone.dom.it1.val(),100);
		}else{
			alert('请填写完信息');
		}
		
	})
	}
}

$(function(){
	phone.init();
	psw1.init();
	psw2.init();
	icode.init();
	mcode.init();
	protocal.init();
	regbtn.init();
})
