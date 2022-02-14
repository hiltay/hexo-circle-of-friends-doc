# 项目部署

项目部署分为后端部署和前端部署。

后端部署概览：

后端部署目前提供github，server，docker三种方式，数据库可以选择leancloud，mysql，sqlite，mongodb。

你可以自由搭配它们，如下表所示。

|            | leancloud存储    | mysql存储    | sqlite存储    | mongodb存储    |
| ---------- | ---------------- | ------------ | ------------- | -------------- |
| github部署 | github+leancloud | github+mysql | github+sqlite | github+mongodb |
| server部署 | server+leancloud | server+mysql | server+sqlite | server+mongodb |
| docker部署 | docker+leancloud | docker+mysql | docker+sqlite | docker+mongodb |

另外，这些后期都能更改，只需要在文件中配置一下，就可以切换到其他部署方案。[查看教程](backenddeploy.md?id=后端部署)

前端部署概览：

前端部署比较简单，生成一个页面，引入css和js文件以及配置api即可，[查看教程](frontenddeploy?id=前端部署)







