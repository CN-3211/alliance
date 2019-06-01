; (function ($, window) {
    //--jQuery闭包
    $(function () {  //页面加载完毕后执行

/**轮播图**/
function viwepager(maximg) {
            var index = 0;
            //var maximg = 2;

            //滑动导航改变内容	
            $("#myjQueryNav li").hover(function () {
                if (MyTime) {
                    clearInterval(MyTime);
                }
                index = $("#myjQueryNav li").index(this);
                MyTime = setTimeout(function () {
                    ShowjQueryFlash(index);

                    $('#myjQueryContent').stop();
                }, 400);

            }, function () {
                clearInterval(MyTime);
                MyTime = setInterval(function () {
                    ShowjQueryFlash(index);
                    index++;
                    if (index == maximg) { index = 0; }
                }, 5000);
            });
            //滑入 停止动画，滑出开始动画.
            /*$('#myjQueryContent').hover(function(){
                     if(MyTime){
                       clearInterval(MyTime);
                     }
            },function(){
                       MyTime = setInterval(function(){
                       ShowjQueryFlash(index);
                       index++;
                       if(index==maximg){index=0;}
                     } , 3000);
            });*/
            //自动播放
            var MyTime = setInterval(function () {
                ShowjQueryFlash(index);
                index++;
                if (index == maximg) { index = 0; }
            }, 5000);


            function ShowjQueryFlash(i) {
                $("#myjQueryContent div").eq(i).animate({ opacity: 1 }, 1000).css({ "z-index": "1" }).siblings().animate({ opacity: 0 }, 1000).css({ "z-index": "0" });
                //$("#flow").animate({ left: 652+(i*76) +"px"}, 300 ); //滑块滑动
                $("#myjQueryNav li").eq(i).addClass("current").siblings().removeClass("current");
            };
        }
		
	 
		viwepager(2);  //有多少张轮播图就放多少张
		
		//图片轮播 end


/**图透明**/
				$('.clear').mouseenter(function () {//当鼠标移入蒙层的时候
                    $(this).animate({ opacity: 0 }, 500);//蒙版层透明度变为0.5，这里用到的是一个jquery里面的animate方法，这让图片变暗的时候有个渐变的效果
                });
                $('.clear').mouseout(function () {//这是当鼠标移开的时候的一个效果
                    $(this).animate({ opacity: 0.3 }, 500);//鼠标移开时把透明度改不全透明
                });


				$('.clear_one').mouseenter(function () {//当鼠标移入蒙层的时候
                    $(this).animate({ opacity: 0 }, 500);//蒙版层透明度变为0.5，这里用到的是一个jquery里面的animate方法，这让图片变暗的时候有个渐变的效果
                });
                $('.clear_one').mouseout(function () {//这是当鼠标移开的时候的一个效果
                    $(this).animate({ opacity: 0.3 }, 500);//鼠标移开时把透明度改不全透明
                });

    });//end


//-- 结束
})(jQuery, window);
/**
 * Created by lvyao on 2015/5/14.
 */
