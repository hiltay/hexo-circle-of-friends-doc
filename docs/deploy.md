# 项目部署

项目部署分为后端部署和前端部署。

后端部署概览：

后端部署目前提供github，server，docker三种方式，数据库可以选择leancloud，mysql，sqlite，mongodb。

你可以自由搭配它们，如下表所示。

自5.x版本以后，leancloud不再作为默认存储，改为更简单易用的sqlite作为默认。

|            | leancloud存储    | mysql存储    | sqlite存储                | mongodb存储    |
| ---------- | ---------------- | ------------ | ------------------------- | -------------- |
| github部署 | github+leancloud | github+mysql | github+sqlite（默认选项） | github+mongodb |
| server部署 | server+leancloud | server+mysql | server+sqlite             | server+mongodb |
| docker部署 | docker+leancloud | docker+mysql | docker+sqlite             | docker+mongodb |

另外，这些后期都能更改，只需要在文件中配置一下，就可以切换到其他部署方案。[查看教程](backenddeploy.md?id=后端部署)

前端部署概览：

前端部署比较简单，生成一个页面，引入css和js文件以及配置api即可，[查看教程](frontenddeploy?id=前端部署)



如果你有选择困难症，请参考如下几条进行选择：

- 总体来说，私有部署（server/docker）稳定性高于github部署
- sqlite是本地数据库，部署简单且速度较快，建议优先考虑
- mongodb、mysql在超大批量数据的表现优于sqlite（在朋友圈的使用场景下，远达不到sqlite的使用瓶颈）
- mongodb有免费的云服务，没有服务器也不想用sqlite，则可以选择github+mongodb，https://www.mongodb.com/atlas/database
- leancloud位于海外，访问速度较慢，除非没得选，否则不推荐

