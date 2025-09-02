# 常见问题

## github 部署的相关问题

### 如何添加 Secret？

点击仓库的`Settings-->Secrets and variables-->Actions-->New repository secret`

![获取secret_key](/imgs/docs/problems/获取sk.png)

### sqlite 或者 data.json 无法上传至仓库的问题

见[issues/87](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/87)，github 仓库更新了默认的权限，fork 后的仓库似乎只保留`read`权限，导致仓库无法上传文件。

可尝试以下方案：

点击仓库的`setting-->Actions-->General-->勾选Read and write permissions-->Save`

![](/imgs/docs/problems/actions权限修改.png)

## server 部署的相关问题

### 如何安装 git？

https://git-scm.com/downloads

### 如何取消运行？

```bash
chmod +x && ./stop.sh
```

### 如何查看运行日志？

日志文件保存在`./log/`下。

## 其他问题

### 项目名称里有 hexo，只支持 hexo 吗？其它博客框架/主题是否支持呢？

当然支持！由于本项目一开始诞生于 hexo 博客圈，因此定名为`hexo-circle-of-friends`，但是**程序逻辑是通用的**，要适配其他类型的博客，请参考[进阶攻略](advanced.md)。

### mysql 数据库字符集报错

见[issues/25](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/25)，如果所爬取的数据中含有 emoji 表情，请设置 mysql 字符集为`utf8mb4`，否则会报`Incorrect string value`错误。
