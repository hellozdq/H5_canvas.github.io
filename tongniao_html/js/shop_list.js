$(function(){
	$(".sort>ul>li").each(function(){
		$(this).click(function(){
		    $(this).addClass("active3");
		    $(".sort>ul>li").not(this).removeClass("active3");
	   })
//		$(this).mouseout(function(){
////			if(this.id!="home"){
//			$(this).removeClass("active3")
////			}
//		})
	})
})
