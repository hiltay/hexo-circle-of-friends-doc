# 接口说明：获取指定朋友文章列表

## 基本信息

* **请求方式**：`GET`
* **请求路径**：`/post`
* **功能描述**：根据朋友链接获取该朋友的所有文章，支持 **随机朋友** 或 **指定朋友**，并可按时间规则排序。

## 请求参数

| 参数名  | 类型      | 位置    | 必填 | 说明               | 默认值     | 取值范围                  |
| ---- | ------- | ----- | -- | ---------------- | ------- | --------------------- |
| link | string  | query | 否  | 朋友链接地址，为空时随机选择   | null    | 合法的 URL 或空            |
| num  | integer | query | 否  | 返回文章数量，`-1` 表示全部 | -1      | -1 \| 1 \~ ∞          |
| rule | string  | query | 否  | 排序规则             | created | `created` 或 `updated` |

## 响应参数

### 成功响应 (200)

* **说明**：成功返回该朋友的文章列表。
* **返回格式**：`application/json`
* **示例**：

```json
{
  "statistical_data": {
    "name": "葱苓sama",
    "link": "https://blog.ciraos.top",
    "avatar": "https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp",
    "article_num": 5
  },
  "article_data": [
    {
      "floor": 1,
      "title": "ubuntu桌面版安装字体",
      "created": "2025-07-12",
      "updated": "2025-07-12",
      "link": "https://blog.ciraos.top/posts/ubuntu/install-fonts",
      "author": "葱苓sama",
      "avatar": "https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp"
    }
  ]
}
```

### 失败响应

#### 400 参数错误

* **说明**：`rule` 参数错误，应为 `'created'` 或 `'updated'`。
* **示例**：

```json
{
  "message": "rule error, please use 'created'/'updated'"
}
```

#### 404 未找到朋友或文章

* **说明**：未匹配到对应的朋友或该朋友没有文章。
* **示例**：

```json
{
  "message": "not found"
}
```

#### 422 验证错误

* **说明**：请求参数验证失败。
* **示例**：

```json
{
  "detail": [
    {
      "loc": ["string", 0],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

## 使用说明

* `link` 为空时将随机选择一个朋友，返回该朋友的文章。
* `num = -1` 表示返回该朋友的所有文章，否则限制返回数量。
* `rule` 决定排序规则：

  * `created` → 按创建时间排序
  * `updated` → 按更新时间排序
* 返回结果包含 **朋友统计信息** 和 **文章详情列表**，方便前端展示「某个朋友的全部文章」。
