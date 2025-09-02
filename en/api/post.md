# API Reference: Fetch Articles by Friend

## Basic Info

* **Method**: `GET`  
* **Path**: `/post`  
* **Description**: Retrieve all articles from a single friend. Supports **random friend** or **specified friend**, and can be sorted by time.

## Request Parameters

| Name  | Type    | In    | Required | Description                                      | Default | Allowed Values        |
|-------|---------|-------|----------|--------------------------------------------------|---------|-----------------------|
| link  | string  | query | No       | Friend’s blog URL. Leave empty for a random pick | null    | Valid URL or empty    |
| num   | integer | query | No       | Number of articles to return. `-1` = all         | -1      | -1 or any positive int|
| rule  | string  | query | No       | Sort order                                       | created | `created` or `updated`|

## Response

### Success (200)

* **Description**: Articles of the selected friend.  
* **Content-Type**: `application/json`  
* **Example**:

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
      "title": "Installing Fonts on Ubuntu Desktop",
      "created": "2025-07-12",
      "updated": "2025-07-12",
      "link": "https://blog.ciraos.top/posts/ubuntu/install-fonts",
      "author": "葱苓sama",
      "avatar": "https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp"
    }
  ]
}
```

### Error Responses

#### 400 Bad Request

* **Description**: Invalid `rule` supplied.  
* **Example**:

```json
{ "message": "rule error, please use 'created'/'updated'" }
```

#### 404 Not Found

* **Description**: Friend not found or no articles.  
* **Example**:

```json
{ "message": "not found" }
```

#### 422 Validation Error

* **Description**: Parameter validation failed.  
* **Example**:

```json
{
  "detail": [
    { "loc": ["string", 0], "msg": "string", "type": "string" }
  ]
}
```

## Usage Notes

* Omit `link` to retrieve articles from a random friend.  
* `num = -1` returns every article; otherwise limits the count.  
* `rule` ordering:  
  * `created` – sort by creation time  
  * `updated` – sort by update time  
* The response contains **friend statistics** plus **detailed article list**, ideal for displaying “all posts by this friend”.