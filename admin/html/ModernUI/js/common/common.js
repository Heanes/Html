/**
 * 后台公共js脚本
 */

jQuery(function() {
	/**
	 * 菜单折叠
	 */
	$(".left-admin-menu dl dt").click(function() {
		if ($(this).parent().hasClass("menu")) {
			$(this).parent().removeClass("menu");
			$(this).parent().addClass("menu_hide");
		} else {
			if ($(this).parent().hasClass("menu_hide")) {
				$(this).parent().removeClass("menu_hide");
				$(this).parent().addClass("menu");
			}
		}
	});
})
