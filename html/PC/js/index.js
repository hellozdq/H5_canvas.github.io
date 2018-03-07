$(function(){
	
	//轮播
	var ol_li=$(".round>li");
	var ul_li=$("#banner>ul>li");
	var curr=0;
	ol_li.each(function(i){
		$(this).mouseover(function(){
			$(this).addClass("active_ol").siblings().removeClass("active_ol");
			ul_li.eq(i).show().siblings().hide();
			curr=i;
		})
	})
	function slidedown(){
//		console.log(curr);
		ol_li.eq(curr).trigger("mouseover");
		curr++;
		if(curr>ol_li.length-1){
			curr=0;
		}
	}
	var t=setInterval(slidedown(),1000);
	ul_li.mouseover(function(){
		clearInterval(t);
	})
	ul_li.mouseout(function(){
		t=setInterval(slidedown,1000);
	})
})
