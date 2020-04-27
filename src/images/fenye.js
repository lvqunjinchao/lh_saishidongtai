$(document).ready(function() {


    // 判断屏幕尺寸
    var width = $(window).width();
    var height = $(window).height();
    console.log(width);
    console.log(height);
    if (width > 1200) {

    } else if (width < 1200) {
        // width<750
        if (width <= 750) {

            // 搜索栏 start
            var ifdianji = false;
            var ifxialaguo = false;
            var jishu = 0;


            $(window).scroll(function() { //开始监听滚动条
                //获取当前滚动条高度
                var topp2 = $(document).scrollTop();
                //用于调试 弹出当前滚动条高度
                console.log(topp2);
                // 模块距离顶部距离
                var julitop2 = $('.searchtop').offset().top;
                console.log(julitop2);

                //判断如果滚动条大于90则弹出 "ok"
                if (!ifdianji) {
                    if (topp2 > julitop2) {
                        $('.allsearch').removeClass('displaynone');
                        if (jishu >= 1) {
                            $('.allsearch').addClass('displaynone');
                        }
                    } else {
                        $('.allsearch').addClass('displaynone');
                        jishu = 0;
                    }
                } else {
                    if (!ifxialaguo) {
                        $('.allsearch').removeClass('displaynone');
                        if (topp2 > julitop2) {
                            ifxialaguo = true;
                        }
                    } else {
                        if (topp2 < julitop2) {
                            $('.allsearch').addClass('displaynone');
                            ifdianji = false;
                        }
                    }
                }



            })
            $('.allsearch').on('click', '.search_close', function() {
                var $this = $(this);
                ifdianji = false;
                jishu++;
                $this.parents('.allsearch').addClass('displaynone');
            });
            $('.searchtop').on('click', '.searchicon', function() {
                var $this = $(this);
                ifdianji = true;
                ifxialaguo = false;
                $this.parents('.searchtop').siblings('.allsearch').removeClass('displaynone');
            });
            // 搜索栏 end



        }



    }


});