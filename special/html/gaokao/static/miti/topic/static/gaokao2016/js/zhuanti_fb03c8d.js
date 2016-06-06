function ZhuanTi() {}
var ani = function() {
    if (navigator.userAgent.indexOf("MSIE 8.0") > 0)
        return 1;
    var e = function(e, o) {
            var a = RegExp("[&|?]" + e + "=(" + (o ? "\\d+" : ".[^&]*") + ")");
            return location.search.match(a)
        }
        ;
    return e("ani") && e("ani").length > 1 ? e("ani")[1] : void 0
}();
ZhuanTi.prototype = {
    init: function() {
        $(".hov1, .hov2, .hov3, .hov4").on("mouseover", function() {
            var e = $(this)
                , o = $("." + e.data("class"), e.parent().parent());
            /disabled/g.test(o.attr("class")) || $("." + e.data("class"), e.parent().parent()).addClass("tap")
        }),
            $(".hov1, .hov2, .hov3, .hov4").on("mouseout", function() {
                var e = $(this);
                $("." + e.data("class"), e.parent().parent()).removeClass("tap")
            });
        var e = $.superscrollorama();
        1 == ani ? ($("body").css("display", "none"),
            $(".paper1, .paper2, .paper3, .paper4, .paper5").css("display", "none")) : setTimeout(function() {
            (new TimelineLite).append([TweenMax.to($(".head"), 1.5, {
                scale: 1,
                opacity: 1,
                ease: Expo.easeOut
            }), TweenMax.to($(".paper1"), .3, {
                css: {
                    x: 100,
                    y: -70,
                    opacity: 1
                },
                ease: Back.easeOut
            }), TweenMax.to($(".paper2"), .3, {
                css: {
                    x: -58,
                    y: 50,
                    opacity: 1
                },
                ease: Back.easeOut
            }), TweenMax.to($(".paper3"), .3, {
                css: {
                    x: -87,
                    y: -100,
                    opacity: 1
                },
                ease: Back.easeOut
            })])
        }, 200),
            e.addTween($(".hov1", ".floor1"), (new TimelineLite).append([TweenMax.to($(".part1", ".floor1"), 1, {
                transform: "translate(0, 0)",
                ease: Expo.easeOut
            }), TweenMax.to($(".part1-con", ".con-f1"), 1, {
                opacity: 1,
                ease: Expo.easeOut
            }), TweenMax.to($(".part2", ".floor1"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            }), TweenMax.to($(".people-f1"), 1, {
                css: {
                    transform: "translate(0, 0)"
                }
            })]), 700, -100, !0),
            e.addTween($(".hov3", ".floor1"), (new TimelineLite).append([TweenMax.to($(".part3", ".floor1"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            }), TweenMax.to($(".part4", ".floor1"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            })]), 700, -100, !0),
            e.addTween($(".hov1", ".floor2"), (new TimelineLite).append([TweenMax.to($(".people-f2"), 1, {
                css: {
                    transform: "translate(0, 0)"
                }
            }), TweenMax.to($(".part1", ".floor2"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            }), TweenMax.to($(".part2", ".floor2"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            })]), 700, -100, !0),
            e.addTween($(".hov3", ".floor2"), (new TimelineLite).append([TweenMax.to($(".part3", ".floor2"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            }), TweenMax.to($(".part4", ".floor2"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            })]), 700, -100, !0),
            e.addTween($(".hov1", ".floor3"), (new TimelineLite).append([TweenMax.to($(".people-f3"), 1, {
                css: {
                    transform: "translate(0, 0)"
                }
            }), TweenMax.to($(".part1", ".floor3"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            }), TweenMax.to($(".part2", ".floor3"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            })]), 700, -100, !0),
            e.addTween($(".hov3", ".floor3"), (new TimelineLite).append(TweenMax.to($(".part3", ".floor3"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            })), 700, -100, !0),
            e.addTween($(".hov1", ".floor4"), (new TimelineLite).append([TweenMax.to($(".people-f4"), 1, {
                css: {
                    transform: "translate(0, 0)"
                }
            }), TweenMax.to($(".part1", ".floor4"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            })]), 700, -100, !0),
            e.addTween($(".hov3", ".floor4"), (new TimelineLite).append([TweenMax.to($(".part3", ".floor4"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            }), TweenMax.to($(".erweima", ".floor4"), 1, {
                css: {
                    right: -70,
                    top: 435,
                    transform: "scale(1)"
                },
                ease: Expo.easeOut
            })]), 700, -100, !0),
            e.addTween($(".hov2", ".floor4"), (new TimelineLite).append([TweenMax.to($(".part2", ".floor4"), 1, {
                css: {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                ease: Expo.easeOut
            })]), 700, -100)
    }
},
    $(document).ready(function() {
        (new Image).src = "static/miti/topic/static/gaokao2016/images/box-1_85bd367.gif",
            (new Image).src = "static/miti/topic/static/gaokao2016/images/box-2_4a44eab.gif",
            (new Image).src = "static/miti/topic/static/gaokao2016/images/box-3_a84c1ba.gif",
            (new Image).src = "static/miti/topic/static/gaokao2016/images/box-4_58c85c1.gif";
        var e = parseInt((new Date("2016-06-07") - new Date) / 864e5)
            , o = $(".banner")
            , a = $(".content-wp")
            , t = document.documentElement.clientHeight
            , s = document.documentElement.clientWidth
            , n = new ZhuanTi
            , i = -800 - .4 * parseInt(o.css("padding-top"))
            , r = $(".box1", ".school")
            , c = $(".box2", ".school")
            , p = $(".box3", ".school")
            , l = $(".box4", ".school")
            , f = $(".box1, .box2, .box3, .box4", ".school")
            , d = $(".head")
            , m = $(".people")
            , w = $(".container")
            , x = $("body");
        1 == ani && w.css({
            display: "block"
        });
        var T = w.height();
        setTimeout(function() {
            1 != ani && (w.css({
                height: t,
                display: "block"
            }),
                window.scrollTo(0, 0))
        }, 0),
            $("#box1").on("click", function() {
                $(window).scrollTop($(".floor1").offset().top)
            }),
            $("#box2").on("click", function() {
                $(window).scrollTop($(".floor2").offset().top)
            }),
            $("#box3").on("click", function() {
                $(window).scrollTop($(".floor3").offset().top)
            }),
            $("#box4").on("click", function() {
                $(window).scrollTop($(".floor4").offset().top)
            }),
            $("#gotop").on("click", function() {
                $(window).scrollTop(0)
            });
        var u = 92 * window.timelineLen - 20;
        navigator.userAgent.indexOf("MSIE") >= 0 && navigator.userAgent.indexOf("Opera") < 0 && (e = parseInt((new Date("06-07-2016 00:00:00") - new Date) / 864e5)),
            $(".num", ".daojishi").text(Number(e + 1)),
        13 != window.timelineLen && $(".now").css("width", u),
        1357 > s && $(".school-inner, .tree", ".school").css({
            width: s,
            "margin-left": -(s / 2)
        }),
            n.init(),
            1 == ani ? (navigator.userAgent.indexOf("MSIE 8.0") > 0 ? ($(".t-banner", ".head").css("margin-top", 30).addClass("small-banner"),
                $(".title", ".head").css("margin-top", -5).addClass("small-title"),
                d.css({
                    "margin-top": 800
                })) : d.css({
                transform: "scale(0.74)",
                "margin-top": 800,
                opacity: 1
            }),
                $(".school-inner").css({
                    opacity: 1,
                    "margin-top": 50
                }),
                $(".daojishi").css("opacity", 1),
                m.css({
                    opacity: 1,
                    "margin-top": -310
                }),
                r.css({
                    left: 143,
                    bottom: -311,
                    opacity: 1
                }),
                c.css({
                    left: 379,
                    bottom: -311,
                    opacity: 1
                }),
                p.css({
                    left: 628,
                    bottom: -311,
                    opacity: 1
                }),
                l.css({
                    left: 863,
                    bottom: -311,
                    opacity: 1
                }),
                $(".container").css({
                    top: i
                }),
                setTimeout(function() {
                    x.css("display", "block")
                }, 40),
                a.css({
                    height: T + i + 486,
                    overflow: "inherit"
                }),
                w.css({
                    height: T + i + 486
                }),
                x.niceScroll({
                    scrollspeed: 100,
                    mousescrollstep: 60,
                    smoothscroll: !0,
                    horizrailenabled: !1
                })) : setTimeout(function() {
                if (w.animate({
                        top: i
                    }, 2500),
                        setTimeout(function() {
                            a.css({
                                height: T + i + 486,
                                overflow: "inherit"
                            }),
                                w.css({
                                    height: T + i + 486
                                })
                        }, 2500),
                        setTimeout(function() {
                            (new TimelineLite).append([TweenMax.to(d, 2, {
                                y: 600,
                                scale: .74
                            }), TweenMax.to($(".paper1"), 1, {
                                x: -100,
                                y: -50
                            }), TweenMax.to($(".paper2"), 1, {
                                x: 200,
                                y: -50
                            }), TweenMax.to($(".paper3"), 1, {
                                x: 550,
                                y: 500
                            }), TweenMax.to($(".paper4"), 1, {
                                x: -350,
                                y: 80
                            }), TweenMax.to($(".paper5"), 1, {
                                x: 300,
                                y: 100
                            }), TweenMax.to($(".paper1-con, .paper2-con, .paper3-con, .paper4-con, .paper5-con"), 1, {
                                opacity: .4
                            }), TweenMax.to($(".school-inner"), 2, {
                                x: 0,
                                y: 50,
                                opacity: 1
                            }), TweenMax.to($(".daojishi"), 2, {
                                opacity: 1
                            }), TweenMax.to($(".people"), 2, {
                                x: 0,
                                y: -310,
                                opacity: 1
                            })])
                        }, 600),
                    t >= 850)
                    f.css({
                        display: "none"
                    }),
                        setTimeout(function() {
                            f.css({
                                display: "block"
                            }),
                                (new TimelineLite).append([TweenMax.to($(".box1", ".school"), 1.5, {
                                    delay: .2 * Math.random(),
                                    left: 143,
                                    bottom: -311,
                                    opacity: 1,
                                    ease: Expo.easeOut
                                }), TweenMax.to($(".box2", ".school"), 1.5, {
                                    delay: .2 * Math.random(),
                                    left: 379,
                                    bottom: -311,
                                    opacity: 1,
                                    ease: Expo.easeOut
                                }), TweenMax.to($(".box3", ".school"), 1.5, {
                                    delay: .2 * Math.random(),
                                    left: 628,
                                    bottom: -311,
                                    opacity: 1,
                                    ease: Expo.easeOut
                                }), TweenMax.to($(".box4", ".school"), 1.5, {
                                    delay: .2 * Math.random(),
                                    left: 863,
                                    bottom: -311,
                                    opacity: 1,
                                    ease: Expo.easeOut
                                })])
                        }, 2500);
                else {
                    var e = $(".tree", ".school").offset().top - 250 + i;
                    f.css({
                        transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        display: "none"
                    }),
                        $(window).scroll(function() {
                            ($(window).scrollTop() >= e || $("html").scrollTop() >= e) && (f.css({
                                display: "block"
                            }),
                                setTimeout(function() {
                                    r.css({
                                        left: 143,
                                        bottom: -311,
                                        opacity: 1
                                    }),
                                        c.css({
                                            left: 379,
                                            bottom: -311,
                                            opacity: 1
                                        }),
                                        p.css({
                                            left: 628,
                                            bottom: -311,
                                            opacity: 1
                                        }),
                                        l.css({
                                            left: 863,
                                            bottom: -311,
                                            opacity: 1
                                        })
                                }, 50))
                        })
                }
                setTimeout(function() {
                    x.niceScroll({
                        scrollspeed: 100,
                        mousescrollstep: 60,
                        smoothscroll: !0,
                        horizrailenabled: !1
                    }),
                        $(".paper1, .paper2, .paper3, .paper4, .paper5").css("display", "none")
                }, 3e3)
            }, 1300),
            $(window).scroll(function() {
                ($(window).scrollTop() >= i + 1700 || $("html").scrollTop() >= i + 1700) && $(".sidebar").css({
                    display: "block",
                    opacity: 1
                })
            })
    });
