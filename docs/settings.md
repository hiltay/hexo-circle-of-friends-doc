# 配置项说明

主要分为项目配置和环境变量配置。

## 项目配置

项目配置在仓库中的`/hexo_circle_of_friends/fc_settings.yaml`文件：

请根据文件中的注释，结合本节说明，修改其中的内容。

- **OUTDATE_CLEAN**：默认为60。超过这个值（距今超过60天）的文章，会在数据库中被删除。

- **LINK**：起始的友链页面和爬取策略，支持添加多个，详细见注释说明。

- **SETTINGS_FRIENDS_LINKS**：配置项友链。这是一种通用的方法，如果程序不支持爬取你的友链页，请打开此项。

  - 其中**list**字段格式为：

  ```python
  [友链名,友链主页地址,友链头像]
  # 或者
  [友链名,友链主页地址,友链头像,自定义订阅后缀]
  ```

  - 关于**json_api**选项，4.3.0以后支持通过提供api对友链进行配置，返回格式必须为json，格式如下：

    ```json
    {"friends":[[友链1],[友链2],[友链3],[友链4]....]}
    ```

    其中，友链1、友链2中的内容格式同**list**字段。

- **GITEE_FRIENDS_LINKS**：从gitee issues中获取友链信息，详见yaml文件中的注释。

- **GITHUB_FRIENDS_LINKS**：从github issues中获取友链信息，详见yaml文件中的注释。

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
    
- **HTTP_PROXY**：如果想为爬虫设置HTTP代理，将此项设为True，然后根据你选择的数据库不同，添加环境变量。名称为`PROXY`，值为`[IP]:[端口]`，比如：192.168.1.106:8080。**注意，目前只支持添加一个HTTP代理。**

- **DATABASE**：数据的存储方式，目前支持将数据保存在`leancloud`、`mysql`、`sqlite`、`mongodb`，默认为`sqlite`。

- **DEPLOY_TYPE**：整个项目的部署方式，目前支持将项目部署在`github`、`server`、`docker`，默认为`github`。

## 环境变量配置

### github部署

5.x版本可以在前端管理面板操作即可。你也可以在你fork的仓库下创建`secret`，手动添加。

所有的secret可以在`/.github/workflows/main.yml`文件中查看。

```yaml
env:
  # 在这里查看需要添加的secret
  # 通用配置
  STORAGE_TYPE: ${{ secrets.STORAGE_TYPE }}  # 根据你选择的存储添加：sqlite、leancloud、mysql、mongodb
  PROXY: ${{ secrets.PROXY }} # 可选，http代理
  # leancloud、mysql、sqlite配置三选一即可
  # leancloud配置
  APPID: ${{ secrets.APPID }}
  APPKEY: ${{ secrets.APPKEY }}
  # mysql配置
  MYSQL_USERNAME: ${{ secrets.MYSQL_USERNAME }} # 登录用户名
  MYSQL_PASSWORD: ${{ secrets.MYSQL_PASSWORD }} # 登录密码
  MYSQL_IP: ${{ secrets.MYSQL_IP }} # 数据库IP地址
  MYSQL_PORT: ${{ secrets.MYSQL_PORT }} # 数据库端口号
  MYSQL_DB: ${{ secrets.MYSQL_DB }} # 要连接到的库的名称
  # sqlite配置，用于将db文件上传到github仓库
  GITHUB_NAME: ${{ secrets.GH_NAME }} # 你的github昵称
  GITHUB_EMAIL: ${{ secrets.GH_EMAIL }} # 你的github邮箱
  GITHUB_TOKEN: ${{ secrets.GH_TOKEN }} # github token
  # mongodb配置
  MONGODB_URI: ${{ secrets.MONGODB_URI }}  # mongodb URI 支持'mongodb://'和'mongodb+srv://'
```

根据你的存储方式不同，所需要的secret也有所区别：

- 如果使用sqlite，仓库需要添加的secret为：`STORAGE_TYPE`，`GH_NAME`，`GH_EMAIL`，`GH_TOKEN`，其中`STORAGE_TYPE`的值为`sqlite`。

- 如果使用leancloud，仓库需要添加的secret为：`STORAGE_TYPE`，`APPID`，`APPKEY`，其中`STORAGE_TYPE`的值为`leancloud`。
- 如果使用mysql，仓库需要添加的secret为：`STORAGE_TYPE`，`MYSQL_USERNAME`，`MYSQL_PASSWORD`，`MYSQL_IP`，`MYSQL_PORT`，`MYSQL_DB`，其中`STORAGE_TYPE`的值为`mysql`。
- 如果使用mongodb，仓库需要添加的secret为：`STORAGE_TYPE`，`MONGODB_URI`，其中`STORAGE_TYPE`的值为`mongodb`。

github环境变量设置完毕后，还需要设置vercel环境变量，其中必须添加`VERCEL_ACCESS_TOKEN`和`GH_TOKEN`，以提供后端管理的访问权限，同样根据你的存储方式不同：

- 如果使用sqlite，vercel需要添加的环境变量为：`VERCEL_ACCESS_TOKEN`，`GH_TOKEN`，`GH_NAME`，`GH_EMAIL`
- 如果使用leancloud，vercel需要添加的环境变量为：`VERCEL_ACCESS_TOKEN`，`GH_TOKEN`，`APPID`，`APPKEY`
- 如果使用mysql，vercel需要添加的环境变量为：`VERCEL_ACCESS_TOKEN`，`GH_TOKEN`，`MYSQL_USERNAME`，`MYSQL_PASSWORD`，`MYSQL_IP`，`MYSQL_PORT`，`MYSQL_DB`
- 如果使用mongodb，vercel需要添加的环境变量为：`VERCEL_ACCESS_TOKEN`，`GH_TOKEN`，`MONGODB_URI`

### server部署/docker部署

5.x版本在前端管理面板操作即可。如果一定要手动管理，可在项目根目录新建一个`env.json`文件，进行手动配置：

```json
{
  "PROXY": "",
  "APPID": "",
  "APPKEY": "",
  "MYSQL_USERNAME": "",
  "MYSQL_PASSWORD": "",
  "MYSQL_IP": "",
  "MYSQL_PORT": "",
  "MYSQL_DB": "",
  "GH_NAME": "",
  "GH_EMAIL": "",
  "GH_TOKEN": "",
  "MONGODB_URI": "",
  "EXPOSE_PORT": 8000,
  "RUN_PER_HOURS": 6
}
```

每个字段的说明见上文。
