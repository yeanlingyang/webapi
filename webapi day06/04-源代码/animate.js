function animate(element, target){
    // 预解析，timerId 变量会提升到函数的最顶部
    // var timerId; // undefined

    clearInterval(element.timerId);

    // 当点击按钮的时候，开启一个定时器
    // 这里把定时器的id 存储到了元素的timerId属性中了
    // 存元素的下标一样的思路。
    element.timerId = setInterval(function(){
        // 在按钮点击的时候，获取div到左边的距离
        var current = element.offsetLeft;

        var step = current < target ? 10 : -10;
        // console.log(step);

        if(Math.abs(target - current) < Math.abs(step)){
            // 到达了终点
            clearInterval(element.timerId);

            // 清除定时器的时候，元素不一定到达了终点
            // 直接让元素从90的位置走到了96
            element.style.left = target + "px";
        }else{
            current += step;
            element.style.left = current + "px";
        }
    }, 30)
}
