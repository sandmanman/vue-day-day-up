# vue.js 2.0 实例学习

找例子画瓢


使用 [ElemeFE/cooking](https://github.com/ElemeFE/cooking) 构建



# MVVM模式

<p align="center">
    <img src="https://cn.vuejs.org/images/mvvm.png?_=5619070" width="700px">
</p>

**ViewModel是Vue.js的核心，它是一个Vue实例。**

Vue实例是作用于某一个HTML元素上的，这个元素可以是HTML的body元素，也可以是指定了id的某个元素。

当创建了ViewModel后，双向绑定是如何达成的呢？

首先，我们将上图中的DOM Listeners和Data Bindings看作两个工具，它们是实现双向绑定的关键。

从View侧看，ViewModel中的DOM Listeners工具会帮我们监测页面上DOM元素的变化，如果有变化，则更改Model中的数据；

从Model侧看，当我们更新Model中的数据时，Data Bindings工具会帮我们更新页面中的DOM元素。

[转载](http://www.cnblogs.com/keepfool/p/5619070.html#3614208)
