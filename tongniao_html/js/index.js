$(function(){
	var current=0;
	var lis=$(".dot>ol>li")
	
	lis.each(function(i,item){
		$(this).mouseover(function(){
			$(this).addClass("active1");
			lis.not(this).removeClass("active1");
			$(".banner_wrap>ul>li").eq(i).show();
			$(".banner_wrap>ul>li").not($(".banner_wrap>ul>li").eq(i)).hide();
			current=i;
//			console.log(i);
		})
	})
	//定时器
	setInterval(function(){
		if(current>lis.length){
			current=0;
		}
		lis.eq(current).trigger("mouseover");
		current++;
	},1000)
})
