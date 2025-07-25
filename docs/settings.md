# 配置项说明

主要分为项目配置和环境变量配置。

## 项目配置

项目配置文件为`fc_settings.yaml`：

请根据文件中的注释，结合本节说明，修改其中的内容。

- **OUTDATE_CLEAN**：默认为 60。超过这个值（距今超过 60 天）的文章，会在下一次程序运行后，从数据库中被删除。

- **LINK**：起始的友链页面和爬取策略，支持添加多个，详细见注释说明。

- **SETTINGS_FRIENDS_LINKS**：配置项友链。这是一种通用的方法，如果程序不支持爬取你的友链页，请打开此项。

  - 其中**list**字段格式为：

  ```python
  [友链名,友链主页地址,友链头像]
  # 或者
  [友链名,友链主页地址,友链头像,自定义订阅后缀]
  ```

  - 关于**json_api**选项，4.3.0 以后支持通过提供 api 对友链进行配置，返回格式必须为 json，格式如下：

    ```json
    {"friends":[[友链1],[友链2],[友链3],[友链4]....]}
    ```

    其中，友链 1、友链 2 中的内容格式同**list**字段。

- **BLOCK_SITE**：屏蔽站点，配置在这里的网址不会被爬取。比如，你的友链页添加了自己，并且不想被爬虫获取，就可以把自己的主页地址屏蔽掉。**支持正则表达式**，举例：
  ```python
  # block site list
  # 添加屏蔽站点
  BLOCK_SITE = [
      "https://example.com/"  # 屏蔽https://example.com/
      r".*\.com", # 含有.com的全部屏蔽
      r"^http://", # http开头的全部屏蔽
  ]
  ```
- **BLOCK_SITE_REVERSE**：是否反向屏蔽站点，true 表示反向屏蔽，false 表示正向屏蔽，默认为 false。

- **MAX_POSTS_NUM**：每个友链最多获取几篇文章，默认为`5`。

- **CRON**：（仅自托管有效）定时任务配置，采用 cron 表达式。默认为每天 0 点、6 点、12 点、18 点、21 点执行一次。
- **SIMPLE_MODE**: （仅 github+vercel 部署）极简模式是否启用。

- **DATABASE**：数据的存储方式，目前支持`mysql`、`sqlite`、`mongodb`，默认为`sqlite`。

- **DEPLOY_TYPE**：整个项目的部署方式，目前支持将项目部署在`github`、`server`，默认为`github`。

## 环境变量配置

### 如果你是 github 部署

所有的 secret 可以在`.github/workflows/CI.yml`文件中查看。

```yaml
env:
  SIMPLE_MODE: false # 极简模式是否开启，默认false
  DATABASE: sqlite # 默认使用sqlite
  PROXY: ${{ secrets.PROXY }} # 可选，http代理
  # mysql、sqlite、mongodb配置三选一即可
  # mysql配置
  MYSQL_URI: ${{ secrets.MYSQL_URI }} # MySQL URI
  # mongodb配置
  MONGODB_URI: ${{ secrets.MONGODB_URI }} # mongodb URI 支持'mongodb://'和'mongodb+srv://'
  TZ: Asia/Shanghai
```

添加 secret 的方法请查看：[如何添加 Secret？](problems.md?id=如何添加Secret？)

你需要关注的环境变量如下：

- **PROXY**：（可选）配置 http 代理，默认为空
- **MYSQL_URI**：（可选）仅在`fc_settings.yaml`中设置`DATABASE=mysql`时，需要添加，默认为空
- **MONGODB_URI**：（可选）仅在`fc_settings.yaml`中设置`DATABASE=mongodb`时，需要添加，默认为空

### 如果你是自托管部署

可以使用 export 设置临时环境变量，也可以设置永久环境变量。

另外，还可以在程序同目录新建一个`.env`文件，进行手动配置，如：

```
MYSQL_URI=mysql://root:123456@127.0.0.1:3306/pyq
PROXY=127.0.0.1:7890
MONGODB_URI=mongodb://root:123456@127.0.0.1:27017
```

`.env`文件优先级最高，会覆盖环境变量中已有的配置。
