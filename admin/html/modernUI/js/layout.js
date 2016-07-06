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

});