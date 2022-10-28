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

使用时，只需要在`fc_settings.yaml`配置文件中配置为`common1`或者`common2`即可：

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

## 配置项json友链

在`fc_settings.yaml`中的配置项友链`SETTINGS_FRIENDS_LINKS`主要针对还未适配主题或者有**定制需求**的用户，这里对`json_api`的用法作一个详细的说明。

配置`json_api`可以使爬虫能够根据你指定的api接口获取到对应的json格式友链，例如：

```python
SETTINGS_FRIENDS_LINKS = {
    "enable": True,
    "json_api": "https://xxxxxx/friend.json",
    "list": []
}
```

你也可以配置一个路径，让爬虫通过文件读取的形式（尚处于开发状态）获取友链，如：

```python
SETTINGS_FRIENDS_LINKS = {
    "enable": True,
    "json_api": "../friend.json",
    "list": []
}
```

其中`friend.json`格式支持以下形式，只要**符合一种**即可：

#### 1、基础格式

```json
{
  "friends": [
    [
      "贰猹の小窝",   # 友链名称
      "https://noionion.top/",  # 友链地址
      "https://pub-noionion.oss-cn-hangzhou.aliyuncs.com/head.jpg"  # 友链头像
    ],
    [
      "Akilarの糖果屋",  # 友链名称
      "https://akilar.top/",  # 友链地址
      "https://akilar.top/images/headimage.png" # 友链头像
    ],
    [
      "elizen", # 友链名称
      "https://elizen.me/", # 友链地址
      "https://akilar.top/images/headimage.png", # 友链头像
      "hello.xml"  # 自定义后缀
    ],
    ....
  ]
}
```

#### 2、进阶格式

进阶格式尚处于开发中，与基础格式暂无区别，且稳定性未知，待后续更新。

```json
{
  "friends": [
    {
      "class_name": "🍨冰糖红茶",   # 分组名称
      "class_desc": "冰糖红茶组织成员",  # 分组说明
      "link_list": [
        {
          # 必须参数：名称、友链地址、头像
          "name": "🧊小冰博客",  # 友链名称
          "link": "https://zfe.space/",  # 友链地址
          "avatar": "https://npm.elemecdn.com/akilar-friends@latest/avatar/zfe.space.jpg",  # 友链头像
          # 额外参数，可以无限制扩展
      	  "suffix": "hello.xml"  # 自定义后缀
          "descr": "做个有梦想的人！",  # 友链描述
          "siteshot": "https://npm.elemecdn.com/akilar-friends@latest/siteshot/zfe.space.jpg"  # 站点截图
          ....
        },
        {
          # 必须参数：名称、友链地址、头像
          "name": "🍭Akilarの糖果屋",
          "link": "https://akilar.top/",
          "avatar": "https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg",
          "siteshot": "https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg",
          # 额外参数，可以无限制扩展
          "descr": "欢迎光临糖果屋"  # 友链描述
          "suffix": "hello.xml"  # 自定义后缀
        }
      ]
    },
    {
      "class_name": "🍨xxxx",  # 分组名称
      "class_desc": "xxxxxx",  # 分组说明
      "link_list": [
        {
          # 必须参数：名称、友链地址、头像
          "name": "🧊小冰博客",  # 友链名称
          "link": "https://zfe.space/",  # 友链地址
          "avatar": "https://npm.elemecdn.com/akilar-friends@latest/avatar/zfe.space.jpg",  # 友链头像
          # 额外参数，可以无限制扩展
		  "suffix": "hello.xml"  # 自定义后缀
          "descr": "做个有梦想的人！",  # 友链描述
          "siteshot": "https://npm.elemecdn.com/akilar-friends@latest/siteshot/zfe.space.jpg"  # 站点截图
          ....
        },
        {
          # 必须参数：名称、友链地址、头像
          "name": "🍭Akilarの糖果屋",
          "link": "https://akilar.top/",
          "avatar": "https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg",
          # 额外参数，可以无限制扩展
          "suffix": "hello.xml"  # 自定义后缀
          "siteshot": "https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg",
          "descr": "欢迎光临糖果屋"
        }
      ]
    }
  ]
}
```

