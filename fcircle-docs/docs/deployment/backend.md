# 后端部署

友链朋友圈 (fcircle) 的后端负责 **采集友链文章、生成数据 API**，供前端调用。  
目前支持两种部署方式：  

1. **GitHub Action + Vercel（推荐）** —— 无服务器托管，免运维  
2. **自托管（Server 部署）** —— 部署在自己的服务器，稳定性更高  


## 🚀 GitHub + Vercel 部署（推荐）

这是最简便的部署方式，利用 GitHub Action 自动采集友链数据，并托管在 Vercel 上。

### 部署步骤

1. **Fork 仓库**  
   打开项目仓库 [hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends)，点击右上角 **Fork**。  
   下文称此仓库为「你的仓库」。

2. **修改配置文件**  
   编辑项目根目录下的 `fc_settings.yaml`，修改友链页面地址和主题：  

   ```yaml
   LINK:
     - { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" }
    ```

* `link`：替换为你博客的友链页地址
* `theme`：选择对应的主题（如 butterfly、matery 等）

3. **配置 GitHub Action 权限**
   打开「你的仓库」 → **Settings** → **Actions → General**，
   在 **Workflow permissions** 中选择 **Read and write permissions**。

   ![GitHub Actions Permissions](/imgs/docs/deployment/backend/01.png)

4. **启用 GitHub Action**

   * 点击仓库菜单 **Actions** → 启用工作流

   ![GitHub Actions Run](/imgs/docs/deployment/backend/02.png)

   * 找到 `update-friends-posts`，点击 **Run workflow** 手动运行一次

     ![GitHub Actions Run](/imgs/docs/deployment/backend/03.png)

     ![GitHub Actions Run](/imgs/docs/deployment/backend/04.png)

   * 等待完成后，你的仓库将生成 `data.db`

5. **部署到 Vercel**

   * 注册并登录 [Vercel](https://vercel.com)，绑定 GitHub 账号
   * 点击 **New Project** → 导入「你的仓库」

     ![Vercel Import](/imgs/docs/deployment/backend/05.png)

   * 点击 **Deploy**，等待完成

   部署完成后，在项目 **Domains** 中找到地址，例如：

   ```txt
   https://hexo-friendcircle4-api.vercel.app
   ```

   在地址后拼接 `/all`，例如：

   ```txt
   https://hexo-friendcircle4-api.vercel.app/all
   ```

   如果返回数据，说明后端部署成功 🎉
   这个地址就是前端所需的 API 地址。

   ![Vercel Deploy](/imgs/docs/deployment/backend/06.png)

   ::: warning 注意
   由于 Vercel 在部分地区被墙，推荐绑定自定义域名以确保访问稳定。
   :::

---

## 🛠️ 自托管部署

如果你有自己的服务器，可以选择自托管，掌握所有数据，避免托管服务不稳定。

### 部署步骤

1. **克隆项目**

   ```bash
   git clone https://github.com/Rock-Candy-Tea/hexo-circle-of-friends.git
   ```

2. **修改配置**

   编辑 `fc_settings.yaml` 文件，和 GitHub Action 部署相同：

   ```yaml
   LINK:
     - { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" }
   ```

3. **下载二进制文件**

   前往 [Releases](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/releases) 下载对应平台的二进制文件，例如 Linux：

   ```bash
   wget https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/releases/download/v6.0.4/linux-x86_64-unknown-linux-musl.zip
   unzip linux-x86_64-unknown-linux-musl.zip
   ```

4. **运行服务**

   ```bash
   chmod +x start.sh && ./start.sh
   ```

5. **测试 API**

   ```bash
   curl 127.0.0.1:8000/all
   ```

   如果返回数据，说明后端运行成功。
   你可以通过反向代理将其映射到网站域名的其他路径。

6. **开放端口**

   默认端口为 **8000**，请在防火墙或服务器面板中放行。
   部署完成后即可通过 `http://域名:8000/all` 访问。


## 📦 数据库说明

* 默认数据库为 **SQLite**，无需额外配置，足以满足大多数使用场景
* 也支持 **MySQL / MongoDB**，请参考 [配置项说明](/docs/configuration)

---

## 📖 更多

* 如何适配博客友链页面？ → 查看 [进阶攻略](/docs/advanced)
* 如何更新版本？ → 查看 [版本更新](/docs/upgrade)

---
