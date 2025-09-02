# 接口说明：获取所有友链

## 基本信息

* **请求方式**：`GET`
* **请求路径**：`/friend`
* **功能描述**：从数据库中获取所有友链信息，返回包含名称、链接和头像的完整列表。

## 请求参数

该接口 **不需要** 任何请求参数。

## 响应参数

### 成功响应 (200)

* **说明**：成功返回友链列表。
* **返回格式**：`application/json`
* **示例**：

```json
[
  {
    "name": "Jerry",
    "link": "https://butterfly.js.org/",
    "avatar": "https://butterfly.js.org/img/avatar.png"
  },
  {
    "name": "Alice",
    "link": "https://alice.blog/",
    "avatar": "https://alice.blog/avatar.jpg"
  }
]
```

### 失败响应

#### 404 未找到友链

* **说明**：数据库中不存在任何友链记录。
* **示例**：

```json
{
  "message": "not found"
}
```

#### 500 服务器内部错误

* **说明**：服务器运行出错，例如数据库异常。
* **示例**：

```json
{
  "message": "server internal error"
}
```

## 使用说明

* 该接口通常用于前端展示友链页面，获取所有合作博客或站点的信息。
* 若数据库为空，将返回 `404 not found`。
* 返回结果中每个对象包含：

  * `name`：站点名称
  * `link`：站点链接
  * `avatar`：站点头像 URL
