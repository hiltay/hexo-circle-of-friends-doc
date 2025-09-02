# 前端部署

友链朋友圈 (fcircle) 的前端负责 **展示友链文章**，通过调用后端 API 渲染页面内容。  

目前仅适配 **Hexo Butterfly** 及部分类似主题，其他主题的支持正在开发中，敬请期待。  
如需尝试在不同主题中集成，请参考本文档步骤并自行调整。

## 📄 部署步骤

### 1. 新建页面

在你的博客根目录执行以下命令，新建一个 `fcircle` 页面：

```bash
hexo new page fcircle
```

执行后会在 `source/fcircle/index.md` 下生成文件。
如果你不想使用命令，也可以直接手动创建该文件。

### 2. 编辑页面内容

打开 `source/fcircle/index.md` 文件，清空默认内容，并粘贴以下代码：

```markdown
---
title: 朋友圈
date: 2022-10-09 00:38:16
---

<div id="friend-circle-container">与主机通讯中……</div>

<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            // 你的 hexo-circle-of-friends 后端 API 地址（需先部署后端）
            private_api_url: 'https://your-api-domain.com/',
            // 每次点击“加载更多”时加载的文章数量，默认 24
            page_turning_number: 24,
            // 头像加载失败时的默认图片
            error_img: 'https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/logo.png',
        }
    }
</script>

<!-- 样式文件：以主题命名，目前仅支持 butterfly -->
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.css">

<!-- 脚本文件：对应主题样式功能 -->
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.js"></script>
```

::: tip 注意事项

* 请将 `private_api_url` 替换为你自己的后端 API 地址，例如：
  `https://hexo-friendcircle4-api.vercel.app/` 或 `https://your-domain.com/all`
* 后端必须已经部署成功，否则前端无法获取数据。
:::

### 3. 样式选择

目前 **仅支持 Hexo Butterfly 主题**，并提供多种样式。

你只需要替换 **CSS 与 JS 文件路径** 即可切换样式：

#### 默认样式（default）

```html
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.css">
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/default.min.js"></script>
```

#### IMm 风格样式（imm）

```html
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/imm.min.css">
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/imm.min.js"></script>
```

#### yyyz 风格样式（yyyz）

```html
<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/yyyz.min.css">
<script src="https://fastly.jsdelivr.net/gh/Rock-Candy-Tea/Friend-Circle-Frontend/hexo-theme-butterfly/yyyz.min.js"></script>
```

更多样式请参考前端仓库：
👉 [Friend-Circle-Frontend](https://github.com/Rock-Candy-Tea/Friend-Circle-Frontend)

### 4. 预览效果

你可以在演示站点预览不同样式的效果：

👉[演示页面(暂未开放)](https://blog.111.222/)

注意：演示页面与实际部署后的效果可能略有差异，仅供参考。

### 5. 完成部署

执行以下命令重新生成博客页面：

```bash
hexo clean && hexo g && hexo s
```

然后访问你的博客地址：

```txt
https://你的域名/fcircle
```

如果能正常显示内容，说明前端部署成功 🎉

## 🔄 更换样式

如果后续想更换样式，只需替换对应的 CSS/JS 文件路径即可，
无需修改页面内容或配置。

*Last Updated: 2025-08-31*