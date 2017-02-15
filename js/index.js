
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
})


//轮播图能封装成插件吗?会产生什么问题?
/*
 *1.插件最好不要使用 id 原因:插件是能够被重复使用的，也就是同一个页面中多次使用，造成冲突
 *2.变量的命名和方法的命名：states、interval..... 用户在使用这个插件的时候，可以还会引用自己创建的 js 文件，
 * 也有这样的命名，那么就会产生冲突
 *3.标签 class 的值得问题：prev、next、这些 class 太大众化了，谁写标签都想命名为 prev 或者 next ，势必会冲突
 *4. 插件文件名命名问题：index.js、index.css，命名大众化。比如这样修改：jQuery.ZYSlide.js*/