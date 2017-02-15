
//jquery出让 $ 符号的使用权限（也就是说，从这开始 $ 将不是 jQuery，只能用变量 jQuery）
jQuery.noConflict();

//zySlide() 只要轮播图的跟标签（如何选择器）
jQuery('.slide').zySlide({speed:1000});
jQuery('#slide').zySlide({delay:3000,speed:6000,});
