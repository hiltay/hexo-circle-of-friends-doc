# 友链朋友圈

> 最后更新于：2025-07-19

你是否经常烦恼于友链过多但没有时间浏览？那么友链朋友圈将解决这一痛点。你可以随时获取友链网站的更新内容，并了解友链的活跃情况。

<div class="fc"><img src="./fcircle.png" alt="fcircle" /></div>
<style>
.fc{
display: flex;
align-items: center;
justify-content: center;
}
</style>

在经历将近一年多没有更新和维护之后，yyyz也是终于抽出时间维护和更新。经过这么长时间，我对本项目的理解有了变化：返璞归真，能简则简。删除了管理面板、冗余的api，仅保留用户所需的必要功能，同时极大地简化了部署流程，不再需要额外配置过多环境变量。同时，项目除Vercel部分仍使用fastapi外，其余代码全部采用Rust重写，相比于python实现来说，运行效率更高，也无需为了各种python版本和package依赖烦恼。

### 6.0.0 改动说明：
- 简化部署方式，简化环境变量，甚至无需配置任何环境变量即可运行
- 支持用户自定义抓取规则，兼容页面更多，更灵活
- 移除了leancloud，默认的sqlite即可满足大部分需求
- 跨平台支持
- 优化部署脚本，一键部署和停止

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
