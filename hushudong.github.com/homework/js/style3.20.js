//下面为输入用户名
function User(){
	var username=prompt("请输入您的用户名");
	if(/^[\w\u4e00-\u9fa5-_]{4,20}$/.test(username)){
		alert("恭喜您，输入成功");
		passWord();
		return username;	
	}else{
		alert("您输入的格式有问题，请重新输入");
		User();  //递归
	}
}
User(); 


function passWord(){
	var password=prompt("请输入您的密码");
	var passwordsure=prompt("请再次确认您的密码");
	if(/^([a-zA-Z]\w{4,16})$/.test(password)&&password==passwordsure){
		alert("恭喜您，输入成功");
		Tel();
		return password;
	}else{
		alert("您俩次输入的密码不匹配，请重新输入");
		passWord();  //递归
	}
}

function Tel(){
	var tel=prompt("请输入您的电话号码");
	if(/^1[3578]\d{9}$/.test(tel)){
		alert("恭喜您，输入成功");
		postBox();	
		return tel;
		
	}else{
		alert("您输入的号码格式不对，请重新输入");
		Tel();  //递归
	}
}


function postBox(){
	var postbox=prompt("请输入您的邮箱密码");
	if(/\d{10}\@\.com/.test(postbox)){
		alert("恭喜您，注册成功");
		return postbox;	
	}else{
		alert("您输入的邮箱号码格式不对，请重新输入");
		postBox();
	}
}




