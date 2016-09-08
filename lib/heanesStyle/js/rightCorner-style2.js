/**
 * @doc 右下角相关
 * @author Heanes
 * @time 2016-02-04 15:32:29 周四
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
        $body.scrollTop(0);
    });
    /**
     * @doc 回底部
     * @author Heanes
     * @time 2016-02-04 15:36:18 周四
     */
    $('.handle.go-to-bottom').on('click', function () {
        $body.scrollTop($body.height());
    });

});