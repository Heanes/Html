/*/
/*
/* Rank: 1
/* main initial
/* rely jquery1.8.3 & mainjs
/*
/*/

/* name space */
    var pageForm = pf = window.pageForm || {};

    // Form的显示器，即创建一个默认隐藏的表单
    pf.FromDisplay = function (Form_Conf, submitData_conf) {
        this.id = Form_Conf.id;
        this.Form_Conf = Form_Conf;
        this.submit_Conf = submitData_conf;
        var _method = Form_Conf.method ? Form_Conf.method : 'get',
            _isDisplay = 'none', _parent = 'body';

        $(_parent).append('<form id="'
            + Form_Conf.id + '" action="'
            + Form_Conf.url + '" method="'
            + _method + '" style="display:'
            + _isDisplay + ';"></form>');
    };
    pf.FromDisplay.prototype.initial = function () {
        for (var item in this.submit_Conf) {
            $("#" + this.id).append('<input type="text" name="'
                + item + '" value="" />');
        }
    };

    pf.iniObject = function (formDisplay,fn) {
        this.debug = false;
        this.display = formDisplay;
        this.form_conf = this.display.Form_Conf;
        this.submit_conf = this.display.submit_Conf;
        this.dataSelect_ClassN = "fix";
        
        this.fn = fn ? fn : function () { throw new Error("I am Form ini method , Error Code:0311945")};
    };

    // through closure
    pf.iniObject.prototype = (function () {
        
        return {
            // modify form data
            redrawForm: function () {
                this.modifi_Submit_Conf();
                var submitConf = this.submit_conf;
                var fC = this.form_conf;
                $("#" + fC.id).find("input").each(function () {
                    var key = $(this).attr("name");
                    $(this).attr("value",submitConf[key]);
                });
            },

            // bind dom event
            attackEvent: function (break_method) {
                var fC = this.form_conf;
                var that = this;
                var isSubmit = true;

                for (var item in fC.submit_id) {
                    $("#" + fC.submit_id[item]).click(function () {
                        if (break_method)
                            isSubmit = break_method();
                        if (isSubmit) {
                            that.redrawForm();
                            $("#" + fC.id).submit();
                        }
                    })
                }
            },

            // 初始化
            initial: function () {
                var fC = this.form_conf;
                this.attackEvent(fC.break_method);
                this.modifi_Submit_Conf = this.fn;
            }
        };
    })();

/* name space */
    var Animation = window.Animation || {};
    Animation.CofArray = [".left-section .block1", ".left-section .block2", ".right-section"];

    // default animation method
    // JqName : Jquery class name
    // 顶级HTML元素渐显的对象
    Animation.masterEle_FadeIn = function (ConfArray_JqName) {
        this.EleArray = ConfArray_JqName;
    };
    // through closure
    // chain of prototype
    Animation.masterEle_FadeIn.prototype = (function () {
        var pointer = null;
        return {
            // 渐显动画
            fadein_animaition: function (EleJq) {
                var that = this;
                if (pointer === null) {
                    return;
                }

                $(EleJq).fadeIn(400, "linear", function () {
                    that.fade_Bridge();
                });
            },

            // clear string 'px' and return a float
            strFormat: function (str) {
                return parseFloat(str.replace(/px/g, ''));
            },

            // 探测方法
            probe: function () {
                var arr = this.EleArray;
                for (var item in arr) {
                    var jqName = arr[item];
                    var itemWidth = $(jqName).outerWidth();
                    var itemHeight = $(jqName).outerHeight();
                    var topMargin = this.strFormat($(jqName).css("margin-top"));
                    var leftMargin = this.strFormat($(jqName).css("margin-left"));
                    var rightMargin = this.strFormat($(jqName).css("margin-right"));
                    var bottomMargin = this.strFormat($(jqName).css("margin-bottom"));
                    itemHeight = itemHeight + topMargin + bottomMargin;
                    itemWidth = itemWidth + rightMargin + leftMargin;

                    $(jqName).closest(".rotate-lead ").width(itemWidth).height(itemHeight);
                    $(jqName).hide();
                }
            },

            // 推动队列方法
            advanceQueue: function () {
                var arr = this.EleArray;
                if (arr.length == 0) {
                    pointer = null;
                    return;
                }
                pointer = arr.shift();
            },

            // 渐显的桥接方法
            fade_Bridge: function () {
                this.advanceQueue();
                this.fadein_animaition(pointer);
            },

            // 主初始化方法
            initial: function () {
                var that = this;
                this.probe();
                setTimeout(function () { that.fade_Bridge() }, 300);
            }
        };
    })();

// jquery Fn
    $.regexNum = function (str) {
        return str.replace(/\D/g, "");
    }
    $.regexParseSpecial_Number = function (str) {
        str = $.daixiaoMi.regexStr.double_byte_number.test(str)
            ? $.replace_doubleByte_Number(str) : str;
        str = str.replace(/[^\d\.]*/g, "")
        var reg = /^\.\d+/g;
        var reg2=/\./g;
        if (reg.test(str)) {
            return parseFloat(str.replace(/\./, "0."))
        }
        return parseFloat(str);
        // return str;
    }
    $.replace_doubleByte_Number = function (str) {
        var doubleByte_number_arr = arr = [['１', '1'],
            ['２', '2'], ['３', '3'], ['４', '4'],
            ['５', '5'], ['６', '6'], ['７', '7'],
            ['８', '8'], ['９', '9'], ['０', '0']];
        for (var k in doubleByte_number_arr) {
            str = str.replace(arr[k][0], arr[k][1]);
        }
        return str;
    }

    // 监测整个页面的click事件，如果事件源是数组中的值，那么将不会执行fn方法
    $.documentClick = function (arr, fn) {
        $(document).mousedown(function (e) {
            var target = e.target;
            var end = false;
            for (var i in arr) {
                $(arr[i]).each(function () { if ($(this)[0] == target) { end = true; return false; } })
                if (end) return;
            }
            if (fn) fn();
        })
    }

// daixiaoMi namespace
    $.daixiaoMi = $.daixiaoMi || {};

//  attr
    $.daixiaoMi.color = { green: "#00ff21", red: "#F33101", blue: "#89AADE" };
    $.daixiaoMi.attr = { state: "state" }
    $.daixiaoMi.state = { warning: "warning", normal: "normal" };
    $.daixiaoMi.regexStr = {
        phone: /^\d{11}$/,
        strict_validation_phone: /^(1(([35][0-9])|(47)|[8][0126789]))\d{8}$/,
        mail: /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/,
        qq: /^\d{5,10}$/,
        chinese_Unicode: /[\u2E80-\u9FFF]+/,
        chinese_Name: /^[\u2E80-\u9FFF]{1,5}$/,
        double_byte_number:/[１|２｜３｜４｜５｜６｜７｜８｜９｜０]/
    }

// daixiaoMi Method
    $.daixiaoMi.common_Text_input_bind = function (no_box_shadow, enter_press_fn, val_rollback) {
        var box_shadow = !no_box_shadow ? true : false;
        $("input:text").each(function () {
            var checkType = $(this).attr("data-input-check") ? $(this).attr("data-input-check").trim() : "";

            $(this).keyCode_enter_bind(enter_press_fn);
            if (checkType == "num") {
                $(this).justNumber();
            } else if (checkType == "dci") {
                $(this).justNumber(true);
            } else if (checkType == "text" || !checkType) {
                $(this).input_text_focus(box_shadow).input_text_blur();
            }
            if (checkType == "dci" || checkType == "num") {
                $(this).input_number_focus(box_shadow).input_number_blur(val_rollback);
            }
        })
    }

    $.fn.alone_Text_input_bind = function (no_box_shadow, enter_press_fn, val_rollback) {
        var box_shadow = !no_box_shadow ? true : false;
        $(this).each(function () {
            var checkType = $(this).attr("data-input-check") ? $(this).attr("data-input-check").trim() : "";

            $(this).keyCode_enter_bind(enter_press_fn);
            if (checkType == "num") {
                $(this).justNumber();
            } else if (checkType == "dci") {
                $(this).justNumber(true);
            } else if (checkType == "text" || !checkType) {
                $(this).input_text_focus(box_shadow).input_text_blur();
            }
            if (checkType == "dci" || checkType == "num") {
                $(this).input_number_focus(box_shadow).input_number_blur(val_rollback);
            }
        })
        return $(this);
    }

    $.daixiaoMi.Calculated_Amount = function (arr) {
        // arr: 0:credit, 1:block time, 2:fee rate
        if (!arr) return;
        var credit = arr[0],
            block_time = arr[1],
            fee_rate = arr[2];

        var temp1 = credit * fee_rate + credit / block_time;
        var temp2 = credit * fee_rate * block_time;
        return [temp1, temp2];
    }

    /* -- inner method -- */
    $.daixiaoMi.change_border_color = function (ele, border_color, box_shadow) {
        $(ele).css({ "border-color": border_color});
        if (box_shadow)
            $(ele).css({ "box-shadow": "0 0 6px " + border_color });
    }

    $.daixiaoMi._btn_event_bind = function () {
        $(".btn").each(function () {
            $(this).jumpPage_CommonEle();
        });
    }

    // 复制传入的data，并将复制品返回
    // ! deep copy
    $.daixiaoMi.CopyData = function (param_data, isArray) {
        if (!param_data) return;
        var destination = isArray ? [] : {};
        var getType = function (o) {
            var _t;
            return ((_t = typeof (o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
        };
        for (var p in param_data) {
            if (getType(param_data[p]) == "array" || getType(param_data[p]) == "object") {
                isArray = getType(param_data[p]) == "array" ? true : false;
                destination[p] = arguments.callee(param_data[p], isArray);
            }
            else {
                destination[p] = param_data[p];
            }
        }
        return destination;
    }

    $.fn.jumpPage_CommonEle = function () {
        var link = $(this).attr("data-href");
        var target = $(this).attr("data-target");
        if (link) {
            $(this).click(function (e) {
                if (target) window.open(link);
                else window.location.href = link;
                e.stopPropagation();
            })
        }
        return $(this);
    }

    $.fn.keyCode_enter_bind = function (fn) {
        $(this).keydown(function (e) {
            var enter = 13,
                numLockEnter = 108;
            if (e.keyCode == enter || e.keyCode == numLockEnter) {
                if (typeof fn == "function")
                    fn();
                $(this).blur();
            }
        })
        return $(this);
    }

    $.daixiaoMi.keyCode_tab_G_bind = function (fn) {
        $(window).keydown(function (e) {
            var tab = 9;
            if (e.keyCode == tab) {
                if (typeof fn == "function")
                    fn();
            }
        })
        return $(this);
    }

    $.fn.input_text_autocomplete = function (turn_on) {
        var auto = turn_on ? "on" : "off";
        $(this).attr("autocomplete", auto);
    }

    // 使input元素只能输入数字
    $.fn.justNumber = function (Decimal) {
        $(this).keydown(function (e) {
            var minNum = 48, maxNum = 57,
                del = 46, back = 8,
                tab = 9,
                home = 36, end = 35,
                min2 = 37, max2 = 40,
                minNumLock = 96, maxNumLock = 105;
            var key_a = 65,
                key_v = 86,
                key_c = 67;
            if ((e.keyCode >= minNum && e.keyCode <= maxNum) ||
                (e.keyCode >= minNumLock && e.keyCode <= maxNumLock) ||
                e.keyCode == del || e.keyCode == back ||
                e.keyCode == tab ||
                e.keyCode == home || e.keyCode == end ||
                (e.keyCode >= min2 && e.keyCode <= max2)) {
                return true;
            }
            if (Decimal) {
                if (e.keyCode == 190 || e.keyCode == 110) return true;
            }
            if ((e.keyCode == key_v || e.keyCode == key_c || e.keyCode == key_a) && e.ctrlKey)
                return true;

            return false;
        })
        return $(this);
    }

    $.fn.input_number_blur = function (val_rollback) {
        var rollback = val_rollback != undefined ? val_rollback : true;
        $(this).blur(function () {
            var numZ = $.regexParseSpecial_Number($(this).val());
            $(this).val(numZ);
            if (!rollback) $.daixiaoMi.prevSum = "";
            if (!numZ && numZ != 0) $(this).val($.daixiaoMi.prevSum);
            if ($(this).attr($.daixiaoMi.attr.state) == $.daixiaoMi.state.normal) {
                $(this).removeAttr("style");
            }
        })
        return $(this);
    }

    $.fn.input_number_focus = function (box_shadow) {
        box_shadow = box_shadow ? true : false;
        $(this).focus(function () {
            $.daixiaoMi.prevSum = $(this).val();
            $(this).input_normal(box_shadow);
        })
        return $(this);
    }

    $.fn.input_text_focus = function (box_shadow) {
        box_shadow = box_shadow ? true : false;
        $(this).focus(function () {
            $(this).input_normal(box_shadow);
        })
        return $(this);
    }

    $.fn.input_text_blur = function () {
        $(this).blur(function () {
            if ($(this).attr($.daixiaoMi.attr.state) == $.daixiaoMi.state.normal) {
                $(this).removeAttr("style");
            }
        })
        return $(this);
    }

    // input state change
    $.fn.input_warning = function (box_shadow) {
        $.daixiaoMi.change_border_color(this, $.daixiaoMi.color.red, box_shadow);
        // set sign
        $(this).attr($.daixiaoMi.attr.state, $.daixiaoMi.state.warning);
        return $(this);
    }

    $.fn.input_normal = function (box_shadow) {
        $.daixiaoMi.change_border_color(this, $.daixiaoMi.color.blue, box_shadow);
        $(this).attr($.daixiaoMi.attr.state, $.daixiaoMi.state.normal);
        return $(this);
    }

    $.fn.set_normal_state = function () {
        $(this).attr($.daixiaoMi.attr.state, $.daixiaoMi.state.normal);
        return $(this);
    }
    /* -- E -- */

    // Join Concern Box
    $.daixiaoMi.common_bottom_bar = function () { }
    // The Ajax Api
    $.daixiaoMi.common_bottom_bar.Api_ajax = (function () {
        // 0:success  1:fail
        var _Callback_forAddTo = function (data, info, fn) {
            if (data.ret == 1)    // fail
                return;
            if (data.ret != 0)
                return;
            if (fn)
                fn();
            $.daixiaoMi.common_bottom_bar.Api_add_item(info);
        }
        var _Callback_forDelete = function (data, goods_id, fn) {
            if (data.ret == 1)    // fail
                return;
            if (data.ret != 0)
                return;
            if (fn)
                fn();
            $.daixiaoMi.common_bottom_bar.Api_ajax.after_deleteSucess(goods_id);
        }

        return {
            // Ajax Basic Data will be sent
            basic_Data_forDelete: {},
            basic_Data_forAddTo: {},
            // definition url etc
            conf: {
                type: "json",
                addTo_url: "",
                delete_url: ""
            },
            // 类型为：删除产品的ajax成功后将被作为方法调用
            after_deleteSucess:0,
            // private method/外界不应主动调用此方法
            _sendAjax_delete_Goods: function (key, value, suc_Fn) {
                var basicData = this.basic_Data_forDelete,
                    _data = {};
                for (var i in basicData)
                    _data[i] = basicData[i];
                if ((key && value) ||
                    (key && value == 0))
                    _data[key] = value;
                else if (!_data)
                    throw new Error("An undefined Ajax Data,main custom js, ErrorCode:00201630");

                $.post(this.conf.delete_url, _data, (function (goods_id, fn) {
                    return function (data) {
                        _Callback_forDelete(data, goods_id, fn);
                    }
                })(value, suc_Fn), this.conf.type);
            },

            // info:{title/img/sum/rate/url/name/value}; key——goods name; value——goods code
            sendAjax_add_Goods: function (key, value, info, suc_Fn) {
                var basicData = this.basic_Data_forAddTo,
                    _data = {};
                for (var i in basicData)
                    _data[i] = basicData[i];
                if ((key && value) ||
                    (key && value == 0))
                    _data[key] = value;
                else if (!_data)
                    throw new Error("An undefined Ajax Data,main custom js, ErrorCode:00201176");

                $.post(this.conf.addTo_url, _data, (function (info, fn) {
                    return function (data) {
                        _Callback_forAddTo(data, info, fn);
                    }
                })(info, suc_Fn), this.conf.type);
            }
        };
    })()

    // Join Concern Box prototype chain
    $.daixiaoMi.common_bottom_bar.prototype = (function () {
        var max_goods_num = 5;
        var conf = {
            cart_trigger: {
                className: ".dxmHandle-bar .dxm-apart",
                state: {}
            },
            cart_list: {
                className: ".dxmHandle-bar .dxm-product",
                state: {}
            },
            list_item: {
                className: ".dxm-product .a-goods"
            },
            common: {}
        }

        // 购物车的触发器
        var _cct = conf.cart_trigger,
            _ccl = conf.cart_list,
            _cci = conf.list_item;

        _cct.state["normal_S"] = { "margin-top": "-3px" };
        _cct.state["hover_S"] = { "margin-top": "-12px" };
        _cct.state["nothing_S"] = { "margin-top": "-34px" };

        // 产品的列表
        _ccl.state["normal_S"] = { "margin-top": "-2px" };
        _ccl.state["openUp_F_S"] = function () {
            var item_Height = 76;
            var max = max_goods_num;
            var amount = $(conf.list_item.className).length;
            if (amount > max)
                $(".dxm-product").addClass("scroll");
            else
                $(".dxm-product").removeClass("scroll");
            amount = amount < max ? amount : max;
            if (!amount)
                return 0;
            return -((amount + 1) * item_Height - 22);
        }

        // 购物车的动画
        conf.cart_trigger.hover = function () {
            $(conf.cart_trigger.className).animate(conf.cart_trigger.state.hover_S, 100).find("i").css("display", "block");
        }
        conf.cart_trigger.normal = function () {
            $(conf.cart_trigger.className).animate(conf.cart_trigger.state.normal_S, 100).find("i").hide();
        }
        conf.cart_list.hide_2_openUp = function (endHeight) {
            endHeight = endHeight + "px";
            $(conf.cart_trigger.className).hide().css(conf.cart_trigger.state.normal_S);
            $(conf.cart_list.className).show().stop().animate({ "margin-top": endHeight }, 230);
        }
        conf.cart_list.openUp_2_hide = function () {
            $(conf.cart_list.className).stop().animate(conf.cart_list.state.normal_S, 200, "linear", function () {
                $(this).hide();
            });
            $(conf.cart_trigger.className).show();
        }
        conf.cart_list.hasNothing = function () {
            $(conf.cart_trigger.className).addClass("nothing").animate(conf.cart_trigger.state.nothing_S, 150).show().find("i").show();
            $(conf.cart_list.className).hide().css(conf.cart_list.state.normal_S);
        }
        conf.cart_trigger.nothing_2_normal = function (if_delay) {
            var _time = if_delay ? 150 : 0;
            $(conf.cart_trigger.className).delay(_time)
                .animate(conf.cart_trigger.state.normal_S, 100, function () {
                    $(this).removeClass("nothing").find("i").hide();
                });
        }

        // change button state
        conf.common.change_smallBtn_state = function () {
            if (!$(conf.list_item.className).find("input:checked").length)
                $(".dxm-product .simple-btn").removeClass("fix");
            else
                $(".dxm-product .simple-btn").addClass("fix");
        }
        // change goods total
        conf.common.change_total_Num = function () {
            var len = $(conf.list_item.className).length;
            var i = len ? len : 0;
            $(".dxmHandle-bar .dxm-grace>i").text(i);
        }
        conf.common.change_mainPart_state = function (hover) {
            var len = $(conf.list_item.className).length;
            var i = len || 0;
            var time = hover ? 950 : 0;
            if (i)
                $(".common-bottom-handle").show();
            else
                $(".common-bottom-handle").stop(true).delay(time).animate({ width: 0 }, 100, function () {
                    $(this).hide().removeAttr("style");
                    conf.cart_trigger.nothing_2_normal();
                });
        }


        // 传人delete ajax的方法
        var deleteFn = function ($this) {
            $this.parents(conf.list_item.className).remove();
            var result = conf.cart_list.state.openUp_F_S();
            if (result)
                conf.cart_list.hide_2_openUp(result);
            else
                conf.cart_list.hasNothing();
            conf.common.change_total_Num();
            conf.common.change_smallBtn_state();
            conf.common.change_mainPart_state(true);

        }

        // 每个产品bind event
        conf.list_item.E_bind = function ($Jq) {
            $Jq.mouseenter(function () {
                $(this).addClass("fix");
            }).mouseleave(function () {
                $(this).removeClass("fix");
            }).click(function () {
                $(this).find("input:checkbox").click();
            }).find(".g-close").click(function (e) {
                $(this).hide().siblings(".load").show();
                var key = "id",
                    value = $(this).parents(conf.list_item.className).find("input:checkbox").attr("value");
                $.daixiaoMi.common_bottom_bar.Api_ajax._sendAjax_delete_Goods(key, value, (function ($this) {
                    return function () {
                        deleteFn($this);
                    }
                })($(this)));
                e.stopPropagation();
            })

            $Jq.find("input:checkbox").change(function () {
                conf.common.change_smallBtn_state();
            }).click(function (e) {
                e.stopPropagation();
            })

            if ($(".dxm-product .control input:checked").length)
                $Jq.find("input:checkbox").attr("checked", "checked");
            else
                $Jq.find("input:checkbox").removeAttr("checked");

            $Jq.find("a").click(function (e) {
                e.stopPropagation();
            })
        }

        var E_bind_common_event = function () {
            conf.list_item.E_bind($(conf.list_item.className));
            // 
            // selected all
            $(".dxm-product .control").find("input:checkbox").click(function () {
                if ($(this).is(":checked")) {
                    $(conf.list_item.className).find("input:checkbox").attr("checked", "checked");
                } else {
                    $(conf.list_item.className).find("input:checkbox").removeAttr("checked");
                }
                conf.common.change_smallBtn_state();
            })
                .attr("checked", "checked");
            $(conf.list_item.className).find("input:checkbox").attr("checked", "checked");
            conf.common.change_smallBtn_state();

            // Apply 2 all
            $(".dxm-product .simple-btn").click(function () {
                var url = $(this).attr("data-href-special") + "?";
                var selected = $(conf.list_item.className).find("input:checkbox:checked").each(function (i) {
                    var value = $(this).val();
                    var name = $(this).attr("name");
                    if (i)
                        url += "&" + name + "=" + value;
                    else
                        url += name + "=" + value;
                }).length;
                if (selected)
                    window.location.href = url;
            })
            // profile link
            $(".dxm-grace .sil-er").jumpPage_CommonEle().mousedown(function (e) {
                e.stopPropagation();
            });
            // init num
            conf.common.change_total_Num();
            conf.common.change_mainPart_state();
        }

        var E_bind_cart_tigger = function () {
            $(".common-bottom-handle .dxmHandle-bar")
                .mouseenter(conf.cart_trigger.hover)
                .mouseleave(function () {
                    if ($(conf.cart_trigger.className).hasClass("nothing"))
                        conf.cart_trigger.nothing_2_normal(true);
                    else
                        conf.cart_trigger.normal();
                })
                .click(function () {
                    var result = conf.cart_list.state.openUp_F_S();
                    if (!result) {
                        conf.cart_list.hasNothing();
                        return;
                    }
                    if ($(conf.cart_trigger.className).is(":visible")) {
                        conf.cart_list.hide_2_openUp(result);
                    }
                })

            $(".common-bottom-handle .dxm-grace").click(function (e) {
                if (!$(conf.cart_trigger.className).is(":visible") &&
                    !$(conf.cart_trigger.className).hasClass("nothing")) {
                    conf.cart_list.openUp_2_hide();
                    e.stopPropagation();
                }
                    // 清单无商品
                else if ($(conf.cart_trigger.className).hasClass("nothing")) {
                    conf.cart_trigger.nothing_2_normal();
                    e.stopPropagation();
                }
            })
        }

        var waste_documentClick = function () {
            var arr = [
                ".common-bottom-handle .dxmHandle-bar",
                ".common-bottom-handle input",
                ".common-bottom-handle .dxmHandle-bar .dxm-grace",
                ".dxmHandle-bar .dxm-grace i",
                ".dxmHandle-bar .dxm-apart",
                ".dxmHandle-bar .dxm-apart i",
                ".dxmHandle-bar .dxm-product",
                ".dxmHandle-bar .dxm-product ul",
                ".dxmHandle-bar .dxm-product i",
                ".dxmHandle-bar .dxm-product img",
                ".dxmHandle-bar .dxm-product a",
                ".dxmHandle-bar .dxm-product label",
                ".dxmHandle-bar .dxm-product li",
                ".dxmHandle-bar .dxm-product div",
                ".dxmHandle-bar .dxm-product p",
                ".dxmHandle-bar .dxm-product .btn",
                ".mainList .info-block4 i"
            ];
            $.documentClick(arr, function () {
                if (!$(conf.cart_trigger.className).is(":visible") &&
                    !$(conf.cart_trigger.className).hasClass("nothing")) {
                    conf.cart_list.openUp_2_hide();
                }
                // 清单无商品
                else if ($(conf.cart_trigger.className).hasClass("nothing"))
                    conf.cart_trigger.nothing_2_normal();
            });
        }

        // static method
        $.daixiaoMi.common_bottom_bar.Api_add_item = function (info) {
            if (!info)
                throw new Error("goods parameter undefined ,main custom js, ErrorCode:03800912");
            var title    = info.title || "",
                img      = info.img || "",
                sum      = info.sum || "0",
                rate     = info.rate || "0",
                item_url = info.url || "",
                name     = info.name || "id",
                value    = info.value || "";
            var result;

            var casepoint = sum != 0 ? '<p><i class="colorful">月供' + sum + '元</i> · 月费率' + rate + '%</p>' : '<p>月费率面议</p>';

            var $itemStr = $('<li class="a-goods">' +
                    '<div class="tool">' +
                        '<input type="checkbox" name="' + name + '" value="' + value + '"/>' +
                    '</div>' +
                    '<div class="por-head">' +
                        '<a href="' + item_url + '"><img src="' + img + '"/></a>' +
                    '</div>' +
                    '<div class="info-block">' +
                        '<div class="title"><a target="_blank" href="' + item_url + '">' + title + '</a></div>' +
                         casepoint +
                        '<div class="g-close">×</div>' +
                        '<div class="load"></div>' +
                    '</div></li>');

            conf.list_item.E_bind($itemStr);
            $(".common-bottom-handle .dxm-product > ul").prepend($itemStr);
            conf.common.change_smallBtn_state();
            conf.common.change_total_Num();
            conf.common.change_mainPart_state();

            result = conf.cart_list.state.openUp_F_S();
            if ($(conf.cart_list.className).is(":visible") && result) conf.cart_list.hide_2_openUp(result);
        }
        return {
            attckEvent: function () {
                E_bind_cart_tigger();
                E_bind_common_event();
                waste_documentClick();
            },

            initial: function () {
                this.attckEvent();
            }
        }
    })();

    $.daixiaoMi._city_window = function () {
        (function () {
            var $trigger = $(".header .city span"),
                $windows = $(".city .windows");

            if (!$windows.length) return;
            var show_hander,
                hide_hander;
            $trigger.mouseenter(function () {
                clearTimeout(hide_hander);
                show_hander = setTimeout(function () {
                    $windows.show();
                }, 120);
            }).mouseleave(function () {
                clearTimeout(show_hander);
                hide_hander = setTimeout(function () {
                    $windows.hide();
                }, 400);
            });
            $windows.mouseenter(function () {
                clearTimeout(hide_hander);
            }).mouseleave(function () {
                hide_hander = setTimeout(function () {
                    $windows.hide();
                }, 200);
            }).find(".disable a").click(function () {
                return false;
            })
        })();
    }

    $.daixiaoMi.input_cursor_automation = function () {
        (function () {
            var m = false;
            $("input:text").focusin(function () {
                if (!m)
                    $(this).select();
                else {
                    var _val = $(this).val();
                    $(this).val("").val(_val)
                }
                m = true;
            }).focusout(function () {
                var _val = $(this).val();
                $(this).val("").val(_val);
            })
        })()
    }

    // prevent error click
    $.daixiaoMi.prevent_Error_Click = function ($this, time) {
        if ($this.hasClass("js-wait"))
            return true;
        else {
            $this.addClass("js-wait");
            setTimeout((function ($this) {
                return function () {
                    $this.removeClass("js-wait");
                }
            })($this), time || 600);
            return false;
        }
    }

    $.daixiaoMi.navigator = function () { };
    $.daixiaoMi.navigator.isIE8 = (function () {
        var appname = navigator.appName,
            reg = /Microsoft/;
        var version = parseInt(navigator.appVersion);
        if (reg.test(appname))
            if (version < 5)
                return true;
        return false;
    })();

    // is IE6
    $.daixiaoMi.navigator.isIE_low_version = (function () {
        var appname = navigator.appName,
            reg = /Microsoft/,
            reg_kernel = /Trident/;
        var version = parseInt(navigator.appVersion),
            appVersion = navigator.appVersion;

        if (reg.test(appname))
            if (version < 5 && !reg_kernel.test(appVersion))
                return true;
        return false;
    })();

    // is IE
    $.daixiaoMi.navigator.is_IE = (function () {
        var version = navigator.appVersion,
            reg = /Trident/;
        if (reg.test(version))
            return true;
        return false;
    })();

    $.daixiaoMi.navigator.IE_css = function (url) {
        var url = url;
        if ($.daixiaoMi.navigator.is_IE)
            document.write('<link href="' + url + '" rel="stylesheet' + '" />');
    }

    $.daixiaoMi.navigator.IE8_css = function (url) {
        var url = url;
        if ($.daixiaoMi.navigator.isIE8)
            document.write('<link href="' + url + '" rel="stylesheet' + '" />');
    }

    $.daixiaoMi.navigator.IE8_fn = function (fn) {
        if ($.daixiaoMi.navigator.isIE8 && fn)
            $(function () {
                fn();
            });
    }

    $.daixiaoMi.navigator.IE6_css = function (url) {
        var url = url;
        if ($.daixiaoMi.navigator.isIE_low_version)
            document.write('<link href="' + url + '" rel="stylesheet' + '" />');
    }

    $.daixiaoMi.navigator.IE6_fn = function (fn) {
        if ($.daixiaoMi.navigator.isIE_low_version && fn)
            $(function () {
                fn();
            });
    }

    $.daixiaoMi.navigator.IE_low_version_Support = function (hide_this) {
        if (hide_this) {
            $(".ns-iemain").hide();
        } else if ($.daixiaoMi.navigator.isIE_low_version)
            (function () {
                var $node = $('<div class="ns-iemain">' +
                    '<h2>您的浏览器版本非常的低，这对您的数据安全，网络传输，网站功能的使用将造成极大地影响。</h2>' +
                    '<h2>贷小秘网站会涉及到您的个人隐私。为了安全，我们已经停止了对低版本浏览器的适配。</h2>' +
                    '<h4>您可以使用但不仅限于以下浏览器访问我们：</h4>' +
                    '<ul>' +
                        '<li><a href="http://www.firefox.com.cn"><img src="/static/image/homesite/cssimage/ns-firefox.png" /></a></li>' +
                        '<li><a href="http://http://ie.sogou.com"><img src="/static/image/homesite/cssimage/ns-sougou.png" /></a></li>' +
                        '<li><a href="http://www.google.cn/intl/zh-CN/chrome/browser/"><img src="/static/image/homesite/cssimage/ns-chrome.png" /></a></li>' +
                    '</ul>' +
                    '<div class="g-close" title="关闭">×</div>' + '</div>');
                $node.find(".g-close").click(function () {
                    $("body").removeClass("ns-iedebug"); $node.hide();
                });
                if ($.daixiaoMi.navigator.isIE_low_version)
                    $("body").addClass("ns-iedebug").prepend($node);
            })();
    }

    $.daixiaoMi.googleAnalytics_Ini = function () {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    }

    // main initial
    $(function () {
        $.daixiaoMi.navigator.IE_low_version_Support();
        $.daixiaoMi._btn_event_bind();
        // global google initialization
        $.daixiaoMi.googleAnalytics_Ini();

        // $.daixiaoMi._city_window();
        ga('create', 'UA-46277144-1', 'auto', { 'allowLinker': true });
        ga('require', 'linker');
        ga('linker:autoLink', ['daixiaomi.com', 'daixiaomi.cn', 'daixiaomi.net']);
        ga('send', 'pageview');
    });