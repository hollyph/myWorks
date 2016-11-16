
function Broadcast(piclist,pbtn,classname){
    this.dom = {} ;
    this.index = 0;
    this.timer = 0;
    this.init(piclist,pbtn,classname);
}
Broadcast.prototype = {
     constructor:Broadcast,
     init:function(piclist,pbtn,classname){
        var self = this;
        this.initDom(piclist,pbtn,classname);
        this.initStart(piclist,pbtn,classname);

    },
    initDom:function(piclist,pbtn,classname){
        var dom = this.dom;
        dom.bimg = $(piclist);
        dom.imglist = $(piclist).children();
        dom.bbtn = $(pbtn).children();

    },
    initStart:function(piclist,pbtn,classname){
        var dom = this.dom;
        var self = this;
        self.timer = setInterval(function(){
             self.index++;
             self.showPic(piclist,pbtn,classname);
        },3000)
        
        self.stop(piclist,pbtn,classname);
        self.bbtnBind(piclist,pbtn,classname);
    },
    //图片轮播
    showPic:function(piclist,pbtn,classname){
        var dom = this.dom;
        var self = this;
        if(self.index>=dom.imglist.length){
            self.index = 0;
        }
        dom.imglist.eq(self.index).stop(true,true).animate({opacity:1}).siblings().stop(true,true).animate({opacity:0});
        dom.bbtn.eq(self.index).addClass(classname).siblings().removeClass(classname);
    },
    //鼠标绑定事件
    stop:function(piclist,pbtn,classname){
        var dom = this.dom;
        var self = this;
        dom.bimg.on('mouseenter',function(){
            clearInterval(self.timer);
        }).on('mouseleave',function(){
            self.timer = setInterval(function(){
                self.index++;
                self.showPic(piclist,pbtn,classname);
        },3000);
        })
    },
    //按钮切换事件
    bbtnBind:function(piclist,pbtn,classname){
        var dom = this.dom;
        var self = this;
        dom.bbtn.on('mouseenter',function(){
            clearInterval(self.timer);
            self.index = $(this).index();
            self.showPic(piclist,pbtn,classname);
        })
    }
}
