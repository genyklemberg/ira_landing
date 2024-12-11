# LandingFixService - Internal Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Class `LandingFixService`](#2-class-landingfixservice)
    * [2.1 Constructor](#21-constructor)
    * [2.2 Method `addFix()`](#22-method-addfix)
    * [2.3 Method `removeFix()`](#23-method-removefix)


## 1. Overview

The `LandingFixService` is an Angular service designed to add and remove a CSS class named "landing" from the root HTML element (`documentElement`) and the `<body>` element of the webpage.  This class is presumably used to apply specific styling for landing pages. The service leverages Angular's dependency injection to access the `Document` object.


## 2. Class `LandingFixService`

This class provides methods for manipulating the CSS classes of the HTML document's root and body elements.

### 2.1 Constructor

```typescript
constructor(
  @Inject(DOCUMENT) private document: Document
) { }
```

The constructor uses Angular's dependency injection (`@Inject(DOCUMENT)`) to obtain a reference to the browser's `Document` object. This allows the service to directly interact with the DOM.  The `private document: Document` declaration makes the `document` object available within the class.

### 2.2 Method `addFix()`

```typescript
public addFix() {
  this.document.documentElement.classList.add('landing');
  this.document.body.classList.add('landing');
}
```

This method adds the CSS class "landing" to both the `documentElement` (typically the `<html>` tag) and the `<body>` element.  This is a straightforward operation using the built-in `classList.add()` method of the DOM.  The algorithm is simply to apply the class to both elements.

| Element        | Method Call                 | Effect                                  |
|----------------|-----------------------------|------------------------------------------|
| `documentElement` | `classList.add('landing')` | Adds "landing" class to the `<html>` tag |
| `body`          | `classList.add('landing')` | Adds "landing" class to the `<body>` tag |


### 2.3 Method `removeFix()`

```typescript
public removeFix() {
  this.document.documentElement.classList.remove('landing');
  this.document.body.classList.remove('landing');
}
```

This method removes the CSS class "landing" from both the `documentElement` and the `<body>` element.  Similar to `addFix()`, this uses the built-in `classList.remove()` method. The algorithm is to remove the class from both elements.

| Element        | Method Call                    | Effect                                       |
|----------------|--------------------------------|-----------------------------------------------|
| `documentElement` | `classList.remove('landing')` | Removes "landing" class from the `<html>` tag |
| `body`          | `classList.remove('landing')` | Removes "landing" class from the `<body>` tag |
