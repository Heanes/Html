
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
     */
    var $articleTitleBlock = $('.article-title-block');
    var articleTitleBlockTop = $articleTitleBlock.position().top;
    var $articleTitleBlockPlaceholder = $('#articleTitleBlockPlaceholder');
    var articleTitleBlockWidth = $articleTitleBlock.width();
    var articleTitleBlockHeight = $articleTitleBlock.height();

    var $rightFixLittleCat = $('#rightFixLittleCat');
    var $iframeFooter = $('.iframe-footer');
    var iframeFooterTop = $iframeFooter.position().top;
    $(window).on('scroll', function () {
        /**
         * @doc 文章详情页面滚动时,标题随之钉住在页面顶部显示
         * @author fanggang
         * @time 2016-05-24 01:56:00
         */
        if($(this).scrollTop() > articleTitleBlockTop){
            // 填充高度
            $articleTitleBlockPlaceholder.css('height', articleTitleBlockHeight);
            $articleTitleBlock.css({
                'position':'fixed',
                'top':0,
                'width':articleTitleBlockWidth,
                'background-color':'#fff'
            });
        }else{
            $articleTitleBlockPlaceholder.css('height', '');
            $articleTitleBlock.css({
                'position':'',
                'top':'',
                'width':'',
                'background-color':''
            });
        }

        /**
         * @doc 侧面"小猫咪"到底部后自动隐藏
         * @author fanggang
         * @time 2016-05-30 22:24:10
         */
        if($(this).scrollTop() > (iframeFooterTop - 1024)){
            console.log('yes');
            $rightFixLittleCat.css('visibility', 'hidden');
        }else{
            $rightFixLittleCat.css('visibility', '');
        }
        //console.log($(this).scrollTop());
        //console.log(articleTitleBlockTop);
        //console.log(iframeFooterTop);
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