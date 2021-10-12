new Vue({
	el:'#wrap',
	data:{
		isActive:true,
		city:[{
			id:1,name:'成都'
		},{
			id:2,name:'北京'
		},{
			id:3,name:'上海'
		},{
			id:4,name:'深圳'
		},
		{
			id:5,name:'广州'
		},
		],
		chooseCity:'成都',
		clickId:-1,
	},
	methods:{
		goindex(){
			this.isActive=false
			setTimeout(()=>{
				window.location.href=('./content.html?city='+this.chooseCity)
				
			},1000)
			
		},
		// 选择城市
		choose(name,id){
			this.clickId=id
			this.chooseCity=name
			console.log(this.chooseCity)
		}
	}
	
})