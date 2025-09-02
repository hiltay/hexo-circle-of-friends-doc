# API Reference: Retrieve All Friend Links

## Basic Info

* **Method**: `GET`
* **Path**: `/friend`
* **Description**: Returns every friend link stored in the database, including name, URL, and avatar.

## Request Parameters

**None** required.

## Response

### Success (200)

* **Description**: List of friend links.  
* **Content-Type**: `application/json`  
* **Example**:

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

### Error Responses

#### 404 – No Friend Links Found

* **Description**: Database contains no friend links.  
* **Example**:

```json
{
  "message": "not found"
}
```

#### 500 – Internal Server Error

* **Description**: Server-side issue, e.g., database failure.  
* **Example**:

```json
{
  "message": "server internal error"
}
```

## Usage Notes

* Typically used by front-end friend-links pages to list all partner blogs.  
* Returns `404 not found` when the database is empty.  
* Each object contains:

  * `name`: Site name  
  * `link`: Site URL  
  * `avatar`: Site avatar URL