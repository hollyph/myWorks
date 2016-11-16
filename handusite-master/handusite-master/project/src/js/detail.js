//放大镜
var glass = {
    dom: {},
    init: function() {
        this.initDom();
        this.bindEvent();
    },

    initDom: function() {
        var dom = this.dom;
        dom.sImg = $('.pimg'); // 包含小图的那个div
        dom.bImg = $('.bimg'); // 包含大图的那个div
        dom.large = $('.large');   // 放大镜镜片  小方块
        dom.simglist = $('.productlist');   //小图片切换
    },

    bindEvent: function() {
        var dom = this.dom;
        dom.sImg.hover(function() {
            // 移入
            dom.large.show();
            dom.bImg.show();
        }, function() {
            // 移出
            dom.large.hide();
            dom.bImg.hide();
        })
         //切换图片
         dom.simglist.on('click','li',function(){
            var src = $(this).find('img').attr('src');
         	dom.sImg.find("img").attr({src:src});
         	dom.bImg.find('img').attr({src:src});
         	dom.simglist.find('i').hide();
         	dom.simglist.find('li').css('borderColor','#ddd');
         	$(this).css({borderColor:'#c80a28'}).find('i').show();
         })
        // 鼠标在小图div上移动
        dom.sImg.mousemove(function(e) {
            // 鼠标距离可视区域的坐标点
            var $x = e.clientX;
            var $y = e.clientY;

            // 获取小图div距离body的坐标点
            var $l = dom.sImg.offset().left;
            var $t = dom.sImg.offset().top;

            // 镜片的宽或高
            var $w = dom.large.outerWidth() / 2; //outerWidth()求出的宽度包含边框，而width()不包含边框
            var $h = dom.large.outerHeight() / 2;
            
            //滚动条的距离
            var scrolltop = $(window).scrollTop();

            // 将要移动的坐标点
            var $left = ($x - $l - $w);
            var $top = ($y - $t - $h + scrolltop);


            // 不能让它跑出去
            if ($left <= 0) {
                $left = 0;
            } else if ($left >= dom.sImg.width() - $w * 2) {
                $left = dom.sImg.width() - $w * 2;
            }

            if ($top <=0 ) {
                $top = 0;
            } else if ($top >= dom.sImg.height() - $h * 2) {
                $top = dom.sImg.height() - $h * 2;
            }

            //
            // 小图          --  大图
            // 放大镜的镜片  --  bimg

            // 镜片所能移动的一个位置
            var $l_bl = $left / (dom.sImg.width() - $w * 2);
            var $t_bl = $top / (dom.sImg.height() - $h * 2);

            // 大图片显示相应的位置   --- left: top
            var $b_left = (dom.bImg.find('img').width() - dom.bImg.width()) * $l_bl;
            var $b_top = (dom.bImg.find('img').height() - dom.bImg.height()) * $t_bl;

            dom.large.css({'left': $left, 'top': $top});
            dom.bImg.find('img').css({'left': -$b_left, 'top': -$b_top});

        })
    }
}
//购买商品
var count = {
	color:'黑色',
	size:'S',
	price:$('.price span').text(),
	amount:1,
	dom:{},
	init:function(){
		this.initDom();
		this.eventBind();
	},
	initDom:function(){
		var dom = this.dom;
		dom.size = $('.size');  //获取尺码
		dom.color = $('.color'); //获取颜色
		dom.price = $('.price');  //获取价格
		dom.quantity = $('.quantity'); 
		dom.addgood = $('.addgoods');   //显示购买
		dom.sub = $('.sub');   //表示减少商品
		dom.add = $('.add');  //增加商品
		dom.amount = dom.quantity.find('input');  //获取数量
		dom.allbtn = $('.allbtn');
	},
	eventBind:function(){
		var dom = this.dom;
		var self = this;
		//点击尺码，改变样式
		dom.size.on('click','span',function(){
			
			 $(this).toggleClass('i_active').children('i').toggle();
			 $(this).siblings('span').removeClass('i_active').children('i').hide();
             self.size = $(this).text();
             dom.addgood.html('你已选择了'+'['+self.size+"]"+"["+self.color+"]");
		})
		//点击颜色，改变样式
		dom.color.on('click','span',function(){
			 $(this).toggleClass('i_active').children('i').toggle();
			 $(this).siblings('span').removeClass('i_active').children('i').hide();
             self.color = $(this).text();
             dom.addgood.html('你已选择了'+'['+self.size+"]"+"["+self.color+"]");
		})
		//减少数量
        self.amount = parseInt(dom.amount.val());
		dom.sub.on('click',function(){
             self.amount = parseInt(dom.amount.val())-1;
             if(self.amount<=1){
             	 self.amount = 1;
             }
             dom.amount.val(self.amount);
		})
		//增加数量
		dom.add.on('click',function(){
			self.amount = parseInt(dom.amount.val())+1;
			dom.amount.val(self.amount);
		})

        //创建cookie
        $('.btn2').click(function(e){
            e.preventDefault();
            self.amount = parseInt(dom.amount.val());
            self.price = dom.price.find('span').text();
            var src = $('.bimg').children('img').attr('src');
            var des = $('.procontent').children('h3').children('span').html();
            var activity = $('.procontent').children('h3').find('a').html();
            var oldprice = $('.itemnum').children('del').text();
            var goodslist = {src:src,des:des,color:count.color,size:count.size,newprice:count.price,oldprice:oldprice,amount:count.amount,activity:activity};
            var arr = [goodslist];
            self.getcookie = getCookie('goods');

            if(!self.getcookie){
                 setCookie('goods',JSON.stringify(arr),1);
            }else{
                  var arr1 = JSON.parse(self.getcookie)
                  arr1.push(goodslist);
                  var arr2 = JSON.stringify(arr1);
                 // console.log(arr2);
                  setCookie('goods',arr2,1);
            }                                                                
        })
	}
}

$(function() {
    glass.init();
    count.init();
    $('.tab').on('click','li',function(){
        var idx = $(this).index();
        $(this).addClass('liactive').siblings('li').removeClass('liactive');
        $('.contents').children('li').eq(idx).show().siblings('li').hide();
    })
})