# 版本更新

## github版本更新：

4.2.0以后的版本升级：发布新版本后，您只需要在您fork的仓库点击fetch即可更新到最新版本。（如果遇到冲突，尝试重新fork，或者手动解决）

![img.png](img.png)

4.2.0以前的版本升级：建议重新fork仓库

## server/docker版本更新

可以尝试直接`git pull`：

```bash
git pull origin main
```

> [可选项]：如果拉取失败，尝试克隆仓库：
>
> ```bash
> git clone https://github.com/Rock-Candy-Tea/hexo-circle-of-friends
> ```

然后运行根目录的`deploy.py`

```bash
python3 deploy.py
```

根据提示，取消对应部署，然后重新部署即可。

如果更新遇到问题，请[及时反馈](contactus)。

## 前端更新

5.x每次后端更新时，如果使用yyyz前端方案，同时注意检查前端版本是否更新，前端建议更新到最新版本，以获得更好的体验。



## 注意事项

- 版本更新后，如果使用docker或者server部署，后端需要重新部署一次，具体可参考[常见问题](problems)里`如何取消部署`相关内容。
- 版本更新后，如遇bug，尝试将数据库旧数据删掉后重新运行一次爬虫

如果觉得本项目不错，请帮忙点个⭐Star吧，既是对我们的支持，还可以随时关注友链朋友圈的更新情况

点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧~~