onload = function(){
	picauto('box','bul','lBtn','btnactive');
    picauto('sbox1','bc1','bBtn1','lactive');
    picauto('sbox2','bc2','bBtn2','lactive');
    picauto('sbox3','bc3','bBtn3','lactive');
    picauto('sbox4','bc4','bBtn4','lactive');
    picauto('sbox5','bc5','bBtn5','lactive');
    picauto('sbox6','bc6','bBtn6','lactive');
    picauto('sbox7','bc7','bBtn7','lactive');
    picauto('sbox8','bc8','bBtn8','lactive');
    picauto('sbox9','bc9','bBtn9','lactive');
}
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
       // this.showcat()
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
       // dom.category = $('.category');
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
            $(this).find('span').css('background','url(images/common_sprite.png) no-repeat -163px -25px');
        });

        dom.dp.mouseleave(function(){   
                dom.dp.css("background","none");
                dom.loc.hide();
                dom.dp.find('span').css('background','url(images/common_sprite.png) no-repeat -163px 0');     
       });

        dom.loc.mouseenter(function(e){
            dom.loc.show();     
            dom.dp.css("background","#fff");
            dom.dp.find('span').css('background','url(images/common_sprite.png) no-repeat -163px -25px');
        })

        dom.loc.mouseleave(function(e){
            dom.loc.hide();         
            dom.dp.css("background","none");
            dom.dp.find('span').css('background','url(images/common_sprite.png) no-repeat -163px 0');
        })
    },
    lishow:function(){
        var dom = this.dom;
        dom.tli1.hover(function(){
            $(this).toggleClass('hactive');
            dom.sp1.css('background',"url(images/common_sprite.png) no-repeat -163px -25px");
            dom.self.show();
        },function(){
            $(this).toggleClass('hactive');
            dom.sp1.css('background',"url(images/common_sprite.png) no-repeat -163px 0");
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
            dom.tag.css('background','url(images/common_sprite.png) no-repeat -163px -25px');
        })
        dom.hw.mouseout(function(){
            
                dom.hweb.hide();
                dom.tag.css('background','url(images/common_sprite.png) no-repeat -163px 0');           
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
    }

}

var gonggao = {
	dom:{},
	init:function(){
		this.initDom();
		this.change();
	},
	initDom:function(){
		var dom = this.dom;
		dom.glist = $('#gbtn');
		dom.btn = $('#gbtn li');
		dom.dlist = $('#detail li');
		dom.abtn= $('.service a');
	},
    change:function(){
    	var dom = this.dom;
    	dom.btn.click(function(){
    		$(this).addClass('gActive');
    		$(this).siblings().removeClass('gActive');
    		var temp = $(this).index();
    		dom.dlist.eq(temp).show();
    		dom.dlist.eq(temp).siblings().hide();
    	})
    	dom.abtn.hover(function(){
    		$(this).find('i').animate({marginTop:'-10px'});
           
    	},function(){
    		$(this).find('i').animate({marginTop:'0'});
           
    	})
    },
}
var ladbox = {
    dom:{},
    init:function(){
        this.initDom();
        this.changefl();
    },
    initDom:function(){
        var dom = this.dom;
        dom.f1 = $('#floor1');
        dom.ladder = $('#ladder');
        dom.ladLi = $('#ladder li:not(:first)');
        dom.floor = $('.first');

    },
    changefl:function(){

        var dom = this.dom;   
        var f1t = dom.f1.offset().top;
        var fh = dom.f1.outerHeight(); 
        var lh = $('.links').offset().top;
        var flag = false; 
        dom.ladLi.click(function(){
            var i = $(this).index();
            i = i - 1;
            flag = true;
            dom.ladLi.find('span').removeClass('spactive');
            $(this).find('span').addClass('spactive');
            var wtop = dom.floor.eq(i).offset().top;
            var h3color = dom.floor.eq(i).css('borderTopColor');
            //console.log(h3color);
            dom.floor.find('.h3-1').css('background',"#fff");
            dom.floor.find('.h3-1').each(function(index){
                $(this).css('color',dom.floor.eq(index).css('borderTopColor'));
            })
            dom.floor.eq(i).find('.h3-1').css({background:h3color,'color':"#fff"});
            $('body').animate({scrollTop:wtop},300,function(){

                      flag = false;
            });
        })

       $(window).scroll(function(){
           if(!flag){
               var scrollTop = $(window).scrollTop();
             //  console.log(scrollTop);
               if(scrollTop>=f1t&&scrollTop<=lh){
                  dom.ladder.show();
               }else{
                  dom.ladder.hide();
               }
               dom.floor.find('.h3-1').each(function(index){
                     $(this).css({background:'#fff',color:dom.floor.eq(index).css('borderTopColor')});
               })
                dom.floor.each(function(index){

                    var ftop = $(this).offset().top;
                    var bcolor = $(this).css('borderTopColor');
                   
                    if(scrollTop+fh*0.75>=ftop){
                        //console.log(index);
                        dom.ladLi.find('span').removeClass('spactive');
                        dom.ladLi.eq(index).find('span').addClass('spactive');
                        $(this).find('.h3-1').css({background:bcolor,'color':"#fff"});
                    }
                })
           }

       })
    }

}

var imgop = {
    dom:{},
    init:function(){
        this.initDom();
        this.change();
    },
    initDom:function(){
        var dom = this.dom;
        dom.iList = $('.iList img');
        dom.sl = $('.s_left img');
        dom.si = $('.s_item img');
        //console.log(dom.sl)
    },
    change:function(){
        var dom = this.dom;
        dom.iList.hover(function(){
            $(this).css({opacity:0.7});
        },function(){
            $(this).css({opacity:1});
        })
        dom.sl.hover(function(){

            $(this).css({opacity:0.7});
        },function(){
            $(this).css({opacity:1});
        })
        dom.si.hover(function(){

            $(this).css({opacity:0.7});
        },function(){

            $(this).css({opacity:1});
        })
    }
}

var links = {
    dom:{},
    init:function(){

        this.initDom();
        this.linkchange();
    },
    initDom:function(){
        var dom = this.dom;
        dom.tab = $('#tab li');
        dom.conlist = $('#content li');
        dom.imga = $('#limg a');
    },
    linkchange:function(){
        var dom =this.dom;
        dom.tab.hover(function(){
            var i = $(this).index();
            dom.tab.removeClass('tActive');
            $(this).addClass('tActive');
            dom.conlist.hide();
            dom.conlist.eq(i).show();
        })
        dom.imga.hover(function(){
            $(this).css('opacity',1);
            
        },function(){
            $(this).css("opacity",0.5);
        })
    }
}

var clock = {
    dom:{},
    init:function(){
        this.initDom();
        this.move();
    },
    initDom:function(){
        var dom = this.dom;
        dom.alarm = $('.clock');
        dom.h = $('.hour');
        dom.m = $('.minutes');
    },
    move:function(){
        var dom = this.dom;

    }
}
$(function(){
    head.init();
    gonggao.init();
    ladbox.init();
    imgop.init();
    links.init();
    clock.init();
})