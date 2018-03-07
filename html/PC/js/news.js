$(function(){
	var contain=$(".contain_l>ul>li");
	var news=$(".news");
	contain.each(function(i){
		$(this).click(function(){
			$(this).addClass("li_bg").siblings().removeClass("li_bg");
			news.eq(i).show().siblings().hide();
		})
	})
})
