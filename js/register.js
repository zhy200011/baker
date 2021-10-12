var register =new Vue({
	el:'#wrap',
	data:{
		city:'北京',
		zhanghao:null,
		password:null,
	},
	methods:{
		login(){
			if(this.zhanghao=='admin'&&this.password=='123'){
				window.location.href='./content.html'
				
			}else{
				alert('输入正确的账号密码')
			
			}
		},
		changeCity(){
			window.location.href=('./content.html?city='+this.city)
		}
	}
})