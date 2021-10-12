var details=new Vue({
	el:'#wrap',
	data:{
		cebianImg:{
			'lunbo':['./img/images/index/static/lunbo1/cebian1.jpg',
			'./img/images/index/static/lunbo1/cebian2.jpg',
			'./img/images/index/static/lunbo1/cebian3.jpg',
			'./img/images/index/static/lunbo1/cebian4.jpg',
			],
			'ertong':['./img/images/index/static/ertongxiangqing/cebian1.jpg',
			'./img/images/index/static/ertongxiangqing/cebian2.jpg',
			],
			
			'xinping':['./img/images/index/static/xinpingxiangqing/cebian1.jpg',
			'./img/images/index/static/xinpingxiangqing/cebian2.jpg',
			'./img/images/index/static/xinpingxiangqing/cebian3.jpg',
			'./img/images/index/static/xinpingxiangqing/cebian4.jpg',
			],						 
		},
		currentIndex:0,              
		imgUrl:{                    
			'lunbo':['./img/images/index/static/lunbo1/xiangqing1.jpg',
			'./img/images/index/static/lunbo1/xiangqing2.jpg',
			'./img/images/index/static/lunbo1/xiangqing3.jpg',
			'./img/images/index/static/lunbo1/xiangqing4.jpg',
			'./img/images/index/static/lunbo1/xiangqing5.jpg',
			'./img/images/index/static/lunbo1/xiangqing6.jpg',
			'./img/images/index/static/lunbo1/xiangqing7.jpg',
			'./img/images/index/static/lunbo1/xiangqing8.jpg',
			'./img/images/index/static/lunbo1/xiangqing9.jpg',
			'./img/images/index/static/lunbo1/xiangqing10.jpg',
			'./img/images/index/static/lunbo1/xiangqing11.jpg',
			
			],
			'ertong':['./img/images/index/static/ertongxiangqing/xaingqing1.jpg',
			'./img/images/index/static/ertongxiangqing/xaingqing2.jpg',
			'./img/images/index/static/ertongxiangqing/xaingqing3.jpg',
			'./img/images/index/static/ertongxiangqing/xaingqing4.jpg',
			'./img/images/index/static/ertongxiangqing/xaingqing5.jpg',
			'./img/images/index/static/ertongxiangqing/xaingqing6.jpg',
			'./img/images/index/static/ertongxiangqing/xaingqing7.png',
			],
			
			'xinping':['./img/images/index/static/xinpingxiangqing/xiangqing1.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing2.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing3.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing4.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing5.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing6.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing7.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing8.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing9.jpg',
			'./img/images/index/static/xinpingxiangqing/xiangqing10.jpg',
			],	
		},
		type:'lunbo',
	},
	methods:{
		enterImg(index){
			this.currentIndex=index;
		}
	},
	created() {
		console.log(window.location.search.substr(window.location.search.indexOf('=')+1))
		this.type=window.location.search.substr(window.location.search.indexOf('=')+1)
	
	}
})