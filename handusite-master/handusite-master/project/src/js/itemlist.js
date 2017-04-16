$(function(){
	var $all = $('.allList');
	var count = 0;
	$.ajax({
		url:'/js/itemlist.json',
		dataType:'json',
		success:function(res){
			// console.log(res);
			$.each(res,function(idx,obj){
				//console.log(obj);
				//console.log(idx)
				var $wrap = $('<div>').appendTo($all).addClass('wrapbox');
				var $item =$('<div>').appendTo($wrap).addClass('itembox');
				var $img = $('<a>').appendTo($item).html('<img src='+obj.src+" "+'alt = "">').attr('href','detail.html');
				var $p = $('<p>').appendTo($item).addClass('allprice');
				var $span = $('<span>').appendTo($p).addClass('newprice').html('<i>'+obj.icon+'</i>'+obj.newprice);
				/*var $i = $('<i>').appendTo($span).html(obj.icon);
				$span.html(obj.newprice);*/
				var $del = $('<del>').appendTo($p).addClass('oldprice').html(obj.oldprice);
				if((idx+1)%4 ==0 && idx!=0){
					 $wrap.css('marginRight',0);
				}
				
			})
			 //鼠标移入事件
	          $('.itembox').on('mouseenter',function(){
                     $(this).addClass('boxactive');
			 }).on('mouseleave',function(){
			 	    $(this).removeClass('boxactive');
			 })
		}
	})
   
	$(window).on('scroll',function(){
		var scrolltop = $(window).scrollTop();
           if(scrolltop >= $(document).height()-$(window).height()-100){
           	     if(count>5){
           	     	 $(window).off('scroll');
           	     	 return;
           	     }
           	     count++;
           	     $.ajax({
						url:'/js/itemlist.json',
						dataType:'json',
						success:function(res){
							// console.log(res);
						    $.each(res,function(idx,obj){
									
								var $wrap = $('<div>').appendTo($all).addClass('wrapbox');
								$item =$('<div>').appendTo($wrap).addClass('itembox');
								var $img = $('<a>').appendTo($item).html('<img src='+obj.src+" "+'alt = "">').attr('href','detail.html');
								var $p = $('<p>').appendTo($item).addClass('allprice');
								var $span = $('<span>').appendTo($p).addClass('newprice').html('<i>'+obj.icon+'</i>'+obj.newprice);
								var $del = $('<del>').appendTo($p).addClass('oldprice').html(obj.oldprice);
								if((idx+1)%4 ==0 && idx!=0){
									 $wrap.css('marginRight',0);
								}
					
			                })
			                //鼠标移入事件
					          $('.itembox').on('mouseenter',function(){
				                     $(this).addClass('boxactive');
							 }).on('mouseleave',function(){
							 	    $(this).removeClass('boxactive');
							 })
			 
		                }
	           })
           }
	})

	

})
