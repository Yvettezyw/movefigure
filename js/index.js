/*
 *
 */
//首页我们准备把代码这样改
/*
function slide(){
	//把下面的所有代码全部粘贴过来
	var states = [
               {ZIndex:1,width:120,height:150,top:69,left:134,ZOpacity:0.2 },
               {ZIndex:2,width:130,height:170,top:59,left:0,ZOpacity:0.5 },
               {ZIndex:3,width:170,height:218,top:35,left:110,ZOpacity:0.7 },
               {ZIndex:4,width:224,height:288,top:0,left:263,ZOpacity:1 },
               {ZIndex:3,width:170,height:218,top:35,left:470,ZOpacity:0.7 },
               {ZIndex:2,width:130,height:170,top:59,left:620,ZOpacity:0.5 },
               {ZIndex:1,width:120,height:150,top:69,left:500,ZOpacity:0.2 }
             ];
             
		var lis = $('#box li');
		//让每个 li 对应上面 status 的每个状态
		function move(){
			lis.each(function(index,ele){
				var state = states[index];
				$(ele).css('zIndex',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity);
			})
		}
		//让每个li从中间展开
		move();
		
		
		
		
		//点击下一张，让轮播图发生偏移
		function next(){
			states.unshift(states.pop());
			move();
		}
		function prev(){
		   states.push(states.shift());
		   move();
		}
		//function (){
		//			slideTime = setInterval(next,3000);
		//		})
		
		//点击下一张（section）
		$('#box .next').click(function(){
			//clearInterval(slideTime);
			next();
		});
		$('#box .prev').click(function(){
			prev();
			//clearInterval(slideTime);
		})
		
		//自动轮播
		var interval = null;
		function autoPlay(){
			interval = setInterval(function(){
				next();
			},3000);
		}
		
		autoPlay();
		
		$('#box li').add('#box section').hover(function(){
			clearInterval(interval);
		},function(){
			autoPlay();
		});
			
}
slide();

*/
/*
 * 变量的作用域问题
 * 1.全局域(window)   2.函数域名（function 域） 3.block 域
 * 全局域：从页面被打开之后到页面被关闭之前始终存在
 * 函数域：存在于函数调用的一瞬间（也不一定  考虑下闭包的存在）
 * 
 * 闭包的理解：
 * 闭包的作用：可以保留函数的作用域，(要不然闭包里面的函数  move 就不能使用 slide 函数域里面的变量：states.lis等)
 * 闭包产生的必要条件：（函数）方法里面套（函数）方法，（内层函数要使用外层函数作用域里面的变量）
 * 
 * 全局变量会产生闭包吗？
 * 不会，因为全局变量存在管局
 * 闭包的作用：可以保留函数的作用域函数的作用域 move 就不能使用slids 函数域里面的变两

 */

//自运行的匿名函数
/*
(function (){
 ......	
})();


$(function(){
	.......
});
*/

(function (){
 var states = [
               {ZIndex:1,width:120,height:150,top:69,left:134,ZOpacity:0.2 },
               {ZIndex:2,width:130,height:170,top:59,left:0,ZOpacity:0.5 },
               {ZIndex:3,width:170,height:218,top:35,left:110,ZOpacity:0.7 },
               {ZIndex:4,width:224,height:288,top:0,left:263,ZOpacity:1 },
               {ZIndex:3,width:170,height:218,top:35,left:470,ZOpacity:0.7 },
               {ZIndex:2,width:130,height:170,top:59,left:620,ZOpacity:0.5 },
               {ZIndex:1,width:120,height:150,top:69,left:500,ZOpacity:0.2 }
             ];
             
		var lis = $('#box li');
		//让每个 li 对应上面 status 的每个状态
		function move(){
			lis.each(function(index,ele){
				var state = states[index];
				$(ele).css('zIndex',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity);
			})
		}
		//让每个li从中间展开
		move();
		
		
		
		
		//点击下一张，让轮播图发生偏移
		function next(){
			states.unshift(states.pop());
			move();
		}
		function prev(){
		   states.push(states.shift());
		   move();
		}
		//function (){
		//			slideTime = setInterval(next,3000);
		//		})
		
		//点击下一张（section）
		$('#box .next').click(function(){
			//clearInterval(slideTime);
			next();
		});
		$('#box .prev').click(function(){
			prev();
			//clearInterval(slideTime);
		})
		
		//自动轮播
		var interval = null;
		function autoPlay(){
			interval = setInterval(function(){
				next();
			},3000);
		}
		
		autoPlay();
		
		$('#box li').add('#box section').hover(function(){
			clearInterval(interval);
		},function(){
			autoPlay();
		});
			
})();