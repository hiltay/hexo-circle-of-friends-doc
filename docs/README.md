# 友链朋友圈

> 最后更新于：2023-02-11

你是否经常烦恼于友链过多但没有时间浏览？那么友链朋友圈将解决这一痛点。你可以随时获取友链网站的更新内容，并了解友链的活跃情况 。

<div class="fc"><img src="./fcircle.png" alt="fcircle" /></div>
<style>
.fc{
display: flex;
align-items: center;
justify-content: center;
}
</style>


### vercel遭遇域名污染的通知

2022-8-27，`*.vercel.app`在中国大陆遭遇污染导致无法访问，友链朋友圈的vercel部署也会受到影响，可以通过解析到自定义域名来解决，或者切换部署方式。

### leancloud国际版共享域名不再向中国大陆提供服务的通知

2022 年 8 月 1 日起，LeanCloud 国际版共享域名不再向中国大陆提供服务。可能会对使用leancloud存储的用户造成影响，可以通过使用自己的域名或者切换部署方式来解决。



由于vercel和leancloud陆续出现问题，因此不再推荐github+vercel+leancloud的部署方式。

建议使用私有部署规避风险，对于无服务器用户，可以尝试切换到github+vercel+sqlite或者vercel+mongodb，切换部署方式详见[项目部署](deploy.md)。



## 功能概览

- 新增前端管理面板，告别繁琐的配置，管理朋友圈更加方便
- 增加极简模式
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
