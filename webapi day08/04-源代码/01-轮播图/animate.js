function animate(element, target, num) {

    num = num || 80;

    clearInterval(element.timerId);

    element.timerId = setInterval(function() {

        // 动画的原理： 在元素当前的位置上移动一段距离
        var current = element.offsetLeft;

        var step = current < target ? num : -num;

        if (Math.abs(target - current) < Math.abs(step)) {
            // 到终点了，清定时器了
            clearInterval(element.timerId);

            element.style.left = target + "px";
        } else {
            current += step;
            element.style.left = current + "px";
        }
    }, 30)
}
