/*------------------header--------------------*/
var header = {
    dom:{},
    init:function(){
        var self = this;
        this.initDom();
        this.topBind();
    },
    initDom:function(){
        var dom = this.dom;
        dom.own = $('.own');   //我的韩都
        dom.order = $('.order');
        dom.web = $('.webp') ; //网站导航
        dom.webdh = $('.webdh');
        dom.club = $('.pos_r');  //会员

        //状态栏
        dom.category =$('.kindlist');
    },
    topBind:function(){
        var dom = this.dom;
        //我的韩都
        dom.own.on('mouseenter',function(){
            dom.order.show();
       
        });
        dom.own.on('mouseleave',function(){
            dom.order.hide();

        })
        //网站导航
        dom.web.on('mouseover',function(){
            dom.webdh.show();
        })
        dom.web.on('mouseout',function(){
            /*setTimeout(function(){
                 dom.webdh.hide();
             },3000) */ 
             dom.webdh.hide();
        })
        dom.webdh.mouseenter(function(){
            $(this).show();
            console.log('show')
        })
        dom.club.on('mouseenter',function(){
            $(this).find('.pos').show();
        })
        dom.club.on('mouseleave',function(){
            $(this).find('.pos').hide();
        })
        //状态栏绑定事件
        dom.category.on('mouseenter','li',function(){

            $(this).addClass('catactive').children('a').addClass('white').siblings('h3').addClass('hchange').find('.imgicon1').hide();
           // console.log($(this).children('h3'))
            $(this).find('.kindlist_c').show();
        })
        dom.category.on('mouseleave','li',function(){
            $(this).removeClass('catactive').children('a').removeClass('white').siblings('h3').removeClass('hchange').find('.imgicon1').show();
            $(this).find('.kindlist_c').hide();
        })
    },
}

var content = {
    dom:{},
    init:function(){
        var self = this;
        this.initDom();
        this.firstBind();
        this.girlcloth();
    },
    initDom:function(){
         var dom = this.dom;
         dom.change = $('.change');
         dom.allbrand = $('.d_brand');
         dom.brand = $('.brand');
         dom.c_brand = $('.c_brand');
         //公告栏
         dom.gtab = $('.gtab');
         dom.desc = $('.desc');
         //排行榜
         dom.level = $('.level');
    },
    firstBind:function(){
        var dom = this.dom;
        //切换商标
        dom.change.on('click','a',function(e){
            /*var idx = $(this).index();*/
            e.preventDefault();
            dom.allbrand.find('.brand').toggle();
        })
        dom.brand.on('mouseenter','li',function(){
            $(this).find('img').attr('src','img/DKN-.jpg');
        })
         dom.brand.on('mouseleave','li',function(){
            $(this).find('img').attr('src','img/DKN.jpg');
        })
         //公告栏事件
        dom.gtab.on('mouseenter','li',function(){
            var idx = $(this).index();
            $(this).addClass('bred').siblings('li').removeClass('bred');
            dom.desc.find('li').eq(idx).show().siblings('li').hide();
        })
        
    },
    //时尚女装事件
    girlcloth:function(){
        var dom = this.dom;
        //排行榜
        dom.level.on('mouseenter','li',function(){
            dom.level.find('dl').hide().siblings('h3').show();
            $(this).find('dl').show().siblings('h3').hide();
            
        })
    }

}
//滚动条事件
var scroll = {
    dom:{},
    init:function(){
        this.initDom();
        this.scrollBind();
    },
    initDom:function(){
        var dom = this.dom;
        dom.hotsearch = $('.s_search');
        dom.adv = $('.adv');
        dom.backtop = $('.com_a5');
    },
    scrollBind:function(){
        var dom = this.dom;
        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();
           // console.log(scrollTop)
            if(scrollTop>=500){
                dom.adv.show();
            }else{
                dom.adv.hide();
            }
            if(scrollTop>=800){
                dom.hotsearch.show();
            }else{
                dom.hotsearch.hide();
            }

        })
        //回到顶部事件
        dom.backtop.on('click',function(e){
            e.preventDefault();
            $('html,body').animate({'scrollTop':0},1000);
        })

    }
}

$(function(){
    header.init();
    content.init();
    scroll.init();
    //broadcast.init();
    new Broadcast('.bimg','.bbtn','btn_active');
    new Broadcast('.allpic','.newbtn','active_a');
    if(getCookie('username')){
        $('.bind').html("<a href='#'>退出</a>");
        console.log(getCookie('username'))
        $('.loguser').html('欢迎您'+getCookie('username'));
    }
})