# 进阶攻略

## 如何适配我的友链页面

我们深知，本项目不可能穷尽所有的博客主题，因此为了尽可能地支持各种主题，我们提供了`css_rules.yaml`供用户自定义抓取规则。在介绍该文件之前，首先介绍一下本项目的实现原理。

### 实现原理

程序在每次运行时，都会获取你在`fc_settings.yaml`中配置的 url 作为起始地址，比如你配置了：

```yaml
LINK:
  [
    { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" },
    { link: "https://immmmm.com/about/", theme: "common1" },
  ]
```

那么程序会依次访问`https://www.yyyzyyyz.cn/link/`和`https://immmmm.com/about/`，获取这些页面下展示的所有友链。如前面所述，每个人都可能采用不同的博客主题，因此这个页面也是各式各样的，并没有统一的标准。因此我们提供了`theme`字段，并内置了一些常见的博客主题，如 hexo 的 butterfly、volantis 等等。如果你的主题并不在内置主题中，想要程序能够识别，那么有两种方法：

1. 你修改该页面，使页面样式符合我们的抓取格式
2. 你修改`css_rules.yaml`，添加一条自定义规则

对于一些前端基础了解较少的用户，修改页面是一件复杂且相对困难的事情。因此我们介绍相对简单一些的第 2 种方案。**但注意，此方法仍然需要你了解一些 html 和 css 的基础知识。** 如果你完全对前端零基础，你可以尝试在 github 上提一个 issue，请我们或者好心人来做适配，或者你也可以询问 AI 大模型，比如让 ChatGPT 帮你写一个。

### 适配你的起始页面

回到正题。我们来看看如何修改`css_rules.yaml`，适配你的页面。打开文件，你会看到大体上分为两部分：

```yaml
post_page_rules: {}
# ...
link_page_rules: {}
# ...
```

其中，`link_page_rules`就代表了起始地址的抓取规则，我们首先修改它。它的内部是这样的：

```yaml
link_page_rules: {
    butterfly:
      {
        author:
          [
            { selector: ".flink-list .flink-sitename", attr: "text" },
            { selector: ".flink-list a .flink-item-name", attr: "text" },
            { selector: ".flink .site-card .info .title", attr: "text" },
          ],
        link:
          [
            { selector: ".flink-list a", attr: "href" },
            { selector: ".flink .site-card", attr: "href" },
          ],
        avatar:
          [
            { selector: ".flink-list .info img", attr: "src" },
            { selector: ".flink-list a img", attr: "src" },
            { selector: "flink .site-card .info img", attr: "src" },
          ],
      },
    fluid: {},
    # ...
    matery: {},
    # ...
  }
# ...
```

`butterfly`是指我们要为 butterfly 主题编写抓取规则，`butterfly.author`、`butterfly.link`和`butterfly.avatar`分别指我们要分别获取作者信息、作者博客主页地址和作者的头像链接地址。我们以`butterfly.author`为例：

```yaml
author:
  [
    { selector: ".flink-list .flink-sitename", attr: "text" },
    { selector: ".flink-list a .flink-item-name", attr: "text" },
    { selector: ".flink .site-card .info .title", attr: "text" },
  ],
```

可以看到这是一个 list，包含了三条规则，每条规则都是由`selector`和`attr`组成的。其中，`selector`表示 css 选择器，`attr`表示获取选择到的 html 元素中的哪个属性。

之所以我们有三条规则，是因为同一个主题可能有不同的版本，版本之间也会有所区别，比如 butterfly4.x 和 butterfly3.x 的友链页可能就有所区别，对于一些喜欢魔改的用户，可能页面的样式也会不同。

程序会读取这三条规则，由上到下依次尝试，直到获取到值为止。当获取到值之后，**不再尝试后续规则**。

如果你有一定的前端基础，那么我想你应该知道接下来该怎么做了———没错，只需要为需要适配的起始页面分别添加`author`、`link`和`avatar`规则即可，比如为`mytheme`添加：

```diff
link_page_rules: {
  butterfly:
  {
    # ...
  },
  fluid: {
    # ...
  },
  matery: {
    # ...
  },
  # ...
+  mytheme: {
+    author:
+      [
+       { selector: ".mylink .link-name", attr: "text" },
+      ],
+    link:
+      [
+        { selector: ".mylink a", attr: "href" },
+      ],
+    avatar:
+      [
+        { selector: ".mylink .link-img", attr: "src" },
+      ],
+  }
}
```

最后，你只需要修改`fc_settings.yaml`：

```yaml
LINK: [{ link: "https://your.blog.cn/link/", theme: "mytheme" }]
```

这样，程序就能够根据你编写的`mytheme`规则，抓取你的页面了。

### 对于博客主题开发者的友链页适配

如果你是主题作者或者是二次开发人员，现有的友链朋友圈主题并不支持抓取你的友链页，且想进行适配的话，下面的内容供参考。

首先，根据上文我们知道友链页的抓取是通过 css 选择器进行的，因此我们这里提供两个通用的 css 规则`common1`和`common2`：

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

只要上述 css 选择器能够匹配到，就完成了适配。

## 如何抓取更多的主页

根据上文，我们首先继续介绍程序的工作流程。在访问起始页地址，并根据规则抓取到友链博客的主页地址之后，程序会尝试访问这些地址，并尝试从主页解析文章。

解析主页文章的时候，程序会首先尝试解析这个博客主页的[RSS](https://zh.wikipedia.org/wiki/RSS)，如果 RSS 可以解析成功，那么直接返回结果。因此我们在这里也鼓励各位用户为自己的博客添加 RSS。如果 RSS 解析失败，就会进入第二步尝试，即根据 CSS 规则从主页解析。

同理，由于这些博客主页也各式各样，除了我们提供的一些常用博客主题外，你可以为你需要的主题编写自定义的规则。在`css_rules.yaml`中：

```yaml
post_page_rules: {}
# ...
link_page_rules: {}
# ...
```

其中的`post_page_rules`定义了博客主页的抓取规则，基本结构如下：

```yaml
post_page_rules: { anzhiyu: {
        title: [],
        # ...
        link: [],
        # ...
        created: [],
        #...
        updated: [],
      } }
# ...
```

其中的`anzhiyu`就是我们要为 anzhiyu 主题的主页编写抓取规则。其中我们要编写：

- `title`：文章标题
- `link`：文章链接地址
- `created`：文章创建时间
- `updated`：文章更新时间

没错，当你编写好了这些规则，再次运行爬虫时，程序就会根据这些规则获取你想要的文章了~

### 协助我们完善内置规则

如果你愿意为其他博客主题适配规则，欢迎[提出 PR](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/pulls)，并在 PR 中进行简要说明。