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

5.x版本，如果使用yyyz前端方案，在有新版本时会收到更新提示。

前往[前端部署](frontenddeploy)获取最新cdn。

## 导出配置文件和数据

更新版本时，为了保留配置，需要手动将配置导出，（使用sqlite的，还需要将数据库文件导出）。

server部署：

直接保存项目根目录下的

- `data.db`：sqlite数据库
- `dump_settings.yaml`：通过管理面板操作后的项目配置
- `env.json`：通过管理面板操作后的环境变量

docker部署：

```bash
docker cp circle:/home/fcircle_src/data.db [宿主机需要导出的路径]
docker cp circle:/home/fcircle_src/dump_settings.yaml [宿主机需要导出的路径]
docker cp circle:/home/fcircle_src/env.json [宿主机需要导出的路径]
# 比如，将他们保存在/tmp/fcircle_bak/下，复制如下命令运行：
mkdir -p /tmp/fcircle_bak/ && \
docker cp circle:/home/fcircle_src/data.db /tmp/fcircle_bak/ && \
docker cp circle:/home/fcircle_src/dump_settings.yaml /tmp/fcircle_bak/ && \
docker cp circle:/home/fcircle_src/env.json /tmp/fcircle_bak/
```



## 注意事项

- 版本更新后，如果使用docker或者server部署，后端需要重新部署一次，具体可参考[常见问题](problems)里`如何取消部署`相关内容。
- 版本更新后，如遇bug，尝试将数据库旧数据删掉后重新运行一次爬虫

如果觉得本项目不错，请帮忙点个⭐Star吧，既是对我们的支持，还可以随时关注友链朋友圈的更新情况

点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧，点个⭐Star吧~~