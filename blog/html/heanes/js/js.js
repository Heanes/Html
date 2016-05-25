
$(function () {
    /**
     * @doc 文章模块相关
     * @author fanggang
     * @time 2016-05-21 23:56:54
     */

    /**
     * @doc 文章详情页面滚动时,标题随之钉住在页面顶部显示
     * @author fanggang
     * @time 2016-05-24 01:56:00
     * @type {jQuery|HTMLElement}
     */
    var $articleTitleBlock = $('.article-title-block');
    var articleTitleBlockTop = $articleTitleBlock.position().top;
    $(window).on('scroll', function () {
        var articleTitleBlockWidth = $articleTitleBlock.width();
        if($(this).scrollTop() > articleTitleBlockTop){
            $articleTitleBlock.css({
                'position':'fixed',
                'top':0,
                'width':articleTitleBlockWidth,
                'background-color':'#fff'
            });
        }else{
            $articleTitleBlock.css({
                'position':'',
                'top':'',
                'width':'',
                'background-color':''
            });
        }
    });

    /**
     * @doc 文章主体文字字体增大减小
     * @author fanggang
     * @time 2016-05-25 14:27:37
     */
    var $articleMainContent = $('#mainContent');
    var fontChangeStep = 10;
    $('#opToLargeTextBtn').on('click', function () {
        var $articleMainContentAll = $articleMainContent.find('*');
        if(fontChangeStep <= 20){
            $articleMainContentAll.each( function (i, item) {
                $(item).css('font-size', parseInt($(item).css('font-size')) + 1);
            });
            fontChangeStep++;
        }
    });

    $('#opToSmallTextBtn').on('click', function () {
        var $articleMainContentAll = $articleMainContent.find('*');
        if(fontChangeStep >= 0){
            $articleMainContentAll.each( function (i, item) {
                $(item).css('font-size', parseInt($(item).css('font-size')) - 1);
            });
            fontChangeStep--;
        }
    });
});