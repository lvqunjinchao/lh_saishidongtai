$(document).ready(function() {
    // 注意： 轮播图不能判断， 要单独拿出来，因为这是通用的属性
    // 公共轮播图
    // 导航栏下面的轮播图
    var bannerSlider = $(".js_banner").oSlider({
        loop: true,
        pager: ".js_pager",
        pagerHover: false,
        // speed: 3000,
        startFn: function() {
            // console.log("1");
        },
        playFn: function() {
            // console.log("1");
        }
    });
    bannerSlider.init();
    // 轮播图箭头
    $('.btn_prev').html('<i class="iconfont">&#xe6a5;</i>');
    $('.btn_next').html('<i class="iconfont">&#xe6a3;</i>');

    // 注意：o_picture一定需要放在read里面
    // 响应式图片自己下载 start 头部下面第一个轮播第一张图片更换
    $(".o_picture").each(function() {
        $(this).oPicture({
            //自定义节点宽度
        }).init();
    });
    // 响应式图片自己下载 end


    //禁止滚动条滚动
    function unScroll() {
        var top = $(document).scrollTop();
        $(document).on('scroll.unable', function(e) {
            $(document).scrollTop(top);
        })
    };
    //移除禁止滚动条滚动
    function removeUnScroll() {
        $(document).unbind("scroll.unable");
    };

    // 点击模拟登录 start pc
    // 声明一个变量，记录是否登录
    var logintrue = false;
    $('.header').on('click', '.js_denglu', function() {
        $this = $(this);
        $this.parents('.pcduan').addClass('displaynone');
        $this.parents('.pcduan').siblings('.js_login_success').removeClass('displaynone');
        logintrue = true;
    });
    // 点击模拟登录 end

    // 点击模拟退出 start
    $('.header').on('click', '.tuichu', function() {
        $this = $(this);
        $this.parents('.js_login_success').addClass('displaynone');
        $this.parents('.js_login_success').siblings('.pcduan').removeClass('displaynone');
        logintrue = false;

    });
    // 点击模拟退出 end

    //延迟加载视频 start
    setTimeout(function() {
        $(".o_video").each(function() {
            $(this).oVideo().init();
        });
    }, 2000);
    //延迟加载视频 end

    var page = 1;
    var page2 = 1;
    var page3 = 1;
    // 调取主页ajax封装成函数 start
    function zhuye_ajax() {
        $.ajax({
            // ajax一般不使用同步，因为会出问题，当数据大量的时候，可免会非常卡顿
            // async: false,
            url: "../images/xinwensaishi.json", //json文件位置,必须从images开始写
            type: "GET", //请求方式为get
            dataType: "json", //返回数据格式为json
            success: function(data) { //请求成功完成后要执行的方法 
                // console.log(data);
                ++page;
                var html = '';
                $.each(data.xinwensaishi, function(index, item) {
                    // 注意！select值(value)就等于选中option的值，可以找到category_id直接赋值就行，不用转换了
                    // console.log(data.xinwensaishi);
                    html += `<div class="item o_df_1-1">
                        <div class="left o_u">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="right o_u">
                            <div class="label">
                            ${item.label}
                            </div>
                            <div class="saishi">
                            ${item.saishi}
                            </div>
                            <div class="xiangqing">
                            ${item.xiangqing}
                            </div>
                            <div class="time">
                            ${item.time}
                            </div>
                        </div>
                    </div>`
                });
                // html方法会把无弄没有，所以用append来添加，无是默认的
                $('.js_saishixinwen .list').append(html);
            }
        })
    }

    zhuye_ajax();
    // 调取主页ajax封装成函数 end

    // 调取分页1ajax封装成函数 start
    function fenye1_ajax() {
        $.ajax({
            // ajax一般不使用同步，因为会出问题，当数据大量的时候，可免会非常卡顿
            // async: false,
            url: "../images/fenye1.json", //json文件位置,必须从images开始写
            type: "GET", //请求方式为get
            dataType: "json", //返回数据格式为json
            success: function(data) { //请求成功完成后要执行的方法 
                // console.log(data);
                ++page2;
                var html2 = '';
                $.each(data.fenye1, function(index, item) {
                    // 注意！select值(value)就等于选中option的值，可以找到category_id直接赋值就行，不用转换了
                    // console.log(data.xinwensaishi);
                    html2 += `<div class="item o_u o_df_1-2">
                    <div class="item_content">
                    <div class="video_box">
                        <video src="" class="o_video" controls>
                            <source df="${item.df}" md="${item.md}" xs="${item.xs}"
                                dfpic="${item.dfpic}" xspic="${item.xspic}"
                                type="video/mp4">
                        </video>
                        <div class="bofang">
                            <span class="iconfont">&#xe642;</span>
                        </div>
                    </div>
                    <p class="video_name">
                    ${item.video_name}
                    </p>
                    <div class="time">
                    ${item.time}
                    </div>
                    </div>
                </div>`
                });
                // html方法会把无弄没有，所以用append来添加，无是默认的
                $('.dasaishipin .list').append(html2);
            }
        })
    }

    fenye1_ajax();
    // 调取分页1ajax封装成函数 end

    // 调取分页2ajax封装成函数 start
    function fenye2_ajax() {
        $.ajax({
            // ajax一般不使用同步，因为会出问题，当数据大量的时候，可免会非常卡顿
            // async: false,
            url: "../images/xinwensaishi.json", //json文件位置,必须从images开始写
            type: "GET", //请求方式为get
            dataType: "json", //返回数据格式为json
            success: function(data) { //请求成功完成后要执行的方法 
                // console.log(data);
                ++page3;
                var html3 = '';
                $.each(data.xinwensaishi, function(index, item) {
                    // 注意！select值(value)就等于选中option的值，可以找到category_id直接赋值就行，不用转换了
                    // console.log(data.xinwensaishi);
                    html3 += `<div class="item o_df_1-1">
                            <div class="left o_u">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="right o_u">
                                <div class="label">
                                ${item.label}
                                </div>
                                <div class="saishi">
                                ${item.saishi}
                                </div>
                                <div class="xiangqing">
                                ${item.xiangqing}
                                </div>
                                <div class="time">
                                ${item.time}
                                </div>
                            </div>
                        </div>`
                });
                // html方法会把无弄没有，所以用append来添加，无是默认的
                $('.fenye2_main .list').append(html3);
            }
        })
    }

    fenye2_ajax();
    // 调取分页2ajax封装成函数 end

    // 点击加载更多 start 主页
    $('.js_loadmore').on('click', function() {
        if (page <= 3) {
            zhuye_ajax();
            if (page == 3) {
                setTimeout(function() {
                    $('.js_loadmore').text('暂无数据');
                }, 800);
            }
        }
    });
    // 点击加载更多 end

    // 点击加载更多 start 分页1
    $('.js_loadmore2').on('click', function() {
        if (page2 <= 3) {
            fenye1_ajax();
            if (page2 == 3) {
                setTimeout(function() {
                    $('.js_loadmore2').text('暂无数据');
                }, 800);
            }
        }
    });
    // 点击加载更多 end

    // 点击加载更多 start 分页2
    $('.js_loadmore3').on('click', function() {
        if (page3 <= 3) {
            fenye2_ajax();
            if (page3 == 3) {
                setTimeout(function() {
                    $('.js_loadmore3').text('暂无数据');
                }, 800);
            }
        }
    });
    // 点击加载更多 end

    // 其他选项卡加载更多 start
    $('.saishixinwen').on('click', '.tab_bar', function() {
        var $this = $(this);
        $('.js_loadmore').text('加载更多');
        $this.addClass('color_005AAA');
        $this.siblings('.tab_bar').removeClass('color_005AAA');
        $this.siblings('.tab_bar').find('.xiahuaxian').addClass('displaynone');
        $this.find('.xiahuaxian').removeClass('displaynone');
        $this.parents('.table_box').siblings('.list').empty();
        page = 1;
        zhuye_ajax();
    });
    // 其他选项卡加载更多 end


    // 主页点击出现弹窗
    $('.saishixinwen .list').on('click', '.item', function() {
        var $this = $(this);
        unScroll();
        var $popup = $('.popup');
        $popup.removeClass('displaynone');
        $popup.siblings('.js_popup_all').removeClass('displaynone');
        // $('body').css({ overflow: 'hidden', height: "100%" });
    });
    // 主页点击关闭弹窗
    $('.popup').on('click', '.js_close_popup', function() {
        var $this = $(this);
        removeUnScroll();
        $this.parents('.popup').addClass('displaynone');
        $this.parents('.popup').siblings('.js_popup_all').addClass('displaynone');
        // $('body').css('overflow', 'auto');
    });




    // 判断屏幕尺寸
    var width = $(window).width();
    var height = $(window).height();
    console.log(width);
    console.log(height);
    if (width > 1200) {
        // 尾部二维码
        $('.js_weichat').on('mouseenter', function() {
            var $this = $(this);
            $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').removeClass('displaynone');
        });
        $('.js_weichat').on('mouseleave', function() {
            var $this = $(this);
            $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').addClass('displaynone');
        });


    } else if (width < 1200) {
        // width<750
        if (width <= 750) {

            // 手机端回到顶部 start
            $('.goback').removeClass('displaynone');
            $('.goback').on('click', function() {
                $("html,body").animate({ scrollTop: 0 }, 500);
            });
            // 手机端回到顶部 end

            // 大咖分享弹窗 start
            // 打开
            $('.daka .content .img_box').on('click', 'img', function() {
                var $this = $(this);
                unScroll();
                var $daka_share = $('.daka_share');
                $daka_share.removeClass('displaynone');
                $daka_share.siblings('.daka_zhezhao').removeClass('displaynone');

                var topjuli = ($('.daka_share').height()) * 0.5;
                topjuli = topjuli + 15;
                $('.daka_share').css('marginTop', -topjuli);

                // $('body').css({ overflow: 'hidden', height: "100%" });
            });
            // 关闭
            $('.daka_share').on('click', '.js_guanbi', function() {
                var $this = $(this);
                removeUnScroll();
                $this.parents('.daka_share').addClass('displaynone');
                $this.parents('.daka_share').siblings('.daka_zhezhao').addClass('displaynone');
                // $('body').css('overflow', 'auto');
            });
            // 大咖分享弹窗 end

            // 主页点击出现弹窗
            $('.saishixinwen .list').on('click', '.item', function() {
                var $this = $(this);
                unScroll();
                var $popup = $('.popup');
                $popup.removeClass('displaynone');
                $popup.siblings('.js_popup_all').removeClass('displaynone');
                var topjuli2 = ($('.popup').height()) * 0.5;
                topjuli2 = topjuli2 + 15;
                $('.popup').css('marginTop', -topjuli2);
                // $('body').css({ overflow: 'hidden', height: "100%" });
            });
            // 主页点击关闭弹窗
            $('.popup').on('click', '.js_close_popup', function() {
                var $this = $(this);
                removeUnScroll();
                $this.parents('.popup').addClass('displaynone');
                $this.parents('.popup').siblings('.js_popup_all').addClass('displaynone');
                // $('body').css('overflow', 'auto');
            });

        }
        // width>750&&width<1200
        if (width > 750) {
            // 大咖分享弹窗 start
            // 打开
            $('.daka .content .img_box').on('click', 'img', function() {
                var $this = $(this);
                unScroll();
                var $daka_share = $('.daka_share');
                $daka_share.removeClass('displaynone');
                $daka_share.siblings('.daka_zhezhao').removeClass('displaynone');
                // $('body').css({ overflow: 'hidden', height: "100%" });
            });
            // 关闭
            $('.daka_share').on('click', '.js_guanbi', function() {
                var $this = $(this);
                removeUnScroll();
                $this.parents('.daka_share').addClass('displaynone');
                $this.parents('.daka_share').siblings('.daka_zhezhao').addClass('displaynone');
                // $('body').css('overflow', 'auto');
            });
            // 大咖分享弹窗 end

        }

        // 点击模拟登录 start pad and phone
        $('.header').on('click', '.js_login_icon', function() {
            logintrue = true;
        });
        // 点击模拟登录 end

        // 点击模拟退出 start
        $('.js_menu_zhezhao').on('click', '.tuichu', function() {
            logintrue = false;
            $this = $(this);
            $this.parents('.login_success_pad_phone').addClass('displaynone');
        });
        // 点击模拟退出 end

        // 点击打开pad菜单栏
        $('.header').on('click', '.menu', function() {
            var $this = $(this);
            var headwidth = $('.header').height();
            var $zhezhao = $('.js_menu_zhezhao');
            $zhezhao.css('top', headwidth);
            var flag = $zhezhao.hasClass('displaynone');
            if (flag) {
                $zhezhao.removeClass('displaynone');
                $this.siblings('.js_close_menu').removeClass('displaynone');
                $('body').css({ overflow: 'hidden', height: "100%" });
                if (logintrue) {
                    $('.login_success_pad_phone').removeClass('displaynone');
                    var login_height = $('.js_last_menu_item').offset().top + 2 * ($('.js_last_menu_item').height());
                    $('.login_success_pad_phone').css('top', login_height);
                }
            }
        });
        //点击关闭pad菜单栏
        $('.header').on('click', '.js_close_menu', function() {
            var $this = $(this);
            $this.addClass('displaynone');
            $('.js_menu_zhezhao').addClass('displaynone');
            $('body').css('overflow', 'auto');
        });
    }
});


// 窗口函数改变执行的
$(window).resize(function() {
    var widthnow = $(window).width();
    if (widthnow < 1200) {
        // 菜单栏顶部 start
        var headwidth = $('.header').height();
        var $zhezhao = $('.js_menu_zhezhao');
        $zhezhao.css('top', headwidth);
        // 菜单栏顶部 end

        // 赛事动态尺寸 start
        var dynamic_img_width = $('.dynamic .top img').width();
        $('.dynamic .left').width(dynamic_img_width);
        // 赛事动态尺寸 end

        // 评审团尺寸 start
        var jury_img_width = $('.jury .jury_img').width();
        $('.jury .intro').width(jury_img_width);
        // 评审团尺寸 end

    }
});