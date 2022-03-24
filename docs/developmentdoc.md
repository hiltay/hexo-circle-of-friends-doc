# 开发文档

对于一些想二次开发的用户，这里也尽可能详尽的做一些源码说明，方便大家快速开发。

如果你有好的开发分享，可以提交PR，我们会根据需求选择是否采纳合并。

努力施工中...


## 友链页适配

如果你是主题作者或者是二次开发人员，如果现有的友链朋友圈主题并不支持抓取你的友链页，且想进行适配的话，下面的内容供参考。

首先，友链页的抓取是通过css选择器进行的，即只要你的友链页面符合我们[抓取规则](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/blob/main/hexo_circle_of_friends/utils/get_url.py)中的任意一种，就可以获取到友链信息。我们这里提供两个通用的css规则：

```css
/* 规则一（common1）：*/
/*  avatar : '.cf-friends img::attr(src)'  */
/*  link : '.cf-friends a::attr(href)'  */
/*  name : '.cf-friends a::text'  */
/* 规则二（common2）：*/
/*  avatar : 'img.cf-friends-avatar'  */
/*  link : 'a.cf-friends-link'  */
/*  name : '.cf-friends-name'  */
```

只要上述css选择器能够匹配到，就完成了适配。根据规则，你编写的友链页面的友链部分可以是这样：

```html
    <div class="cf-friends">
        <div>
            <img src="https://www.baidu.com" alt="">    <!-- 头像 -->
            <a href="https://www.baidu.com">xxxx的博客</a>  <!-- 链接 -->
        </div>
        <div>
            <img src="https://www.baidu.com" alt="">
            <a href="https://www.baidu.com">xxxx的博客</a>
        </div>
        <div>
            <img src="https://www.baidu.com" alt="">
            <a href="https://www.baidu.com">xxxx的博客</a>
        </div>
        <div>
            <img src="https://www.baidu.com" alt="">
            <a href="https://www.baidu.com">xxxx的博客</a>
        </div>

    </div>
```

也可以是这样

```html
    <a class="cf-friends-link" href="https://www.baidu.com">
        <img class="cf-friends-avatar" src="https://www.baidu.com" alt="">
        <span class="cf-friends-name"> xxxx的博客</span>
    </a>
```

使用时，只需要在`settings.py`配置文件中配置为`common1`或者`common2`即可：

```python
LINK = [
         {
         "link": "https://immmmm.com/about/", # 你的友链地址
         "theme": "common1",  # 友链页的获取策略
     },
]
```
或者
```python
LINK = [
         {
         "link": "https://immmmm.com/about/", # 你的友链地址
         "theme": "common2",  # 友链页的获取策略
     },
]
```
