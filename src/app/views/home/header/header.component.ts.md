# Internal Documentation: `app-header` Component

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. `onWindowScroll()` Method](#3-onwindowscroll-method)
* [4. `toggleMenu()` Method](#4-togglemenu-method)
* [5. `buyEgret()` Method](#5-buyegret-method)


## 1. Overview

The `app-header` component is a Angular component responsible for rendering the header section of the application.  It features functionality for fixed header behavior on scroll and a toggleable menu.  The component utilizes both `@HostListener` and `@HostBinding` decorators for event handling and dynamic class application.


## 2. Component Structure

The component is defined using the Angular `@Component` decorator, specifying the selector (`app-header`), template URL (`./header.component.html`), and stylesheet URL (`./header.component.scss`).

| Property/Method | Description |
|---|---|
| `isFixed` | Boolean property indicating whether the header should be fixed. Initialized to `undefined`. |
| `constructor(document: Document, window: Window)` |  Constructor injects `Document` and `Window` objects for cross-browser compatibility. |
| `ngOnInit()` | Lifecycle hook; currently empty. |
| `onWindowScroll()` | Handles the `window:scroll` event. |
| `@HostBinding("class.menu-opened") menuOpened` | Boolean property controlling the "menu-opened" class; toggles the menu. |
| `toggleMenu()` | Toggles the `menuOpened` property, showing or hiding the menu. |
| `buyEgret()` | Opens a URL in a new tab.  This function is related to purchasing a theme. |


## 3. `onWindowScroll()` Method

This method is triggered whenever the window scroll event occurs. It determines the vertical scroll position using a cross-browser compatible approach:

```typescript
@HostListener("window:scroll", [])
onWindowScroll() {
  const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  if(offset > 10) {
    this.isFixed = true
  } else {
    this.isFixed = false;
  }
}
```

The algorithm prioritizes `window.pageYOffset` for modern browsers. If it's unavailable, it falls back to checking `document.documentElement.scrollTop` and then `document.body.scrollTop`.  A default value of 0 is used if none of these properties provide a value.  If the scroll offset exceeds 10 pixels, the `isFixed` property is set to `true`, applying a fixed positioning CSS class (presumably defined in `header.component.scss`). Otherwise, `isFixed` is set to `false`. This enables a smooth transition from a regular header to a fixed one.


## 4. `toggleMenu()` Method

This method simply inverts the boolean value of the `menuOpened` property:

```typescript
toggleMenu() {
  this.menuOpened = !this.menuOpened
}
```

This directly controls the application of the "menu-opened" CSS class via the `@HostBinding` decorator, effectively toggling the menu's visibility.


## 5. `buyEgret()` Method

This method opens a URL in a new browser tab, directing the user to a ThemeForest product page:

```typescript
buyEgret() {
  this.window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
}
```

The URL points to a specific Angular admin template.  The use of `window.open()` ensures the link opens in a new window or tab, preventing navigation away from the current application.
