(function($) {
	//本函数每次调用只负责一个轮播图的功能
	//也就是说只会产生一个轮播图，这个函数的作用域只能分配给一个轮播图
	//所以要求在调用本函数的时候务必把当前的轮播图跟标签传递过来
	//这里的形参 ele 就是某个轮播的跟标签
	var slide = function(ele,options) {
		//转化为 jquery 标签对象
		var $ele = $(ele);
		//默认设置选项
		var setting = {
			//控制图片刚开始出现的时间
			delay:1000,
			//控制 interval 的时间（轮播速度）
			speed:2000
		};
		$.extend(true, setting, options);
		var states = [
			{ ZIndex: 1, width: 120, height: 150, top: 69, left: 134, ZOpacity: 0.2 },
			{ ZIndex: 2, width: 130, height: 170, top: 59, left: 0, ZOpacity: 0.5 },
			{ ZIndex: 3, width: 170, height: 218, top: 35, left: 110, ZOpacity: 0.7 },
			{ ZIndex: 4, width: 224, height: 288, top: 0, left: 263, ZOpacity: 1 },
			{ ZIndex: 3, width: 170, height: 218, top: 35, left: 470, ZOpacity: 0.7 },
			{ ZIndex: 2, width: 130, height: 170, top: 59, left: 620, ZOpacity: 0.5 },
			{ ZIndex: 1, width: 120, height: 150, top: 69, left: 500, ZOpacity: 0.2 }
		];

		var lis = $ele.find('li');
		//让每个 li 对应上面 status 的每个状态
		function move() {
			lis.each(function(index, value) {
				var state = states[index];
				$(value).css('zIndex', state.ZIndex).finish().animate(state, setting.delay).find('img').css('opacity', state.ZOpacity);
			})
		}
		//让每个li从中间展开
		move();

		//点击下一张，让轮播图发生偏移
		function next() {
			states.unshift(states.pop());
			move();
		}

		function prev() {
			states.push(states.shift());
			move();
		}
		//function (){
		//			slideTime = setInterval(next,3000);
		//		})

		//点击下一张（section）
		$ele.find('.zy-next').click(function() {
			//clearInterval(slideTime);
			next();
		});
		$ele.find('.zy-prev').click(function() {
			prev();
			//clearInterval(slideTime);
		})

		//自动轮播
		var interval = null;

		function autoPlay() {
			interval = setInterval(function() {
				next();
			}, setting.speed);
		}

		autoPlay();
        //停止轮播
		$ele.find('section').add(lis).hover(function() {
			clearInterval(interval);
		}, function() {
			autoPlay();
		});
	}
	//找到要轮播的根标签，调用  slide 方法
	$.fn.zySlide = function(options){
		$(this).each(function(i,ele){
			slide(ele,options);
		});
	}

})(jQuery);

//用 jQuery 封装插件的几种写法
/*
插件类写法:
$.fn.customFun = function(){
	//自定义插件的代码
}
用法:
$('selector').customFun();

工具类写法:
$.customFun = function(){
	//自定义工具类的代码
}
用法:
$.customFun()
*/
