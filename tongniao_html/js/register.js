$(function(){
	$(".fr").submit(function(){
		var userId=$("#userId");
		var number=$("#number");
		var email=$("#email");
		var pw=$("#password");
		var again=$("#again");
		var code=$("#code");
		
		var success=true;
		if($.trim(userId.val())==""){
			success=false;
//			console.log("+++"+$("#userId_tip").html())
			$("#userId_tip").html("会员名不能为空");
			$(".type_user>font").show();
			userId.focus(); 
		}else if(!/^\w{4,16}$/.test($.trim(userId.val()))){
			success=false;
			$("#userId_tip").html("会员名必须为4-16位数字或字母");
			$(".type_user>font").show();
			userId.focus(); 
		}else if($.trim(number.val())==""){
			success=false;
			$("#number_tip").html("手机号码不能为空");
			$(".type_number>font").show();
			number.focus(); 
		}else if(isNaN($.trim(number.val()))){
			success=false;
			$("#number_tip").html("手机号码必须为数字");
			$(".type_number>font").show();
			number.focus(); 
		}else if(!/^\w{11}$/.test($.trim(number.val()))){
			success=false;
			$("#number_tip").html("手机号码必须为11位数字");
			$(".type_number>font").show();
			number.focus(); 
		}
		return success;
	})
	$("#userId").blur(function(){
		var userId=$("#userId");
		if(($.trim(userId.val())!="")&&(/^\w{4,16}$/.test($.trim(userId.val())))){
			$(".type_user>font").hide();
		}
	})
	$("#number").blur(function(){
		var number=$("#number");
		if(($.trim(number.val())!="")&&(/^\w{11}$/.test($.trim(number.val())))){
			$(".type_number>font").hide();
		}
	})
})
