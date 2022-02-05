# 前端部署

## 方案：林木木

目前推荐[@林木木](https://immmmm.com/hi-friends-circle/)的方案，已经完成与主仓库api的适配。

hexo下的部署方法：

在博客根目录下，创建普通页面

```bash
hexo new page fcircle
```

可以看到`source/fcircle/index.md` 文件，打开该文件，粘贴以下内容：

```markdown
---
title: 朋友圈
date: 2022-01-29 15:23:17
---

<!-- 挂载友链朋友圈的容器 -->
<div id="fcircleContainer">与主机通讯中……</div>
<!-- 加样式和功能代码 -->
<script type="text/javascript">
  var fdataUser = {
    apiurl: 'https://hexo-circle-of-friends-circle.vercel.app/'  <!-- 这里改成你后端生成的api地址 -->
  }
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/lmm214/immmmm/themes/hello-friend/static/fcircle-beta.js"></script>
```

访问域名下的`/fcircle`即可看到效果。

非hexo的部署方法：

原理大致相同，即新建一个页面，把上述内容粘贴进`fcircle.md`文件中去。

## 方案：Akilar-SAO

店长[@Akilar](https://akilar.top/posts/62f13a97/)的方案，旧版方案，暂未适配新api。

参考：https://akilar.top/posts/62f13a97/

## 方案：Heo

