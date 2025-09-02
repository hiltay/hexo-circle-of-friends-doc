# API Reference: Retrieve Random Posts

## Basic Info

* **Method**: `GET`  
* **Path**: `/randompost`  
* **Description**: Returns a specified number of random posts from the article pool. Ideal for “Random Post Recommendations” in a friend circle.

## Request Parameters

| Name | Type    | In    | Required | Description               | Default | Min | Max |
|------|---------|-------|----------|---------------------------|---------|-----|-----|
| num  | integer | query | No       | Number of posts to return | 1       | 1   | 100 |

## Response

### Success (200)

* **Description**: Random posts returned.  
* **Content-Type**: `application/json`  
* **Example** (single post):

```json
[
  {
    "title": "Auto-deploy Your Blog with Webhooks, Server and Feishu Notifications",
    "created": "2025-07-05",
    "updated": "2025-07-05",
    "link": "https://xaoxuu.com/blog/20250705/",
    "rule": "feed",
    "author": "xaoxuu",
    "avatar": "https://bu.dusays.com/2021/09/24/2f74810ceb3d3.png",
    "createdAt": "2025-07-31 20:09:28"
  }
]
```

### Error Responses

#### 400 Bad Request

* **Description**: Invalid `rule` parameter.  
* **Example**:

```json
{
  "message": "rule error, please use 'created'/'updated'"
}
```

#### 404 Not Found

* **Description**: No articles in the database.  
* **Example**:

```json
{
  "message": "not found"
}
```

#### 422 Validation Error

* **Description**: Parameter validation failed.  
* **Example**:

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

## Usage Notes

* By default returns 1 random post; supports up to 100 at once.  
* Each result includes `title`, `created`, `updated`, `link`, `author`, `avatar`, etc.  
* Perfect for front-end features like “Random Post Recommendation” or “Discover a Post”.