$(function(){
	//小图切大图
	var lis=$(".p_list>ul>li");
//	lis.css("cursor","pointer");
    lis.click(function(){
    	var maxImg=$(".max");
    	var minImg=$(this).find("img");
    	maxImg.attr("src",minImg.attr("src"));
    	//添加样式
    	$(this).addClass("active_border");
        lis.not(this).removeClass("active_border");
    })
    
     //增加减少数量
     $("#plus").click(function(){
     	var num=$("#num").val();
     	var total=$("#total").text();
//   	console.log(total)
        ++num;
        if(num>total){
//      	num=total;
            return;
        }
     	$("#num").val(num);
        
     })
     
     $("#reduce").click(function(){
     	var num=$("#num").val();
     	--num;
     	if(num<1){
//   		num=1;
            return;  
     	}
     	$("#num").val(num);
     })
     
     //用户输入验证
     $("#num").change(function(){
     	var num=this.value;
     	var total=$("#total").text();
//   	console.log(num);
     	if(!/^\d+$/.test(num) || (parseInt(num) < 1)){
     		this.value="1";
     	}
     	if(parseInt(num)>parseInt(total)){
     		this.value=parseInt(total);
     	}
     })
     
})
