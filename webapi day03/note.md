# 节点操作

## 节点查找

### 孩子节点

```javascript
//childNodes:获取所有的孩子节点（包括了元素节点和其他很多类型的节点，基本不常用）
//children:获取所有的子元素（用途很广泛）
//firstChild //第一个子节点
//firstElementChild //第一个子元素
//lastChild //最后一个节点
//lastElementChild //最后一个子元素
```

### 兄弟节点

```javascript
//1. nextSibling:下一个兄弟节点
//2. nextElementSibling:下一个兄弟元素
//3. previousSibling//上一个兄弟节点
//4. previousElementSibling //上一个兄弟元素
```

### 父节点

```javascript
//1. parentNode:父节点
```

【案例：隔行变色】

【案例：表单校验】

### onkeydown与onkeyup事件

```javascript
1. onkeydown: 当键盘按下时触发的事件
2. onkeyup: 键盘弹起时触发的事件

注意：如果给文本框注册的是onkeydown事件，获取的value值是上一次的。
```



## 添加节点

### appendChild

语法：parent.appendChild(child)

parent: 调用者，父节点来调用

child:需要添加的那个孩子。

作用：把child添加到parent的孩子的最后面。

> 如果添加的是页面中本来就存在的元素，是一个剪切的效果，原来的就不在了。

```javascript
var demo = document.getElementById("demo");
var box = document.getElementById("box");
box.appendChild(demo);
```

### insertBefore

语法：parent.insertBefore(child, refChild);

parent:必须要父节点来调用

child：需要添加的那个节点

refChild:添加到哪一个节点的前面。

```javascript
var ul = document.getElementById("list");
var li = document.createElement("li");
li.innerHTML = "骥骥";
//就是添加到子节点的最前面。
ul.insertBefore(li, ul.children[0]);
```



## 克隆节点

语法：var newNode = node.cloneNode(deep)

功能：在内存中克隆一份节点

参数：deep

- false：默认值：是浅复制，只会复制标签，节点本身，不会复制节点的孩子。
- true:深度复制，会复制标签，还会复制标签的所有内容 --- **常用**

> 1. 克隆出来的节点跟原来的节点没有关系了，修改了也不会相互影响。
> 2. 如果克隆的节点带了id，我们需要给id重新设置一个值，不让id冲突



## 删除节点

语法：parent.removeChild(child);

功能：由父盒子调用，删除里面的一个子元素。

【案例：祝愿墙】 ---  ondblclick：双击的时候触发



## 创建节点（3种方式）

### document.write（基本不用）

可以生成新的节点，但是不推荐使用。***如果页面已经加载完成了，你还是用document.write写内容的话，会把之前的页面给覆盖掉*** 

原理：页面从上往下加载的时候，会开启一个文档流，当页面加载完，文档流就会关闭。

document.write的本意就是在文档流上写入内容。如果页面没加载完成，文档流还是开着的，document.write直接在这个文档流上写东西

如果页面加载完成了，还是用document.write写东西，会重新开启一个新的文档流，往新的文档流上写东西，旧的文档流就被新的文档流覆盖了。

### innerHTML

innerHTML也可以创建节点

> innerHTML创建节点的时候有一个特点，如果原来有内容的话，使用innerHTML会把原先的内容给干掉。
>
> 慎用：很容易出现性能效率问题。

### createElement

语法：var element = document.createElement("tagName");

作用：在内存里面创建了一个节点

返回：一个元素。 用途非常的广泛。

【案例：创建百度新闻列表】

【案例：微博发布】
