---
layout: post
category : web前端
tags : [seajs, jquery, easyui]
---
{% include JB/setup %}


## seajs简介

### 百度百科是这样描述的

SeaJS是一个遵循CommonJS规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。与jQuery等JavaScript框架不同，SeaJS不会扩展封装语言特性，而只是实现JavaScript的模块化及按模块加载。SeaJS的主要目的是令JavaScript开发模块化并可以轻松愉悦进行加载，将前端工程师从繁重的JavaScript文件及对象依赖处理中解放出来，可以专注于代码本身的逻辑。SeaJS可以与jQuery这类框架完美集成。使用SeaJS可以提高JavaScript代码的可读性和清晰度，解决目前JavaScript编程中普遍存在的依赖关系混乱和代码纠缠等问题，方便代码的编写和维护。


<!-- more -->


### 为什么使用 Sea.js？

我姑且也抄一段官网(<a href="http://seajs.org/docs/" target="_blank">http://seajs.org/docs/</a>)的段子吧：

**Sea.js 追求简单、自然的代码书写和组织方式，具有以下核心特性：**
<ul>
  <li>-简单友好的模块定义规范：Sea.js 遵循 CMD 规范，可以像 Node.js 一般书写模块代码。</li>
  <li>-自然直观的代码组织方式：依赖的自动加载、配置的简洁清晰，可以让我们更多地享受编码的乐趣。</li>
</ul>
**Sea.js 还提供常用插件，非常有助于开发调试和性能优化，并具有丰富的可扩展接口。**

<!-- more -->


### 好了，广告时间结束了，下面采用cmd规范简单封装(封装这个词会不会很装啊？值得想想)一下
一个单独的js文件就是一个模块，下面以jquery.js和easyui.js为例：
<p>[jquery.js]</p>
{% capture text %}
define('jquery',function () {

    //JQuery源码

    return $.noConflict(); //释放$的控制权
});
{% endcapture %}
{% include JB/liquid_raw %}


<p>[easyui.js]</p>
{% capture text %}
define('easyui',function () {
    $ = require('jquery');
    return function($){
      //easyui源码
    }
});
{% endcapture %}
{% include JB/liquid_raw %}


## 没有了，想到了再补充
