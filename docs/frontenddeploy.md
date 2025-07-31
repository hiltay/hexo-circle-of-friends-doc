# 前端部署

## 方案：yyyz

部署方法：

新建一个页面，比如 hexo 在博客根目录使用命令

```bash
hexo new page fcircle
```

可以看到`source/fcircle/index.md` 文件，打开该文件，粘贴以下内容（注意修改 api 地址）：

```markdown
---
title: 朋友圈
date: 2022-10-09 00:38:16
---

<div id="hexo-circle-of-friends-root"></div>
<script>
    let UserConfig = {
        // 填写你的api地址
        private_api_url: 'http://127.0.0.1:8000/',
        // 初始加载几篇文章
        page_init_number: 20,
        // 点击加载更多时，一次最多加载几篇文章，默认10
        page_turning_number: 10,
        // 头像加载失败时，默认头像地址
        error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c',
        // 进入页面时第一次的排序规则
        sort_rule: 'created',
        // 本地文章缓存数据过期时间（天）
        expire_days: 1, 
    }
</script>
<script type="text/javascript" src="https://cdn.cbd.int/fcircle-theme-yyyz@1.1.1/dist/fcircle.min.js"></script>
```

访问域名下的`/fcircle`即可看到效果。

如果觉得该 cdn 比较慢，可以手动将 js 文件放到你认为更快的 cdn 上。

## 方案：林木木

[@林木木](https://immmmm.com/)的方案，已经完成与主仓库 4.x 版本 api 的适配。

简单介绍部署方法，更多细节请[查看原文](https://immmmm.com/hi-friends-circle/)。

新建一个页面，比如 hexo 在博客根目录使用命令

```bash
hexo new page fcircle
```

可以看到`source/fcircle/index.md` 文件，打开该文件，粘贴以下内容（注意修改 api 地址）：

```markdown
---
title: 朋友圈
date: 2022-01-29 15:23:17
---

<!-- 挂载友链朋友圈的容器 -->
<div class="post-content">
<div id="cf-container">与主机通讯中……</div>
</div>
<!-- 加样式和功能代码 -->
<!-- 将apiurl改成你后端生成的api地址 -->
<script type="text/javascript">
  var fdataUser = {
    apiurl: 'https://hexo-circle-of-friends-circle.vercel.app/'
  }
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.js"></script>
```

访问域名下的`/fcircle`即可看到效果。

如果觉得 jsdelivr 比较慢，可以手动将 js、css 文件放到你认为更快的 cdn 上。

## 方案：Akilar-SAO

店长[@Akilar](https://akilar.top/posts/62f13a97/)的方案，旧版 3.x 方案，暂未适配新 api。

参考：https://akilar.top/posts/62f13a97/

## 方案：Heo

点击查看[@Heo 提供的部署方案](https://blog.zhheo.com/p/4e18a507.html)

## 方案：安知鱼

点击查看[@安知鱼提供的部署方案](https://anzhiy.cn/posts/3753.html)
