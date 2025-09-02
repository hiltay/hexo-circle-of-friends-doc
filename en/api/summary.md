# API Reference: Fetch Article Summary

## Basic Info

* **Method**: `GET`  
* **Path**: `/summary`  
* **Description**: Retrieves the AI-generated summary for a given article URL.

## Request Parameters

| Name | Type   | In    | Required | Description         |
|------|--------|-------|----------|---------------------|
| link | string | query | Yes      | Article URL to summarize |

## Response

### Success (200)

* **Description**: Returns the summary.  
* **Content-Type**: `application/json`  
* **Example**:

```json
{
  "link": "https://example.com/post",
  "summary": "This article offers an in-depth guide to a development tool, covering its usage and best practices...",
  "ai_model": "qwen3",
  "content_hash": "abc123def456789",
  "created_at": "2025-01-01 10:00:00",
  "updated_at": "2025-01-01 12:00:00"
}
```

### Error Responses

#### 400 Bad Request

* **Description**: Missing required `link` parameter.  
* **Example**:

```json
{ "message": "链接参数不能为空" }
```

#### 404 Not Found

* **Description**: No summary exists for the provided URL.  
* **Example**:

```json
{ "message": "not found" }
```

#### 422 Validation Error

* **Description**: Parameter validation failed (e.g., `link` not provided).  
* **Example**:

```json
{
  "detail": [
    {
      "loc": ["query", "link"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

## Usage Notes

* The `link` parameter is mandatory; omitting it results in a 400 error.  
* Response fields:  
  * **summary** – AI-generated content  
  * **ai_model** – model used  
  * **content_hash** – unique hash for caching/validation  
  * **created_at / updated_at** – summary timestamps