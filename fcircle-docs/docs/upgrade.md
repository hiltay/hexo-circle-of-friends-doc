# 版本更新

## GitHub 版本更新

如果你是通过 **Fork 仓库** 部署的，只需要在自己的仓库页面点击 **`Sync fork`** 即可同步到最新版本。

* **`Discard xx commits`**：会清空你仓库中领先的提交（如本地生成的 `data.db`、`fc_settings.yaml` 等文件），然后再进行同步更新。适合你的仓库修改较多且产生冲突时使用。
* **`Update branch`**：直接将上游更新合并到你的分支，不会清空你仓库的提交。建议优先选择这种方式，如果出现冲突再尝试 `Discard` 选项。

![sync\_fork](/imgs/docs/upgrade/01.png)

## Server 版本更新

1. **停止 API 服务**

   在项目目录下执行：

   ```bash
   chmod +x stop.sh && ./stop.sh
   ```

2. **拉取最新代码**

   ```bash
   git pull origin main
   ```

   > \[可选项]：如果 `git pull` 失败，可以重新克隆仓库：
   >
   > ```bash
   > git clone https://github.com/Rock-Candy-Tea/hexo-circle-of-friends
   > ```

3. **更新二进制文件**

   前往 [Releases 页面](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/releases)，下载对应平台的最新二进制文件，放到项目目录中覆盖旧文件。

4. **重新启动服务**

   ```bash
   chmod +x start.sh && ./start.sh
   ```

如果更新过程中出现问题，请及时 [反馈](../contactus.md)。

## 前端更新

前端无需手动修改源码，只需要更新引用的 CDN 地址即可。
请前往 [前端部署](deployment/frontend.md) 文档，获取最新的前端资源地址，并替换到你的博客配置中。

## 导出配置文件和数据

在进行版本更新或迁移项目之前，建议手动导出配置与数据，以避免因误操作导致数据丢失。

需要备份的文件主要包括：

* **`data.db`**：sqlite 数据库文件，包含已抓取的文章数据。
* **`fc_settings.yaml`**：项目配置文件。
* **`.env`**：环境变量文件（包含数据库连接信息等）。

将这些文件保存到安全的位置，更新完成后再复制回项目目录即可无缝恢复。

## 注意事项

* 更新之前请务必备份关键文件，避免因更新失败导致数据丢失。
* 如果你觉得本项目对你有帮助，欢迎为我们点亮 ⭐Star 支持，让更多人看到。