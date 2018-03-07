$(function(){
	var contain=$(".contain_l>ul>li");
	var introduce=$(".introduce");
	contain.each(function(i){
		$(this).click(function(){
			$(this).addClass("li_bg").siblings().removeClass("li_bg");
			introduce.eq(i).show().siblings().hide();
		})
	})
})
