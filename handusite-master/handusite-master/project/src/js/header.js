
var header = {
    dom:{},
    init:function(){
        var self = this;
        this.initDom();
        this.topBind();
        this.changeuser();
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
        $('.category').on('mouseenter',function(){
            $('.all').show();
        }).on('mouseleave',function(){
            $('.all').hide();
        })
        dom.category.on('mouseenter','li',function(){
            $('.all').show();
            $(this).addClass('catactive').children('a').addClass('white').siblings('h3').addClass('hchange').find('.imgicon1').hide();
           // console.log($(this).children('h3'))
            $(this).find('.kindlist_c').show();
        })
        dom.category.on('mouseleave','li',function(){
             $('.all').hide();
            $(this).removeClass('catactive').children('a').removeClass('white').siblings('h3').removeClass('hchange').find('.imgicon1').show();
            $(this).find('.kindlist_c').hide();
        })
    },
     changeuser:function(){
        if(getCookie('username')){
            $('.bind').html("<a href='#'>退出</a>");
          //  console.log(getCookie('username'))
            $('.loguser').html('欢迎您'+getCookie('username'));
        }
    },
}

//滚动条事件
var scroll = {
    dom:{},
    init:function(){
        var self = this;
        this.initDom();
        this.scrollBind();
    },
    initDom:function(){
        var dom = this.dom;
        // dom.hotsearch = $('.s_search');
        dom.adv = $('.adv');
        dom.backtop = $('.com_a5');
    },
    scrollBind:function(){
        var dom = this.dom;
        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();

            if(scrollTop>=500){
                dom.adv.show();
            }else{
                dom.adv.hide();
            }

        })
        //回到顶部事件
        dom.backtop.on('click',function(e){
            e.preventDefault();
            $('html,body').animate({'scrollTop':0},1000);
        })

    }
}
