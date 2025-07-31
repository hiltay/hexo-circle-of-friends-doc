<p align="center"><img src="./fcircle.png" alt="fcircle" /></p>

<h1 align="center">友链朋友圈</h1>

你是否经常烦恼于友链过多但没有时间浏览？那么友链朋友圈将解决这一痛点。你可以随时获取友链网站的更新内容，并了解友链的活跃情况。

在经历将近一年多没有更新和维护之后，yyyz 也是终于抽出时间维护和更新。经过这么长时间，我对本项目的理解有了变化：返璞归真，能简则简。删除了管理面板、冗余的 api，仅保留用户所需的必要功能，同时极大地简化了部署流程，不再需要额外配置过多环境变量。同时，项目除 Vercel 部分仍使用 fastapi 外，其余代码全部采用 Rust 重写，相比于 python 实现来说，运行效率更高，也无需为了各种 python 版本和 package 依赖烦恼。

### `v6.0.3` 更新说明：

- 🤖 **新增文章摘要AI生成功能**：支持Gemini和SiliconFlow多种AI模型，智能生成文章摘要
- 🚀 **性能优化**：实现内容哈希缓存机制，避免重复生成摘要，节省API调用成本
- 📦 **版本检测**：新增版本检测功能

## 快速开始

[效果预览](preview.md)

[项目部署](deploy.md)

[配置项说明](settings.md)

[常见问题](problems.md)

[版本更新](update.md)

[api 接口说明](apidoc.md)

[开发文档](developmentdoc.md)

[联系我们](contactus.md)

## 贡献

[为项目做贡献](contributing)
