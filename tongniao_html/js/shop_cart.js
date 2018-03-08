$(function(){
	$("#check").click(function(){
		$("input[id^='check_']").attr("checked",this.checked);
		calctotal();
	})
	
//	if(!$("#check").attr("checked")){
//		$("#check").trigger("click");
//	}else{
//		calctotal();
//	}

    
    $("input[id^='check_']").click(function(){
    	calctotal();
    	$("#check").attr("checked",$("input[id^=check_]").length==$("input[id^=check_]").filter(":checked").length)
    })
 
    $("input[id^='num_']").change(function(){
    	if(/^\d+$/.test(this.value)&&this.value>=1){
    		
    		//数量
    		var num=parseInt(this.value);
    		//价格
    		var price=parseFloat($(this.id.replace("num_","#price_")).html());
    		//小计
    		var mintotal=num*price;
    		$(this.id.replace("num_", "#total_")).html(mintotal);
    		calctotal();
    	}else{
    		this.value=1;
    	}
    })
    
    //-
    $("input[id^='min_']").click(function(){
    	var num=parseInt($(this.id.replace("min_","#num_")).val());
    	num--;
//  	console.log(num);
        if(num<1){
        	num=1;
        }
       $(this.id.replace("min_","#num_")).val(num);
       $("input[id^='num_']").trigger("change");
    })
    
    //+
    $("input[id^='add_']").click(function(){
    	var num=parseInt($(this.id.replace("add_","#num_")).val());
    	num++;
    	$(this.id.replace("add_","#num_")).val(num);
        $("input[id^='num_']").trigger("change");
    })
    var calctotal=function(){
    	var calctotal=0;
    	var calcnum=0;
    	$("input[id^='check_']").each(function(){
    		if(this.checked){
    			var price=parseFloat($(this.id.replace("check_","#price_")).html());
    			var num=parseInt($(this.id.replace("check_","#num_")).val());
    			var mintotal=num*price;
    			calcnum+=num;
    			calctotal+=mintotal;
    		}
    	});
    	$("#calc_num").html(calcnum);
    	$("#calc_price").html("¥"+calctotal);
    }  
    $(".delete_1").click(function(){
    	$(this).parent().remove();
    })
})
