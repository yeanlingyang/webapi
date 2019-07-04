// banner的轮播图
(function () {
    new Swiper(".jd_banner", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: true
    });
})();


// 京东快报的轮播图
(function () {
    new Swiper("#jd_news", {
      loop: true,
      direction: "vertical",
      autoplay: true
    });
})();


// 京东秒杀
(function () {

    function changeTime() {
        // 将来的时间
        var featureTime = new Date("2019-5-7 20:14:50");

        // 现在的时间
        var nowTime = new Date();

        // 得到时间差 （秒）
        var time = (featureTime - nowTime) / 1000;

        // console.log(time);

        if(time <= 0){
            // 秒杀时间到了

            // 不仅要清除定时器
            clearInterval(timerId);

            // 还需要防止有负数的问题，把time 时间差设置成 0即可
            time = 0;
        }


        // 秒转成小时
        var hours = parseInt(time / 60 / 60);

        // 分钟
        var minutes = parseInt(time / 60 % 60);

        // 秒数
        var seconds = parseInt(time % 60);

        // 获取span
        var spans = document.querySelectorAll(".jd_seckill .time span:nth-child(odd)");
        spans[0].innerText = paddingZero(hours);
        spans[1].innerText = paddingZero(minutes);
        spans[2].innerText = paddingZero(seconds);
    }
    changeTime();
    var timerId = setInterval(changeTime, 1000)

    // 补零操作
    function paddingZero(n){
        return n < 10 ? "0" + n : n;
    }
})();


// 计算京东秒杀ul的宽度
(function () {
    var ul = document.querySelector(".jd_seckill ul");
    var liWidth = ul.firstElementChild.offsetWidth;
    ul.style.width = liWidth * ul.children.length + "px";
})();


// 让秒杀产品实现区域滚动
(function () {
    new IScroll(".seckill_content", {
        scrollX: true
    })
})();
