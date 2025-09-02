# API Reference: Retrieve Version Information

## Basic Info

* **Method**: `GET`  
* **Path**: `/version`  
* **Description**: Returns the current API service version number.

## Request Parameters

None.

## Response

### Success (200)

* **Description**: Version number returned.  
* **Content-Type**: `application/json`  
* **Example**:

```json
{
  "version": "1.0.0"
}
```