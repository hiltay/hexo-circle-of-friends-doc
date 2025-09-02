# 极简模式

> 见 [issue 69](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/69)，推出了 **极简模式**。
> 该模式旨在用最简方式运行程序，并输出最简化结果，适合只需要获取基础数据的用户。

## 部署步骤

### 1. Fork 仓库

前往 GitHub 仓库：[hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends)，点击 **Fork** 将项目复制到你自己的账户下。

### 2. 修改配置文件

进入你 Fork 后的仓库，找到 `fc_settings.yaml` 文件，修改以下部分：

```yaml
LINK:
  - { link: "https://www.yyyzyyyz.cn/link/", theme: "butterfly" }
```

* `link`：改为你的友链页面地址
* `theme`：选择你的博客主题，目前常用的有 `butterfly` 等

### 3. 开启极简模式

编辑 `.github/workflows/CI.yml` 文件，将 **SIMPLE\_MODE** 设置为 `true`：

```yaml
SIMPLE_MODE: true   # 极简模式是否开启
```

### 4. 配置 Actions 权限

1. 打开仓库 **Settings → Actions → General**
2. 找到 **Workflow permissions**
3. 勾选 **Read and write permissions**

如图所示：

![GitHub Actions Permissions](/imgs/docs/deployment/simplemode/01.png)

### 5. 启用 GitHub Actions

1. 打开仓库 **Actions** 页面
2. 点击 **“I understand my workflows, go ahead and enable them”**
3. 找到 `update-friends-posts` workflow，并点击 **Enable workflow**

参考截图：

![GitHub Actions Run](/imgs/docs/deployment/simplemode/02.png)

### 6. 手动运行 Workflow

1. 打开 `update-friends-posts` workflow 页面
2. 点击 **Run workflow → Run workflow**
3. 等待执行完成

参考截图：

![GitHub Actions Run](/imgs/docs/deployment/simplemode/03.png)
![GitHub Actions Run](/imgs/docs/deployment/simplemode/04.png)

### 7. 获取数据

运行完成后，仓库会生成并上传 `data.json` 文件。
该文件内容与 API `/all` 返回的结果一致，用户可直接下载或调用，供后续前端页面或其他用途使用。

## 总结

* 极简模式仅需少量配置即可运行
* 输出数据为 `data.json`，无需额外的后端部署
* 适合对性能和功能要求不高，只需获取基础友链数据的用户