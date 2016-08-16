/**
 * @doc 后台布局js
 * @author Heanes <heanes@163.com>
 */
$(function () {
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
        // 按顶部菜单激活侧边菜单
        if($(item).hasClass('active')){
            $($menuLeftFamily).removeClass('active');
            $($menuLeftFamily[i]).addClass('active');
        }
    });

    $menuLeftGroupLiList.each(function (i, item) {
        if($(item).find('ul.menu-left-group').length > 0){
            $(item).find('.menu-parent').first().on('click', function () {
                $(this).toggleClass('active');
                $(this).find('.menu-lap').first().toggleClass('triangle-down triangle-right');
                $(item).find('ul.menu-left-group').first().toggleClass('close');
            });
        }
    });

    var $leftBlock = $('.left-block');
    var lapHandleClick = false;
    $('#lapHandle').on('click', function () {
        if(lapHandleClick){
            //$menuLeftFamily.removeClass('lapped');
            $('.menu-left-family .menu-left-group > li > a .triangle-right,.menu-left-family .menu-left-group > li > a .menu-text').fadeIn();
            $('.center-block').animate({
                'padding-left': '240px'
            });
            $leftBlock.animate({
                'width': '240px'
            });
            lapHandleClick = false;
        }else{
            //$menuLeftFamily.addClass('lapped');
            // 菜单相关隐藏
            $('.menu-left-family .menu-left-group > li > a .triangle-right,.menu-left-family .menu-left-group > li > a .menu-text').fadeOut();
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
