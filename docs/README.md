# 友链朋友圈

> 最后更新于：2022-08-25

你是否经常烦恼于友链过多但没有时间浏览？那么友链朋友圈将解决这一痛点。你可以随时获取友链网站的更新内容，并了解友链的活跃情况 。

### 使用leancloud数据库存储的用户注意：

以下内容来自于[leancloud官网](https://leancloud.app/)，如果使用leancloud的朋友圈部署受到影响，建议及时切换存储方式，或按照官方提示操作。

无服务器，可以切换到vercel+sqlite或者vercel+mongodb，详见[项目部署](deploy.md)

> ```
> # 8 月 1 日起，LeanCloud 国际版共享域名不再向中国大陆提供服务
> 为履行合规责任，降低平台风险，**LeanCloud 国际版共享域名将于 2022 年 8 月 1 日起不再向中国大陆的最终用户提供服务，国际版共享域名仅服务于海外用户。**
> 
> ### 影响范围
> 
> 8 月 1 日以后，国内的 IP 无法通过共享域名调用国际版的数据存储、即时通信、云引擎等全部服务，请求会响应错误码 1020。
> 
> ### 开发者需要做什么
> 
> 如果国际版应用主要服务海外用户，那么不需要做任何处理。如果应用的用户主体是在中国大陆，需要**使用自己的域名**或者**将应用数据迁移至国内节点**，下面依次介绍这两种方式。
> 
> **1. 使用自己的域名**
> 
> 参考[域名绑定指南](https://leancloud.cn/docs/custom-api-domain-guide.html)文档。使用数据存储、即时通信、推送与短信服务的用户，需要在控制台绑定 API 自定义域名；使用云引擎服务的用户，需要在控制台绑定云引擎自定义域名。
> 
> **需要注意，如果你在 2020 年 10 月之前绑定过自定义域名，需要修改域名解析至控制台上显示的最新的 CNAME 地址，否则从中国大陆的访问会被禁止！**新的地址可以在 应用设置 > 域名绑定 处看到。
> 
> **2.将应用数据迁移至国内节点**
> 
> 可以将应用数据迁移至国内节点（华北节点或华东节点），数据的迁移方式是将[国际版数据导出后再导入到国内节点](https://leancloud.cn/docs/account-and-dashboard-faq.html#hash-1060823898)的应用下。
> 
> 需要注意：
> 
> - - 数据存储服务的结构化数据支持导出与导入。
>   - 即时通信服务的会话记录与聊天记录无法导出。
>   - 云引擎需要重新部署。
>   - 短信服务的签名与模板需要重新审核。
>   - 推送厂商设置、开发证书上传、敏感词库上传等应用的设置信息需要重新配置。
>   - 国内节点的应用需要实名认证后使用，并且需要 [绑定自己的已备案域名](https://leancloud.cn/docs/custom-api-domain-guide.html)。
> 
> 另外，工信部规定，网站接入多个云服务商时，需要在各云服务商处接入备案。 如果应用使用的自定义域名没有办理接入备案，请通过[工单](https://leanticket.cn/)提交相应资料，以便我们协助办理接入备案。提交工单时，分类请选择 **域名与备案** > **备案接入（企业）** 或 **备案接入（个人）**。详见[接入备案常见问题](https://forum.leancloud.cn/t/topic/24998)。
> 
> 如有疑问，欢迎通过[工单](https://www.leanticket.cn/)或[论坛](https://forum.leancloud.cn/latest)和我们联系。
> 
> 
> 
> The LeanCloud Team
> ```



## 功能概览

- 支持 gitee 和 github 上的 issues 友链获取
- 支持butterfly、volantis、matery、sakura、fluid、nexmoe、Yun、stun、stellar、next主题的友链和文章获取
- 支持feed订阅规则，如atom、rss等规则（支持wordpress类型的博客）
- 支持自定义订阅后缀
- 支持站点屏蔽
- 支持按照更新时间和创建时间排序
- 支持未适配的hexo主题和非hexo用户使用，在配置项选择开启配置项友链
- 额外的友链页同时爬取
- 支持添加HTTP代理
- 多种数据存储，提供leancloud,mysql,sqlite,mongodb存储方式
- 多种方式部署，提供github,server,docker部署方式
- 将api整合到主仓库
- 新增友链获取策略的common规则
- 新增api方式的配置项友链
- 将额外友链页和环境变量友链统一为LINK，在配置文件中配置

## 快速开始

[效果预览](preview.md)

[项目部署](deploy.md)

[配置项说明](settings.md)

[常见问题](problems.md)

[版本更新](update.md)

[api接口说明](apidoc.md)

[开发文档](developmentdoc.md)

[联系我们](contactus.md)

## 贡献

欢迎协助完善本文档：https://github.com/hiltay/hexo-circle-of-friends-doc

