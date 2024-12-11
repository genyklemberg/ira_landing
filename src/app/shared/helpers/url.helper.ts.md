# Internal Code Documentation: `getQueryParam` Function

[TOC]

## 1. Overview

The `getQueryParam` function extracts query parameters from a URL and returns either a specific parameter's value or all parameters as a JavaScript object.  It handles URL decoding to correctly interpret special characters.

## 2. Function Signature

```javascript
export function getQueryParam(prop) {
  // ... function body ...
}
```

* **`prop` (string, optional):** The name of the query parameter to retrieve. If omitted, the function returns an object containing all query parameters.

* **Returns:**  A string (if `prop` is specified and exists) or a JavaScript object (if `prop` is omitted or doesn't exist).  The object contains query parameter names as keys and their corresponding values.

## 3. Algorithm and Implementation Details

The function operates in the following steps:

1. **Initialization:** An empty JavaScript object `params` is created to store the query parameters.

2. **URL Parsing:**
    * The function extracts the query string from the URL using `window.location.href.slice(window.location.href.indexOf('?') + 1)`.  This isolates the portion of the URL following the `?` character.
    * `decodeURIComponent` is used to decode any URL-encoded characters (e.g., `%20` becomes a space).  This ensures that special characters within parameter values are correctly handled.

3. **Parameter Separation:**
    * The decoded query string is split into individual parameter definitions using `search.split('&')`. Each element in the resulting array `definitions` represents a single parameter (e.g., "param1=value1").

4. **Key-Value Extraction:**
    * The `forEach` loop iterates over each parameter definition.
    * `val.split('=', 2)` splits each definition into a key-value pair. The `2` limits the split to two parts, handling cases where a value might contain an equals sign.
    * The key-value pair is added to the `params` object.

5. **Return Value:**
    * A conditional statement checks if `prop` is provided and exists as a key in the `params` object.
    * If both conditions are true, the function returns the value associated with `prop`.
    * Otherwise, the entire `params` object is returned.


## 4. Example Usage

**Example 1: Retrieving a specific parameter**

```javascript
let myParam = getQueryParam('user'); // Assuming the URL is like ...?user=john
console.log(myParam); // Output: "john"
```

**Example 2: Retrieving all parameters**

```javascript
let allParams = getQueryParam(); // No argument provided.
console.log(allParams); // Output:  {user: "john", product: "widget"} (assuming the URL contains these parameters)
```

## 5. Error Handling

The function doesn't explicitly include error handling.  If a query parameter is missing (when a specific `prop` is requested), it will return `undefined`.  Improperly formatted URLs might lead to unexpected behavior but generally won't cause a runtime error.  Robust error handling (e.g., checking for null or undefined values after splitting) could be added for increased reliability.


## 6.  Potential Improvements

* **Type safety:** Adding TypeScript type annotations would improve code readability and maintainability.
* **Error handling:** Explicit checks for edge cases (e.g., missing `?` in the URL) would improve robustness.
* **Regular expressions:** Using regular expressions for parameter parsing could handle more complex query string formats.


