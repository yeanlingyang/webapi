# 移动端

## 类名操作

> 推荐：classList是一个集合，会存储某个元素上所有的类名，使用classList来替代className操作class类

```javascript
//添加类
node.classList.add("classname");
//移除类
node.classList.remove("classname");
//切换类
node.classList.toggle("classname");
//判断类
node.classList.contains("classname");
```

## touch事件

移动端新增了4个与手指触摸相关的事件。

```javascript
//touchstart:手指放到屏幕上时触发
//touchmove:手指在屏幕上滑动式触发（会触发多次）
//touchend:手指离开屏幕时触发
//touchcancel:系统取消touch事件的时候触发,比如电话
```

每个触摸事件被触发后，会生成一个event对象，event对象中`changedTouches`会记录手指滑动的信息。

```javascript
e.touches;//当前屏幕上的手指
e.targetTouches;//当前dom元素上的手指。
e.changedTouches;//触摸时发生改变的手指。(重点)
```

这些列表里的每次触摸由touch对象组成，touch对象里包含着触摸信息，主要属性如下

```javascript
clientX / clientY: //触摸点相对浏览器窗口的位置
pageX / pageY:     //触摸点相对于页面的位置
```

## 区域滚动与iscroll

