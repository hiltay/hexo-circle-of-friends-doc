# API Reference: Retrieve Random Friend Links

## Basic Info

* **Method**: `GET`  
* **Path**: `/randomfriend`  
* **Description**: Randomly returns a specified number of friend links from the database; supports bulk retrieval.

## Request Parameters

| Name | Type    | In    | Required | Description                          | Default | Min | Max |
|------|---------|-------|----------|--------------------------------------|---------|-----|-----|
| num  | integer | query | No       | Number of friend links to return     | 1       | 1   | 100 |

## Response

### Success (200)

* **Description**: Returns random friend links.  
* **Content-Type**: `application/json`  
* **Example** (single friend):

```json
[
  {
    "name": "白雾茫茫丶",
    "link": "https://blog.xmwpro.com/",
    "avatar": "https://cyan-blog.oss-cn-shenzhen.aliyuncs.com/global/avatar.jpg",
    "error": true,
    "createdAt": "2025-07-31 20:09:31"
  }
]
```

### Error Responses

#### 400 Bad Request

* **Description**: Invalid `num` parameter (out of range).  
* **Example**:

```json
{
  "message": "param 'num' error"
}
```

#### 404 Not Found

* **Description**: No friend links exist in the database.  
* **Example**:

```json
{
  "message": "not found"
}
```

#### 422 Validation Error

* **Description**: Request parameter validation failed.  
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

* Use to display **“Random Friends”** or **“Friend Recommendations”** on the front end.
* Parameter `num` allows returning multiple friend links at once (up to 100).
* If `num` is omitted, the default is 1 link.