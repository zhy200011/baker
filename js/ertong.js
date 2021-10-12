var newgoods=new Vue({
	el:'#wrap',
	data:{
		city:'北京',
		cake:[
			{	
				englishName:'CAKE',
				chinaName:'蛋糕',
				cakeitem:[
					{
						imgUrl:'img/images/index/static/ertong/1.jpg',
						itemName:'菊与橘'
					},
					{
						imgUrl:'img/images/index/static/ertong/2.jpg',
						itemName:'黑白琼安克利'
					},
					{
						imgUrl:'img/images/index/static/ertong/3.png',
						itemName:'浅草'
					},
					{
						imgUrl:'img/images/index/static/ertong/4.jpg',
						itemName:'杰瑞'
					},
					{
						imgUrl:'img/images/index/static/ertong/5.jpg',
						itemName:'百香果'
					},
					{
						imgUrl:'img/images/index/static/ertong/6.jpg',
						itemName:'芒果慕斯'
					},
					{
						imgUrl:'img/images/index/static/ertong/7.jpg',
						itemName:'黑白巧克力'
					},
					{
						imgUrl:'img/images/index/static/ertong/8.jpg',
						itemName:'黑森林'
					},
				],
		
			},
			{
				englishName:'COFFIE_TIME',
				chinaName:'咖啡下午茶',
				cakeitem:[
					{
						imgUrl:'img/images/index/static/xinpin/coffeetime1.jpg',
						itemName:'下午茶双人套餐'
					},
					{
						imgUrl:'img/images/index/static/xinpin/coffeetime2.jpg',
						itemName:'热制原生果仁'
					},
				],
					
			},
			{
				englishName:'BREAD',
				chinaName:'面包',
				cakeitem:[
					{
						imgUrl:'img/images/index/static/xinpin/coffeetime3.jpg',
						itemName:'树莓果酱'
					},
					
				],
					
			},
			{
				englishName:'OTHER',
				chinaName:'其他',
				cakeitem:[
					{
						imgUrl:'img/images/index/static/xinpin/coffeetime3.jpg',
						itemName:'树莓果酱'
					},
					{
						imgUrl:'img/images/index/static/xinpin/coffeetime3.jpg',
						itemName:'树莓果酱'
					},
					{
						imgUrl:'img/images/index/static/xinpin/coffeetime3.jpg',
						itemName:'树莓果酱'
					},
				],
					
			},
		],
	},
	methods:{
		changeCity(){
			window.location.href=('./content.html?city='+this.city)
			 this.$forceUpdate()
		}
	}
})