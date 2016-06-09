/**
 * @doc 公共js
 * @author fanggang
 * @time 2016-02-22 20:23:35 周一
 */

// rely on jQuery2.x
$(function () {

    var $body = $('body');
    /**
     * @doc 回顶部
     * @author Heanes
     * @time 2016-02-04 15:36:18 周四
     */
    $('.handle.go-to-top').on('click', function () {
        $body.animate({scrollTop: 0}, 'slow');
    });
    /**
     * @doc 回底部
     * @author Heanes
     * @time 2016-02-04 15:36:18 周四
     */
    $('.handle.go-to-bottom').on('click', function () {
        $body.animate({scrollTop: $body.height()}, 'slow');
    });

    /**
     * @doc 顶部更换字体功能
     * @author fanggang
     * @time 2016-06-09 12:30:05
     */
    // 读取cookie里的字体设置
    $('#textSongti').on('click', function () {
        $body.css({'font-family':'sans-serif'});
        // 操作cookie,存入配置
    });
    $('#textYahei').on('click', function () {
        $body.css({'font-family':'Microsoft Yahei'});
        // 操作cookie
    });

});


/**
 * @doc 原生js使iframe自适应宽度高度
 * @use 用法,例如<iframe onLoad="frameAutoHeight('FM_header','FM_header')" src="../layout/header.html" name="FM_header" id="FM_header"></iframe>
 * @param frameName 框架名称
 * @param frameId 框架id
 * @author fanggang
 * @time 2016-02-22 20:24:11 周一
 */
function frameAutoHeight(frameName, frameId){
    var frame = document.getElementById(frameId);
    var subWeb = document.frames ? document.frames[frameName].document : frame.contentDocument;
    if(frame != null && subWeb != null){
        frame.style.height = subWeb.documentElement.scrollHeight + "px";
        //如需自适应宽高，去除下行的“//”注释即可
        frame.style.width = subWeb.documentElement.scrollWidth + "px";
    }
}

/**
 * @doc 使iframe自适应宽度高度
 * @author fanggang
 * @time 2016-04-22 20:04:10
 */
$(function () {
    $('iframe').on('load', function () {
        var thisHeight = $(this).contents().height();
        $(this).css('height', thisHeight);
        var thisWidth = $(this).contents().width();
        $(this).css('width', thisWidth);
    });

});