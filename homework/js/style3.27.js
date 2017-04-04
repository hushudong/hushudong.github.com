//var userList = new Array();
var User=null  //用户名
//下面是构造函数
function Student(account,password,name,sex){
	this.account=account;
	this.password=password;
	this.name=name;
	this.sex=sex;
	this.input=function(){
		return "个人账号:"+this.account+"密码："+this.password+"用户姓名:"+this.name+"性别:"+this.sex;                                                   
	}
}
//启动程序
	home();
	
	//下面 home() 为主界面
function home(){
	var key=prompt("魔型管理系统\n1.登录\n2.注册\n3.退出")
	switch(key){
		case "1":
		//登录
		login();
		break;
		
		case "2":
		//注册
		register();
		break;
		
		case "3":
		//退出整个程序
		return;
		
		default:
		alert("您输入有误");
		
	}
	home(); //递归
}
//下面为登录
//login()
function login(){
	if(User==null){
		return alert("您还没注册账户，快去注册吧！");
	}	
		var account=prompt("请输入您的账号");
		var password=prompt("请输入您的密码");
		//下面判断账号和密码是否匹配
		if(account!=User.account||password!=User.password){
		return	alert("您的账号和密码输入错误，请重新输入！");
	}
		alert("恭喜您，登录成功");
		dome();
	
}
//下面为注册
//register()
function register(){
	var account=prompt("请输入您的账号");
	if(account==""){
		return alert("您的账号输入不能为空");
	}
	var password=prompt("请输入您的密码");
	
	var passwordsure=prompt("请您再次确认输入的密码");
	//下面为判断验证密码
	if(password==""||password!=passwordsure){
		return alert("您俩次输入的密码有问题，请重新输入");
	}	
   var sex=prompt("请您输入自己的性别");
		if(sex!="男"&&sex!="女"){
			return alert("您输入本人的性别有误,请重新输入");
		}
			var name=prompt("请您输入本人的姓名");
			if(name==""){
			return alert("您输入的姓名不能为空！");
			}
				alert("恭喜，您注册成功吧，快去登录吧");
	
				
		}		
			                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
				
			//userList.push(user);

//下面为学生个人管理界面；
function dome(){
	var key=prompt("个人管理界面\n1.查看个人信息\n2.修改用户名\n3.退出");
	switch(key){
		case "1":
		check();
		break;
		
		case "2":
		change();
		break;
		
		case "3":
		return;

		default:
		alert("您输入有误，请重新输入");
		dome();
	}	
}























