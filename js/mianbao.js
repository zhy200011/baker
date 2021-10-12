var cake=new Vue({
	el:'#wrap',
	data:{
		city:'北京',
		weidao:[
			'全部口味',
			'乳脂奶油',
			'慕斯',
			'乳酪',
			'巧克力',
			'坚果',
			'水果',
			'咖啡',
			'冰淇淋',
			'应季',
		],
		weight:['445g','900g','1800g'],
		colorCurrentIndex:0,
		type:'全部口味',
		goods:{
		'乳脂奶油':[{goodsitem:'img/images/mianbao/1.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/2.jpg',//单个商品图片
			goodsname:'俄罗斯卷',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/3.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/4.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},],
		'慕斯':[{goodsitem:'img/images/mianbao/1.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/2.jpg',//单个商品图片
			goodsname:'俄罗斯卷',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/3.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/4.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/5.jpg',//单个商品图片
			goodsname:'俄罗斯卷',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/6.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格	
			},],
		'乳酪':[{goodsitem:'img/images/mianbao/7.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/8.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/9.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/10.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/11.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/12.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格	
				},],
		'坚果':[{goodsitem:'img/images/mianbao/4.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/5.jpg',//单个商品图片
			goodsname:'俄罗斯卷',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/6.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格	
			},
			{goodsitem:'img/images/mianbao/7.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/8.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/9.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/10.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},],
		'水果':[{goodsitem:'img/images/mianbao/13.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/14.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/15.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/16.png',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格	
				},],
		'巧克力':[{goodsitem:'img/images/mianbao/6.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格	
			},
			{goodsitem:'img/images/mianbao/7.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/8.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/9.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/10.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/11.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},],
		'咖啡':[	{goodsitem:'img/images/mianbao/10.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/11.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/12.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格	
				},
				{goodsitem:'img/images/mianbao/13.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},],
		'冰淇淋':[{goodsitem:'img/images/mianbao/7.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/8.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/9.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/10.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/11.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/12.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格	
				},
				{goodsitem:'img/images/mianbao/13.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/14.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/15.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},],
		'应季':[{goodsitem:'img/images/mianbao/14.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/15.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/16.png',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格	
				},
			],
		'全部口味':[{goodsitem:'img/images/mianbao/1.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/2.jpg',//单个商品图片
			goodsname:'俄罗斯卷',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/3.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/4.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/5.jpg',//单个商品图片
			goodsname:'俄罗斯卷',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格
			},
			{goodsitem:'img/images/mianbao/6.jpg',//单个商品图片
			goodsname:'全麦米娜',//商品名字
			goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
			goodsprice:'198.00/450g',//商品价格	
			},
			{goodsitem:'img/images/mianbao/7.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/8.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/9.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/10.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/11.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/12.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格	
				},
				{goodsitem:'img/images/mianbao/13.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/14.jpg',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/15.jpg',//单个商品图片
				goodsname:'俄罗斯卷',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格
				},
				{goodsitem:'img/images/mianbao/16.png',//单个商品图片
				goodsname:'全麦米娜',//商品名字
				goodstype:'树油奶油与浆果裹慕斯蛋糕',//蛋糕类型
				goodsprice:'198.00/450g',//商品价格	
				},
			],								
		},
			
	},
	methods:{
		changeColor(index){
			this.colorCurrentIndex=index,
			this.type=this.weidao[index]
		},
		
		
	}
})