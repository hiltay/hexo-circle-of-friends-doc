# 常见问题

## github部署的相关问题

### 如何创建leancloud数据库？

前往[leancloud国际版官网](https://leancloud.app/)注册账号并登录。

前往[控制台](https://console.leancloud.app/apps)新建应用，应用名称无限制

![QQ截图20220205075127](QQ截图20220205075127.png)

### 如何获取`APPID`和`APPKEY`？

进入leancloud应用中，点击`设置-->应用凭证`，获取`AppID`和`AppKey`，

![QQ截图20220205075547](QQ截图20220205075547.png)

## server部署的相关问题

### 如何安装python环境？

安装依赖：

```bash
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel yum vim gcc
```

安装python

```bash
wget https://www.python.org/ftp/python/3.8.8/Python-3.8.8.tgz
tar -zxf Python-3.8.8.tgz && cd Python-3.8.8
./configure --prefix=/usr/local/python3
make && make install
```

建立软连接

```bash
ln -s /usr/local/python3/bin/python3.8 /usr/bin/python3
ln -s /usr/local/python3/bin/pip3.8 /usr/bin/pip3
```

验证：

```bash
python3 --version
```

出现版本号即安装成功。

### 如何安装git？

```bash
yum install -y git
```

### 如何取消运行？

如果需要关闭爬虫和api，需要找到其进程号

```bash
ps aux
```

![QQ截图20220205222725](QQ截图20220205222725.png)

杀掉对应的进程即可

```bash
kill -9 7584
kill -9 7585
```

4.3.1以上的版本增加了一个自动部署脚本，使用`python3 deploy.py`命令可以打开它，里面会有一键取消运行的选项。

### 如何查看运行日志？

爬虫和api程序的运行日志文件分别保存在`/tmp/crawler_stdout.log`和`/tmp/api_stdout.log`中，自定义日志信息在`/tmp/crawler.log`中，可以通过命令查看：

```bash
cat /tmp/api_stdout.log
cat /tmp/crawler_stdout.log
cat /tmp/crawler.log
```

## docker部署的相关问题

### 如何安装git？

```bash
yum install -y git
```

### 如何安装docker？

安装依赖：

```bash
yum install -y yum-utils device-mapper-persistent-data lvm2
```

配置yum源

```bash
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

安装`docker`

```bash
yum update -y && yum install -y docker-ce
```

开启docker服务

```bash
systemctl start docker
```

查看docker版本

```bash
docker -v
```

设置开机自启动

```bash
systemctl enable docker
```

### 如何查看运行日志？

爬虫和api程序的运行日志文件分别保存在`/tmp/crawler_stdout.log`和`/tmp/api_stdout.log`中，自定义日志信息在`/tmp/crawler.log`中，可以通过命令查看：

```bash
cat /tmp/api_stdout.log
cat /tmp/crawler_stdout.log
cat /tmp/crawler.log
```

### 如何取消运行？

```bash
docker ps -a # 查看容器
docker stop 容器id && docker rm 容器id  # 删掉对应容器
docker rmi 镜像id  # 删掉镜像
```

4.3.1以上的版本增加了一个自动部署脚本，使用`python3 deploy.py`命令可以打开它，里面会有一键取消运行的选项。

## 其他问题

### mysql数据库字符集报错

见[issues/25](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/25)，如果所爬取的数据中含有emoji表情，请设置mysql字符集为`utf8mb4`，否则会报`Incorrect string value`错误。

### 5.x前端在volantis主题显示的问题

见[issues/65](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends/issues/65)， 修改`source/fcircle/index.md` 文件如下：

```markdown
---
title: 朋友圈
date: 2022-10-09 00:38:16
---

<div id="app"></div>
<script>
    let UserConfig = {
        // 填写你的api地址
        private_api_url: 'http://192.168.142.88:8000/',
        // 点击加载更多时，一次最多加载几篇文章，默认10
        page_turning_number: 10,
        // 头像加载失败时，默认头像地址
        error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c',
        // 进入页面时第一次的排序规则
        sort_rule: 'created'
    }
</script>
<style>
article#page {
    transform: none;
    transition: none;
    backdrop-filter: none;
}
</style>
<script type="text/javascript" src="https://unpkg.com/browse/imgscdn@latest/fcircle/app.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/browse/imgscdn@latest/fcircle/bundle.js"></script>
```







