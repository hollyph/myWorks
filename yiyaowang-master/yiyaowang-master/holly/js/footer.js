var fTop = {
	dom:{},
	init:function(){
		this.initDom();
		this.bindEvent();
	},
	initDom:function(){
		var dom = this.dom;
		dom.fa = $(".f-top a");
	},
	bindEvent:function(){
		var dom = this.dom;
		dom.fa.hover(function(){
			$(this).animate({marginTop:30},100);
		},function(){
				$(this).animate({marginTop:40},200);
		})
	}
}

var tip = {
	dom:{},
	init:function(){
		this.initDom();
		this.changeLi();
		this.back();
	},
	initDom:function(){
		var dom = this.dom;
		dom.askbtn = $('.adl1');
		dom.goodsbtn = $(".adl2 ");
		dom.back = $('.adl4 a')
		dom.ask = $('#ask');
		dom.goods = $('.goods');
	},
	changeLi:function(){
		var dom = this.dom;
		dom.askbtn.hover(function(){
             dom.ask.show();            
		},function(){
			dom.ask.hide();
		})
		dom.ask.hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
		dom.goodsbtn.hover(function(){
			dom.goods.show();
		},function(){
			dom.goods.hide();
		})
		dom.goods.hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})


	},
	back:function(){
		var dom = this.dom;
		dom.back.click(function(e){
              e = e||event;
              e.preventDefault? e.preventDefault():e.returnValue=false;
              $('body').animate({scrollTop:0},500);
		})
		
	}
}
$(function(){
	fTop.init();
	tip.init();
})
