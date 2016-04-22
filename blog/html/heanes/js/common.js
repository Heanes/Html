/**
 * @doc 公共js
 * @author fanggang
 * @time 2016-02-22 20:23:35 周一
 */


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