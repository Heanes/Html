/**
 * @doc 后台布局js
 * @author Heanes <heanes@163.com>
 */
$(function () {

    /**
     * @doc 点击顶部菜单切换侧边菜单
     * @author Heanes
     * @time 2016年08月19日12:09:15
     */
    var $menuTopUl = $('#menuTopUl');
    var $menuTopList = $menuTopUl.find('li');
    var $menuLeftFamily = $('.menu-left-family');
    var $menuLeftGroup = $('.menu-left-group');
    var $menuLeftGroupLiList = $menuLeftGroup.find('li');
    $menuTopList.each(function (i, item) {
        $(item).on('click', function () {
            $menuTopList.removeClass('active');
            $menuLeftFamily.removeClass('active');
            $($menuLeftFamily[i]).addClass('active');
            $(this).addClass('active');
        });

        if($(item).hasClass('active')){
            $($menuLeftFamily).removeClass('active');
            $($menuLeftFamily[i]).addClass('active');
        }
    });

    /**
     * @doc 左侧菜单无限极菜单展开折叠
     * @author Heanes
     * @time 2016年08月19日12:09:58
     */
    $menuLeftGroupLiList.each(function (i, item) {
        if($(item).find('ul.menu-left-group').length > 0){
            $(item).find('.menu-parent').first().on('click', function () {
                $(this).parent().toggleClass('active');
                $(this).toggleClass('active');
                $(this).find('.menu-lap').first().toggleClass('triangle-down triangle-right');
                $(item).find('ul.menu-left-group').first().toggleClass('close');
            });
        }
    });

    /**
     * @doc 左侧菜单缩进
     * @author Heanes
     * @time 2016年08月19日11:59:48
     */
    var $leftBlock = $('.left-block');
    var $menuLeftBlock = $leftBlock.find('.menu-left-block');
    var lapHandleClick = false;
    $('.left-menu-lap-handle').on('click', function () {
        if(lapHandleClick){
            //$menuLeftFamily.removeClass('lapped');
            //$('.menu-left-family .menu-left-group > li > a .menu-lap,.menu-left-family .menu-left-group > li > a .menu-text').fadeIn();
            $menuLeftBlock.removeClass('lapped');
            $('.menu-left-family .menu-left-group > li > a .menu-lap').fadeIn();
            $('.center-block').animate({
                'padding-left': '240px'
            });
            $leftBlock.animate({
                'width': '240px'
            });
            lapHandleClick = false;
        }else{
            $menuLeftBlock.addClass('lapped');
            //$menuLeftFamily.addClass('lapped');
            // 菜单相关隐藏
            //$('.menu-left-family .menu-left-group > li > a .menu-lap,.menu-left-family .menu-left-group > li > a .menu-text').fadeOut();
            $('.menu-left-family .menu-left-group > li > a .menu-lap').fadeOut();
            $('.center-block').animate({
                'padding-left': '30px'
            });
            $leftBlock.animate({
                'width': '30px'
            });
            lapHandleClick = true;
        }

    });

});
