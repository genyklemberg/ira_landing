# getIndexBy Function Documentation

[TOC]

## 1. Overview

The `getIndexBy` function searches for a specific element within an array of objects and returns its index.  If the element is not found, it returns -1.


## 2. Function Signature

```typescript
export function getIndexBy(array: Array<{}>, { name, value }): number 
```

* **`array: Array<{}>`**:  The input array to search.  The objects within the array are expected to have a consistent structure, containing at least the property specified by the `name` parameter.  The `{}` indicates that the object type is not explicitly defined, allowing for flexibility in the object structure.  However, it is crucial that all objects within the array have the property defined by the `name` parameter.

* **`{ name, value }`**: An object specifying the search criteria:
    * **`name: string`**: The name of the property within each object to compare against.
    * **`value: any`**: The value to search for in the specified property.  The type of `value` can vary depending on the type of the property specified by `name`.

* **`number`**: The return value. Represents the index (0-based) of the first object in the `array` where the property specified by `name` matches the provided `value`. Returns -1 if no match is found.


## 3. Algorithm

The function employs a linear search algorithm. It iterates through the input array element by element.  For each element:

1. It accesses the property specified by the `name` parameter using bracket notation (`array[i][name]`).
2. It compares the value of this property with the provided `value` parameter using strict equality (`===`).
3. If a match is found, the function immediately returns the current index `i`.
4. If the loop completes without finding a match, the function returns -1, indicating that the element was not found.


## 4. Example Usage

```typescript
const myArray = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "apple" },
];

// Find the index of the first object with name "banana"
const index = getIndexBy(myArray, { name: "name", value: "banana" }); // index will be 1

//Find the index of the first object with id 3
const index2 = getIndexBy(myArray,{name: "id", value: 3}); // index2 will be 2

// Search for a non-existent element
const index3 = getIndexBy(myArray, { name: "name", value: "orange" }); // index3 will be -1

```

## 5. Error Handling

The function does not explicitly handle errors.  It assumes that the input `array` is a valid array and that the objects within the array have the property specified by the `name` parameter.  If these assumptions are not met, the behavior of the function is undefined.  For example, attempting to access a property that does not exist will result in an error.  Robust error handling (e.g., checking for null or undefined values, validating input types) would improve the function's reliability, especially in production environments.  Consider adding input validation for production-level code.

## 6. Performance Considerations

The time complexity of the `getIndexBy` function is O(n), where n is the length of the input array.  This is because the function iterates through the entire array in the worst-case scenario (when the element is not found or found at the end).  For very large arrays, this could lead to performance issues.  Alternative algorithms or data structures, such as hash tables, could provide better performance for larger datasets, achieving O(1) average-case time complexity. However, for smaller datasets, the simplicity and readability of linear search often outweigh the need for more complex algorithms.
