//改购物车添加内容
var cart = {
	dom:{},
	init:function(){
		this.initDom();
		this.bind();
	},
	initDom:function(){
		var dom = this.dom;
		dom.cart = $('.cart_goods'); //购物车模块
		dom.cartlist = $('.cart_goods>ul');
		dom.content = $('.margin');  //商品盒子
		dom.nogoods = $('.nogoods'); //购物车没有商品时的内容
	},
	bind:function(){
		var dom = this.dom;
		var self = this;
        if(getCookie('goods')){
        	var product = JSON.parse(getCookie('goods'));
        	//console.log(product)
            dom.nogoods.remove();
            $.each(product,function(idx,obj){
            	//商品介绍
            	var $goods = $('<div>').appendTo(dom.content).addClass('goodsstyle');
            	var $dl = $('<dl>').appendTo($goods).addClass('imgc');
	        	var $dt = $('<dt>').appendTo($dl);
	        	var $dta = $('<a>').appendTo($dt).html('<img src ='+obj.src+ "/>");
	        	var $dd = $('<dd>').appendTo($dl);
	        	var $a = $('<a>').appendTo($dd).html(obj.des);
	        	var $p = $("<p>").appendTo($dd).html('<span>'+obj.color+'</span>'+'<span>'+obj.size+'</span>');
                //创建4个div
	        	for(var j = 0 ; j<4; j++){
	        		$('<div>').appendTo($goods).addClass('gcom');
	        	}
	             var $box = $('.goodsstyle').eq(idx).children('.gcom');
	             var $last = $('<div>').appendTo($goods).addClass('lastd');
                //价格
	             $box.eq(0).html('<del>￥'+obj.oldprice+"</del>"+'<p>'+obj.newprice+"</p>");
                //数量
	             $box.eq(1).html('<span class = "sub">-</span><input class = "eachcount" type="text" value='+obj.amount+'><span class = "add">+</span>')
	             //总价
	             $amountprice = $box.eq(2).addClass('cred');
	            // console.log($amountprice)

	             //删除和移入收藏夹
	             $box.eq(3).html('<a href="#">移入收藏夹</a><a href="#"  class = "delete">删除</a>');

	             //商品相关活动内容
	             $('<a>').appendTo($last).html(obj.activity);

	             //获取每一件商品的数量
                 var amount = obj.amount;
                 
                 //每件商品的总价格
	             self.price = parseInt(obj.newprice.slice(1));
	             var allprice = self.price*amount;
	             $amountprice.html('￥'+allprice+".00").eq;

	            //减少数量和相应价格的变化
			    $('.sub').on('click',function(){
			    	var index = $(this).index();
		             amount--;
		             if(amount<=1){
		             	 amount = 1;
		             }
		             $('.eachcount').eq(index).val(amount);
		             allprice = self.price*amount;
		             $('.cred').html('￥'+allprice+".00");
			    })
				//增加数量和相应价格的变化
				$('.add').on('click',function(){
					amount++;
					$('.eachcount').eq(idx).val(amount);
					allprice = self.price*amount;
					$amountprice.html('￥'+allprice+".00");
				})

            })

            //购物车内的所有商品的总价格和数量
        	var $cal = $('<div>').appendTo(dom.cart).addClass('cal');
        	for(var i=0; i<3;i++){
        		$('<p>').appendTo($cal).addClass('eachprice');
        	}
        	var $allp = $('.eachprice');
        	//商品数量和价格
        	$allp.eq(0).html("<i>"+self.total+"</i>件商品&nbsp;&nbsp;总计：<span></span>");
        	$allp.eq(1).html("&nbsp;&nbsp;满立减：<span></span>");
        	$allp.eq(2).html("&nbsp;&nbsp;税费：<span></span>");
        	$allp.eq(0).children('i').html(self.quantity);
        	//折扣后的价格
        	var $allprice = $('<p>').appendTo(dom.cart).addClass('allprice').html("购物金额总计："+"<span class = 'bfont'></span>");
        	var $btn = $('<p>').appendTo(dom.cart);
        	//按钮
        	var $paybtn = $('<a href="#">').appendTo($btn).addClass('paya');
        	var $paybtn = $('<a href="../index.html">').appendTo($btn).addClass('shop');
             //删除商品
             $('.delete').on('click',function(e){
             	e.preventDefault();
             	var index = $(this).index();
             	$('.goodsstyle').eq(index).remove();            	
             })
        }
             
	}
}
$(function(){
     cart.init();
     if(getCookie('username')){
        $('.bind').html("<a href='#'>退出</a>");
        $('.loguser').html('欢迎您'+getCookie('username'));
    }

        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();

            if(scrollTop>=500){
                $('.adv').show();
            }else{
                $('.adv').hide();
            }
        })
        //回到顶部事件
        $('.com_a5').on('click',function(e){
            e.preventDefault();
            $('html,body').animate({'scrollTop':0},1000);
        })

})