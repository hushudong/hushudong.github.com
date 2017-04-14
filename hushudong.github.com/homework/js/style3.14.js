var flag=true;
var box=true;
var passWord  //密码
var userName  //用户名

while(flag){
	var key=prompt("请选择你要进行的操作！\n1.登录\n2.注册\n3.退出");
switch(key){
	case"1":
		if(userName!==undefined){
			var userNameInput=prompt("请您输入用户名！");
			var passWordInput=prompt("请您输入密码!");
				if(userName==userNameInput&&passWord==passWordInput){
					alert("恭喜您，登录成功呢");
					dome();
				}
				
				
		}else{
            alert("您还没注册，请先注册吧");
				}
	break;
	function dome(){
	var box=prompt("个人管理界面！\n1.存钱\n2.取钱\n3.查看余额\n4.退出");
	switch(box){
		case"1":
		saveMoney();
		//存钱
		break;
		case"2":
		withdraw();
		//取钱
		break;
		case"3":
		banlance();
		//查看余额
		break;
		case"4":
		box=false;
		break;
		
	}
}
	
	case"2":
		var name=prompt("请您输入用户名！");
		var mima=prompt("请您输入密码!");
		var mimaSure=prompt("请您再次确认下输入密码!");
		if(mima==mimaSure){
			userName=name;
			passWord=mima;
			alert("恭喜您，注册成功呢")
		}else{
			alert("您俩次输入的密码不一致，请重新注册！")
		}
	break;
	
	case"3":
	flag=false;
	break;
	
	default:
	alert("您输入有误");	
	
		
}
}

	


