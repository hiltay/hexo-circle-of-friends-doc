# API Reference: Fetch Full Statistics & Article List

## Request

```http
GET /all
```

## Description

Returns **statistics** and the **article list** from the database.  
Supports pagination (`start`, `end`) and ordering (`rule`).  
Useful for front-ends to display the complete friend-circle feed.

## Parameters

| Name    | Type    | In    | Default  | Description                                                |
|---------|---------|-------|----------|------------------------------------------------------------|
| `start` | integer | query | `0`      | Zero-based start index.                                    |
| `end`   | integer | query | `-1`     | End index; `-1` means **no limit** (return all).           |
| `rule`  | string  | query | `updated`| Sort rule. Allowed: `created` (by creation time) or `updated` (by last update). |

⚠️ Notes:

* `start >= 0`
* Any `rule` value other than `created` or `updated` returns **400**.

## Success Response

**Status: 200**

Returns JSON containing statistics and articles.

### Example

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
      "title": "Wave Terminal – An Open-Source Multi-Feature Terminal",
      "created": "2025-07-31",
      "updated": "2025-07-31",
      "link": "https://blog.example.com/post",
      "author": "Zhang San",
      "avatar": "https://example.com/avatar.jpg",
      "summary": "An article about terminal tools...",
      "ai_model": "qwen3",
      "summary_created_at": "2025-01-01 10:00:00",
      "summary_updated_at": "2025-01-01 10:00:00"
    }
  ]
}
```

### Field Definitions

#### 1. `statistical_data`

| Field               | Type   | Description                     |
|---------------------|--------|---------------------------------|
| `friends_num`       | int    | Total friend links collected    |
| `active_num`        | int    | Friend links currently online   |
| `error_num`         | int    | Broken or failed friend links   |
| `article_num`       | int    | Total articles                  |
| `last_updated_time` | string | Last time the data was updated  |

#### 2. `article_data`

| Field               | Type   | Description                    |
|---------------------|--------|--------------------------------|
| `floor`             | int    | Zero-based article index       |
| `title`             | string | Article title                  |
| `created`           | string | Creation date (YYYY-MM-DD)     |
| `updated`           | string | Last update date (YYYY-MM-DD)  |
| `link`              | string | Article URL                    |
| `author`            | string | Author name                    |
| `avatar`            | string | Author avatar URL              |
| `summary`           | string | Article summary                |
| `ai_model`          | string | AI model used for summary      |
| `summary_created_at`| string | Summary creation timestamp     |
| `summary_updated_at`| string | Summary last-update timestamp  |

## Error Responses

| Status | Description         | Example                                                                                       |
|--------|---------------------|-----------------------------------------------------------------------------------------------|
| **400**| Parameter error     | `{"message": "rule error, please use 'created'/'updated'"}`                                  |
| **422**| Validation failed   | `{"detail":[{"loc":["query","start"],"msg":"value is not a valid integer","type":"type_error.integer"}]}` |
| **500**| Server error        | `{"message": "Database connection failed"}`                                                  |

## Usage Examples

### 1. All articles, ordered by last update (default)

```bash
curl "https://yourdomain.com/all"
```

### 2. Articles 0–10, ordered by creation time

```bash
curl "https://yourdomain.com/all?start=0&end=10&rule=created"
```