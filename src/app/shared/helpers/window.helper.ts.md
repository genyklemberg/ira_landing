# Internal Documentation: Angular Window Injection Providers

[Linked Table of Contents](#linked-table-of-contents)

## Overview

This document details the implementation of Angular providers for accessing the browser window object.  The primary goal is to provide a consistent and testable way to access the global `window` object within an Angular application.  This is achieved through the use of dependency injection.  Testability is ensured by abstracting the window access into an interface, allowing for mocking in unit tests.

## Linked Table of Contents

* [Module Overview](#module-overview)
* [Function: `_window()`](#function-window)
* [Injection Token: `WINDOW`](#injection-token-window)
* [Abstract Class: `WindowRef`](#abstract-class-windowref)
* [Class: `BrowserWindowRef`](#class-browserwindowref)
* [Provider: `browserWindowProvider`](#provider-browserwindowprovider)
* [Provider: `windowProvider`](#provider-windowprovider)
* [Provider Array: `WINDOW_PROVIDERS`](#provider-array-windowproviders)


## Module Overview

This module provides two Angular providers for accessing the browser window object:

*   `WINDOW`: An injection token representing the browser window.
*   `WindowRef`: An abstract class defining an interface for accessing the window.

These providers allow for easy injection of the window object into components and services, while maintaining testability through dependency injection.


## Function: `_window()`

```typescript
export function _window(): any {
  return window;
}
```

This function simply returns the global `window` object.  Its purpose is to encapsulate the access to the global object, making it easier to mock in testing environments.


## Injection Token: `WINDOW`

```typescript
export const WINDOW = new InjectionToken("WindowToken");
```

`WINDOW` is an Angular injection token.  Injection tokens are used to identify dependencies that are not classes.  Using an injection token for the window allows for easier mocking and testing, as it decouples the application from the direct use of the global `window` object.


## Abstract Class: `WindowRef`

```typescript
export abstract class WindowRef {
  get nativeWindow(): Window {
    throw new Error("Not implemented.");
  }
}
```

`WindowRef` is an abstract class that defines a contract for accessing the native browser window.  The `nativeWindow` getter throws an error in the abstract class. This ensures that any concrete implementation must provide a way to access the window. This abstraction is crucial for testability.  It allows for the creation of mock implementations that return a controlled, test-specific window object.


## Class: `BrowserWindowRef`

```typescript
export class BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }
  get nativeWindow(): Window {
    return _window();
  }
}
```

`BrowserWindowRef` is a concrete implementation of `WindowRef`.  It directly uses the `_window()` function to return the actual browser window. This class is used in the production environment to provide access to the real browser window.


## Provider: `browserWindowProvider`

```typescript
const browserWindowProvider: ClassProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
```

This is an Angular `ClassProvider`. It registers `BrowserWindowRef` as the provider for the `WindowRef` injection token.  This means that whenever a component or service injects `WindowRef`, it will receive an instance of `BrowserWindowRef`.


## Provider: `windowProvider`

```typescript
export const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: _window,
  deps: []
};
```

This is an Angular `FactoryProvider`.  It registers the `_window()` function as the factory for the `WINDOW` injection token. This allows for the injection of the actual window object via the `WINDOW` token.  The `deps` array is empty because `_window()` doesn't have any dependencies.


## Provider Array: `WINDOW_PROVIDERS`

```typescript
export const WINDOW_PROVIDERS = [
  browserWindowProvider,
  windowProvider
];
```

This array combines both providers (`browserWindowProvider` and `windowProvider`) for convenient import and registration within an Angular module.  This makes it easy to configure the providers in one place.
