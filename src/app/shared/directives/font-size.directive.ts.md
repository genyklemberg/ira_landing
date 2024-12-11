# FontSizeDirective: Internal Documentation

[Linked Table of Contents](#table-of-contents)


## Table of Contents

* [1. Overview](#overview)
* [2. Directive Definition](#directive-definition)
* [3. Constructor](#constructor)
* [4. ngOnInit Lifecycle Hook](#ngoninit-lifecycle-hook)


## 1. Overview

The `FontSizeDirective` is an Angular directive designed to dynamically adjust the font size of an HTML element.  It achieves this by directly manipulating the element's `fontSize` style property using the value provided as a directive attribute.


## 2. Directive Definition

```typescript
@Directive({ selector: '[fontSize]' })
export class FontSizeDirective implements OnInit {
  // ...
}
```

The `@Directive` decorator marks this class as an Angular directive.  The `selector: '[fontSize]'` specifies that this directive will be applied to any HTML element with the attribute `fontSize`.  The `implements OnInit` indicates that this directive implements the `OnInit` lifecycle hook, allowing for initialization logic after the directive's component is created and initialized.


## 3. Constructor

```typescript
constructor(@Attribute('fontSize') public fontSize: string, private el: ElementRef) { }
```

The constructor injects two dependencies:

* `@Attribute('fontSize') public fontSize: string`: This injects the value of the `fontSize` attribute as a string into the `fontSize` property of the directive.  The `@Attribute` decorator ensures that the value is retrieved from the attribute, even if it's not explicitly bound in a template.  If the attribute is missing, `fontSize` will be `null`.
* `private el: ElementRef`: This injects an instance of `ElementRef`, providing access to the underlying DOM element the directive is attached to.


## 4. ngOnInit Lifecycle Hook

```typescript
ngOnInit() {
  this.el.nativeElement.fontSize = this.fontSize;
}
```

The `ngOnInit` lifecycle hook is executed after Angular has fully initialized the directive and its component.  This method contains the core logic of the directive:

* `this.el.nativeElement.fontSize = this.fontSize;`: This line directly sets the `fontSize` CSS style property of the native DOM element (accessed via `this.el.nativeElement`) to the value provided in the `fontSize` attribute.  This is a straightforward approach that directly manipulates the DOM. No complex algorithms are involved.  The potential for errors is limited to incorrect attribute values (non-numeric strings) that might be provided; however, there's no explicit error handling in this simplified implementation.  Robust error handling could be implemented by adding a check to validate the input string before assigning it.

