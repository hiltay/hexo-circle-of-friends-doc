# 接口说明：获取完整统计信息与文章列表

## 请求方式

```http
GET /all
```

## 接口描述

该接口用于获取数据库中的**统计信息**和**文章列表**。
支持分页（`start`、`end`）和排序（`rule`），可用于前端展示友链朋友圈的完整数据。

## 请求参数

| 参数名     | 类型      | 位置    | 默认值       | 说明                                           |
| ------- | ------- | ----- | --------- | -------------------------------------------- |
| `start` | integer | query | `0`       | 起始位置（从 0 开始计数）。                              |
| `end`   | integer | query | `-1`      | 结束位置，`-1` 表示不限制（返回全部）。                       |
| `rule`  | string  | query | `updated` | 排序规则，可选：`created`（按创建时间） 或 `updated`（按更新时间）。 |

⚠️ 注意：

* `start >= 0`
* `rule` 参数只允许 `created` 或 `updated`，否则返回 `400` 错误。

## 成功响应

**状态码：200**

返回 JSON 数据，包含统计信息和文章列表。

### 响应示例

```json
{
  "statistical_data": {
    "friends_num": 34,
    "active_num": 19,
    "error_num": 15,
    "article_num": 31,
    "last_updated_time": "2025-01-01 12:00:00"
  },
  "article_data": [
    {
      "floor": 1,
      "title": "Wave Terminal 多功能开源终端",
      "created": "2025-07-31",
      "updated": "2025-07-31",
      "link": "https://blog.example.com/post",
      "author": "张三",
      "avatar": "https://example.com/avatar.jpg",
      "summary": "这是一篇关于终端工具的文章...",
      "ai_model": "qwen3",
      "summary_created_at": "2025-01-01 10:00:00",
      "summary_updated_at": "2025-01-01 10:00:00"
    }
  ]
}
```

### 字段说明

#### 1. `statistical_data`（统计信息）

| 字段名                 | 类型     | 说明         |
| ------------------- | ------ | ---------- |
| `friends_num`       | int    | 已收录的友链数量   |
| `active_num`        | int    | 正常运行的友链数量  |
| `error_num`         | int    | 异常/失效的友链数量 |
| `article_num`       | int    | 总文章数       |
| `last_updated_time` | string | 数据最后更新时间   |

#### 2. `article_data`（文章列表）

| 字段名                  | 类型     | 说明            |
| -------------------- | ------ | ------------- |
| `floor`              | int    | 文章序号（楼层数）     |
| `title`              | string | 文章标题          |
| `created`            | string | 创建时间          |
| `updated`            | string | 更新时间          |
| `link`               | string | 文章链接          |
| `author`             | string | 作者名称          |
| `avatar`             | string | 作者头像链接        |
| `summary`            | string | 文章摘要          |
| `ai_model`           | string | 生成摘要所用的 AI 模型 |
| `summary_created_at` | string | 摘要首次生成时间      |
| `summary_updated_at` | string | 摘要最后更新时间      |

## 错误响应

| 状态码     | 描述      | 示例                                                                                                         |
| ------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| **400** | 请求参数错误  | `{"message": "rule error, please use 'created'/'updated'"}`                                                |
| **422** | 参数校验失败  | `{"detail": [{"loc":["query","start"],"msg":"value is not a valid integer","type":"type_error.integer"}]}` |
| **500** | 服务器内部错误 | `{"message": "数据库连接失败"}`                                                                                   |

## 使用示例

### 1. 获取全部文章，按更新时间排序（默认）

```bash
curl "https://yourdomain.com/all"
```

### 2. 获取第 0–10 条数据，按创建时间排序

```bash
curl "https://yourdomain.com/all?start=0&end=10&rule=created"
```