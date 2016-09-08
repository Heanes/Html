/**
 * @doc 消息相关
 * @author Heanes
 * @time 2016-09-08 16:19:35 周四
 */

$(function () {
    $('.message .btn-close').on('click', function () {
        $(this).parent().parent().fadeOut();
    });
});