var head = {
	dom:{},
	init:function(){
		this.initdom();
		this.warn();
		this.delivery();
		this.lishow();
		this.hwshow();
		this.changeLi();
		this.showitem();
        this.showloc();
        this.showcat()
	},
	initdom:function(){
		var dom = this.dom;
		dom.wn = $('.head-warn');
		dom.btn = $('#btn');
		dom.dp = $('#dp');
		dom.loc = $('.loc');
		dom.tli1 = $('.tlist li:has(ul)');
		dom.tli2 = $('.tlist li:has(div)');
		dom.self = $('#selflist');
		dom.wx = $('.wxlist');	
		dom.sp1 = $('.sp1');
		dom.hw = $('#hLi');
		dom.hweb = $('#hweb');
		dom.tag = $('.tag');	
		dom.menu =　$('#menu');
		dom.catlog = $('.li1');
		dom.show = $('.show');
		dom.slist = $(".show li");
		dom.showbtn = $('#menu li');
        dom.cartbtn = $('.cart');
        dom.item = $('.item');
        dom.category = $('.category');
	},
	warn:function(){

		var dom = this.dom;
		dom.wn.slideDown();
		dom.btn.click(function(){
			dom.wn.slideUp();
		})
	},
	delivery:function(){
        var dom = this.dom;
        dom.dp.mouseenter(function(){
        
        	$(this).css("background","#fff");
        	dom.loc.show();
        	$(this).find('span').css('background','url(../images/common_sprite.png) no-repeat -163px -25px');
        });

        dom.dp.mouseleave(function(){  	
                dom.dp.css("background","none");
        	    dom.loc.hide();
        	    dom.dp.find('span').css('background','url(../images/common_sprite.png) no-repeat -163px 0');     
       });

        dom.loc.mouseenter(function(e){
        	dom.loc.show();   	
        	dom.dp.css("background","#fff");
        	dom.dp.find('span').css('background','url(../images/common_sprite.png) no-repeat -163px -25px');
        })

        dom.loc.mouseleave(function(e){
        	dom.loc.hide();      	
        	dom.dp.css("background","none");
        	dom.dp.find('span').css('background','url(../images/common_sprite.png) no-repeat -163px 0');
        })
    },
    lishow:function(){
        var dom = this.dom;
    	dom.tli1.hover(function(){
    		$(this).toggleClass('hactive');
    		dom.sp1.css('background',"url(../images/common_sprite.png) no-repeat -163px -25px");
    		dom.self.show();
    	},function(){
    	    $(this).toggleClass('hactive');
    	    dom.sp1.css('background',"url(../images/common_sprite.png) no-repeat -163px 0");
    		dom.self.hide();
    	});
    	dom.self.find('li').hover(function(){
    		$(this).css('background',"#f1f1f1");
    	},function(){
    		$(this).css('background',"none");
    	})
    	dom.tli2.hover(function(){
    		$(this).toggleClass('hactive');
    		dom.wx.show();
    	},function(){
    		$(this).toggleClass('hactive');
    		dom.wx.hide();
    	})
    }, 
    hwshow:function(){
    	var dom = this.dom;
    	dom.hw.mouseover(function(){
            dom.hweb.show();
            dom.tag.css('background','url(../images/common_sprite.png) no-repeat -163px -25px');
    	})
    	dom.hw.mouseout(function(){
    		
    			dom.hweb.hide();
    		    dom.tag.css('background','url(../images/common_sprite.png) no-repeat -163px 0');   		
    	})
    	dom.hw.find('li').hover(function(){
    		$(this).css('background',"#f1f1f1");
    	  },function(){
    		$(this).css('background',"none");
    	  }
    	)
    },
    changeLi:function(){
    	var dom = this.dom;
    	dom.showbtn.hover(function(){
    		var index = $(this).index();
    		$(this).animate({width:'170px',paddingLeft:'10px'},300);
    		dom.show.show();
    		dom.slist.eq(index).show();
    		dom.slist.eq(index).siblings().hide();
    		
    		
    	},function(){
    		var index = $(this).index;
    		$(this).animate({width:'180px',paddingLeft:0},300);
    		dom.show.hide();
    		
    	})
    	dom.show.hover(function(){
    		$(this).show();
    	},function(){
    		$(this).hide();
    	})
    },
    showitem:function(){
        var dom = this.dom;
        dom.cartbtn.hover(function(){
            dom.item.show();
        },function(){
            dom.item.hide();
        })
        dom.item.hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        })
    },
    showloc:function(){
        var dom = this.dom;
        dom.loc.find('a').each(function(index){
            $(this).click(function(){
                dom.dp.find('strong').html($(this).text());
            })
        })
    },
    showcat:function(){
        var dom = this.dom;
        dom.category.hover(function(){
           dom.menu.show(); 
        },function(){
            dom.menu.hide();
        })
        dom.menu.hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        })
    }

}

$(function(){

	head.init();
})