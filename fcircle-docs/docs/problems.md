# 常见问题

## GitHub 部署相关问题

### 如何添加 Secret？

进入仓库设置：`Settings → Secrets and variables → Actions → New repository secret`，在这里可以添加你的 Secret。

![添加 Secret 示例](/imgs/docs/problems/01.png)

### 为什么 sqlite 或 data.json 无法上传到仓库？

这是因为 GitHub 更新了默认权限，fork 后的仓库通常只有 `read` 权限，导致无法写入文件。

解决方法：
进入仓库设置：`Settings → Actions → General → Workflow permissions`，勾选 **Read and write permissions**，然后点击 **Save**。

![权限修改示例](/imgs/docs/problems/02.png)

## Server 部署相关问题

### 如何安装 Git？

可以前往 Git 官网下载安装：
👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)

### 如何停止运行？

在项目目录下执行以下命令即可：

```bash
chmod +x && ./stop.sh
```

### 如何查看运行日志？

日志会保存在 `./log/` 目录下，可以直接查看里面的文件。

## 其他常见问题

### 项目名称里有 hexo，只能支持 hexo 吗？

当然不是！虽然项目名称是 **hexo-circle-of-friends**，但程序逻辑是通用的。最初只是因为它在 Hexo 博客圈起源才这样命名。
如果你使用其他博客框架或主题，也同样可以适配，请参考 [进阶攻略](AdvancedGuide)。

### MySQL 数据库出现字符集报错怎么办？

如果数据中包含 emoji 表情，MySQL 默认字符集可能不支持，会报错：`Incorrect string value`。
解决方法：把 MySQL 数据库字符集设置为 **utf8mb4**。

相关讨论见 [issues/25](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/25)。

### 5.x 前端在 Volantis 主题中显示异常怎么办？

在 Volantis 主题下，页面可能会有样式问题。
解决方法：在朋友圈页面中增加以下 CSS 即可：

```html
<style>
article#page {
    transform: none;
    transition: none;
    backdrop-filter: none;
}
</style>
```

相关讨论见 [issues/65](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/65)。

## 没有找到答案怎么办？

如果你遇到的问题没有在这里找到，可以：

* 查看 [Discussions](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/discussions)，看看是否有人已经提过类似的问题。
* 在 [Issues](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues) 中搜索或提交新的问题，提供复现步骤和截图，方便开发者和社区帮你解决。
