# 动画函数封装

## 动画初体验-实现div到left=400的位置

```js
点击按钮，让div能够移动到400的位置，到达终点，清除定时器
```

## 动画初体验-让div做多个动画

```js
点击按钮1，让div能够移动到400的位置，到达终点，清除定时器
点击按钮2，让div能够移动到800的位置，到达终点，清除定时器
还要让div能够从800 移动到400的位置，到达终点，清除定时器
```

## 动画初体验-div到达终点

```js
让div移动到96px的位置，发现元素不能移动到终点位置
```

## 动画初体验-清除多个定时器

```js
点击元素多次，会发现元素会左右来回移动，到达不了终点。
```



# 短路运算

&&：短路与， 只要碰到了false，就会短路，短路后不会执行第二个表达式。

||：短路或，只要碰到了true就会短路，短路后不会执行第二个表达式。

**注意：&&和||的结果不一定是布尔类型，也可以是其他的类型**

**||经常用来给函数设置默认值**



# 轮播图

## 简单轮播图

```javascript
1. 结构分析
2. 按钮高亮以及排他
3. 移动图片：渐渐的移动图片，用到animate函数
```



## 左右焦点图

```javascript
1.结构分析
2.左右箭头的显示与隐藏
3.点击左箭头与右箭头（下标判断）
```



## 无缝轮播图

```javascript
1. 需要添加假图片
2. 真图片与假图片之间互相切换。
```



## 完整版轮播图

```js
1. js动态添加小圆点
2. js动态添加最后一张假图片
3. 实现左右焦点图 + 无缝滚动
4. 自动播放
5. 点击小圆点同步切换
6. 解决点击小圆点的bug
```





# 三大家族

## offset家族

> offset系列用于用于获取元素自身的大小和位置，在网页特效中有广泛应用
>
> offset系列主要有：offsetHeight、offsetWidth、offsetParent、offsetLeft、offsetTop

offsetHeight与offsetWidth

1. 获取的是元素真实的高度和宽度
2. 获取到的是数值类型，方便计算
3. offsetHeight与offsetWidth是只读属性，不能设置。

offsetHeight与offsetWidth的构成

​	offsetHeight = height + paddnig + border

​	offsetWidth = width + padding + border

 ![offset](images/offset.png)

## scroll家族

> scroll家族用来获取盒子内容的大小和位置
>
> scroll家族有：scrollWidth、scrollHeight、scrollLeft、scrollTop

1. scrollWidth与scrollHeight是盒子内容的真实的宽度和高度。与和盒子大小无关，仅仅与盒子的内容有关系。
2. scrollTop用于获取内容垂直滚动的像素数。如果没有滚动条，那么scrollTop值是0

 ![scroll](images/scroll.png)

onscroll事件，对于有滚动条的盒子，可以使用onscroll注册滚动事件，每滚动一像素，就会触发该事件。

```javascript
var box = doucment.getElementById(“box”);
box.onscroll = function(){
	//事件处理程序
}
```

获取页面被卷去的高度和宽度

> 通常来说，scroll家族用的最多的地方就是用来获取页面被卷去的宽度和高度，非常的常用

页面被卷去的高度和宽度

```javascript
window.onscroll = function() {
  var scrollTop = window.pageYOffset
  var scrollLeft = window.pageXOffset
}
```

【仿腾讯固定导航案例.html】

## client家族

> client家族用于获取盒子可视区的大小
>
> client家族有clientWidth、clientHeight、clientLeft、clientTop

clietnWidth: 获取内容和padding的大小

clientHeight:获取内容与padding的大小

> clientTop与clientLeft

**clientTop**与**clientLeft** 完全没有用，他们就是borderTop与borderLeft

 ![client1](images/client1.png)

> 三大家族对比

 ![client](images/client.png)



> onresize事件：onresize事件会在窗口被调整大小的时候发生。

```javascript
window.onresize = function(){
	//事件处理程序
    var width = window.innerWidth;
    var height = window.innerHeight
}
```