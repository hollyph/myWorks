function picauto(box,imgl,btnl,btncss){
	var bul = document.getElementById(imgl);
	var box = document.getElementById(box);
	var lBtn = document.getElementById(btnl);
	var imglist = bul.getElementsByTagName('li');
	var btnlist = lBtn.getElementsByTagName('li');
	var lw = imglist[0].offsetWidth;
	var i = 0;
	bul.innerHTML += bul.innerHTML;
	bul.style.width = lw*imglist.length+'px';	
	var timer = setInterval(move,3000);
	function move(){
		 i++;
         ileft = -i*lw;
         startMove(bul,{left:ileft},next);
         for(var j = 0; j<btnlist.length; j++){
            if(j==i){
            	btnlist[j].className = btncss;
            }else{
            	btnlist[j].className = "";
            }	
         }
         if(i>=imglist.length/2){
         	 btnlist[0].className = btncss;
         }

	}
	for(var j = 0 ;j<btnlist.length; j++){

		  btnlist[j].index = j;
		  btnlist[j].onmouseover = function(){
		 
		  	   i = this.index-1;
		  	   movebtn();
		  }
	}
	function movebtn(){
          move();
          clearInterval(timer);
          timer = setInterval(move,3000);
	}
	function next(){
		if(i>=imglist.length/2){
			bul.style.left = 0;
		    i = 0;        
		}
	}
	window.onblur = function(){
		clearInterval(timer);
	}
	window.onfocus = function(){
		clearInterval(timer);
		timer = setInterval(move,3000);
		
	}
}

