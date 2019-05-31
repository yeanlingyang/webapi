# 标签的内容属性

> innerText和innerHTML属性都是用来获取和设置标签的内容的。但是二者还是有区别的。

> innerHTML可以用于获取和设置标签的所有内容，包括标签和文本内容

```
// innerHTML:内部的HTML
//  获取标签内容的时候，不管标签还是文本，都能获取到
//  innerHTML设置内容的时候，覆盖原来内容，标签也能生效，浏览器能解析这个标签。
```

> innerText可以用于获取和设置标签的文本内容，会丢弃掉标签

```
//innerText:内部文本
//  获取标签内容的时候，只会获取文本，标签扔掉了
//  设置标签内容的时候，覆盖原来内容，对标签进行转义（目的：把标签直接当文本来用）
```

二者的区别：

- innerHTML能够识别标签，标签能够生效
- innerText只识别文本，标签会被转义

## 案例：美女相册



# 表单属性操作

> 常见的表单属性有：disabled、type、value、checked、selected

对于disabled、checked、selected三个属性来说，比较特殊。

```javascript
在标签中，只要指定了disabled属性，无论有值没值，都代表这个input是被禁用的。注意，标签的disabled仅仅是默认值。
在DOM对象中，disabled的属性是一个布尔类型的属性，值只有true或者false
```

【案例：禁用文本框.html】

【案例：设置下拉框选中.html】

【案例：仿京东搜索文本框案例.html】

获得焦点与失去焦点案例

```javascript
onfocus:获得焦点时触发
onblur:失去焦点时触发	
```

【案例：表格全选案例.html】



# 样式操作（style属性）

> 标签不仅可以通过class属性操作样式，还可以通过style属性操作样式。同样的DOM对象可以通过className操作样式，也可以通过style属性操作样式。

```javascript
//1. style属性是一个对象，里面存储了所有行内样式对应的键值对。
//2. 如果样式的名字带了-，比如background-color,到了style对象中，变成了驼峰命名法，backgroundColor（因为-在js中不是一个合法的标识符）
//3. style属性只能获取和设置行内样式，在类样式中定义的样式通过style获取不到。
```

**style设置的样式是行内样式，因此优先级要高于className设置的样式**



## document常用属性：

```javascript
1. document.body  : body比较常用，并且在页面中时唯一的，因此可以使用document.body直接获取。
2. document.documentElement  : 可以获取html元素
3. document.head :  可以直接获取head元素
4. document.title :  可以直接获取title的文本
```

【案例：开关灯案例】

【案例：百度换肤】



# tab栏案例

> 排他思想：干掉所有人，复活我自己

【案例：排他思想.html】

【案例：获取当前元素的索引.html】

【案例：tab栏切换.html】



# 获取元素的方法

## 根据id获取

```javascript
//参数：元素的id
//返回值：一个元素，如果id不存在，返回null
document.getElementById("id");
```

## 根据标签名获取

```javascript
//参数：标签名
//返回值：伪数组，无论有几个元素，返回都是伪数组
document.getElementsByTagName("tagName");
box.getElementsByTagName("tagName");
```

## 根据类名获取

```javascript
//参数：字符串类型的类名
//返回值：伪数组
document.getElementsByClassName("class")
```

**注意：这个方法ie678不支持**

## 根据name获取

```javascript
//只适用于表单元素
var ps = document.getElementsByName("aa");
```

## 根据css选择器获取

```java
//参数：是一个css选择器，，   如果是类选择器，  .demo   如果是id选择器：  #aa
//返回值：只会返回一个对象，如果有很多个，会返回第一个
document.querySelector();

//参数：是一个css选择器
//返回值：会返回伪数组，不管有多少个，都会返回伪数组
document.querySelectorAll();
```



# 标签的自定义属性

> 我们之前讨论的属性，都是HTML规范中，标签本来就有的属性，对于标签自定义的一些属性，比较特殊。

在html页面中，定义一个自定义属性

```html
<div id="box" aa="bb"></div>
```

在对应的DOM对象中是不存在的，在DOM对象中只会存在固定的那些属性。

```javascript
var box = document.getElementById("box");
console.log(box.aa);//undefined
```

**attribute方法**

> attribute系列方法用于设置标签的属性，不管是自定义的还是固有的属性。

```
//获取标签的属性
box.getAttribute(name);
//设置标签的属性
box.setAttribute(name, value);
//移除标签的属性
box.removeAttribute(name);
```

