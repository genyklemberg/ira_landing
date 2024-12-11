# HomeOneComponent Documentation

[Linked Table of Contents](#table-of-contents)

## Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. `ngOnInit` Lifecycle Hook](#3-ngoninit-lifecycle-hook)
* [4. `ngOnDestroy` Lifecycle Hook](#4-ngon-destroy-lifecycle-hook)
* [5. Dependencies](#5-dependencies)


## 1. Overview

The `HomeOneComponent` is an Angular component responsible for rendering the content of the "Home One" page.  It utilizes a declarative approach, leveraging Angular's component architecture to assemble the page from a set of child components.  These child components handle the individual sections of the homepage, promoting modularity and maintainability. The component also interacts with the `LandingFixService` to manage page-specific fixes or adjustments during initialization and cleanup.

## 2. Component Structure

The `HomeOneComponent`'s template is composed entirely of other Angular components, each responsible for a specific section of the home page:

| Component Name      | Purpose                                      |
|----------------------|----------------------------------------------|
| `<app-header>`       | Renders the header section of the page.      |
| `<app-intro>`        | Renders the introductory section.           |
| `<app-cta>`          | Renders a call to action section.            |
| `<app-portfolio>`    | Renders a portfolio section.                 |
| `<app-works>`        | Renders a works or projects section.          |
| `<app-services>`     | Renders a services section (with a gray background).|
| `<app-pricings>`     | Renders a pricing section.                  |
| `<app-contact>`      | Renders a contact section (with a gray background).|
| `<app-footer>`       | Renders the footer section of the page.      |


The `[backgroundGray]` input property is used to conditionally apply a gray background to the `<app-services>` and `<app-contact>` components.


## 3. `ngOnInit` Lifecycle Hook

The `ngOnInit` lifecycle hook is called immediately after Angular first displays the component.  Within this hook, the component calls the `addFix()` method of the injected `LandingFixService`.  This suggests that `addFix()` applies some type of modification or adjustment to the page, likely a fix specific to this component or page.  The exact nature of this fix is not defined within this component but is handled by the `LandingFixService`.

```typescript
ngOnInit() {
  this.fix.addFix();
}
```

## 4. `ngOnDestroy` Lifecycle Hook

The `ngOnDestroy` lifecycle hook is called just before Angular destroys the component.  Here, the component calls the `removeFix()` method of the `LandingFixService`. This is likely a cleanup operation to undo any modifications or adjustments made by `addFix()` in the `ngOnInit` hook, ensuring that the fix is not carried over to other parts of the application or to persist after the component is no longer needed.

```typescript
ngOnDestroy() {
  this.fix.removeFix();
}
```

## 5. Dependencies

The `HomeOneComponent` depends on the `LandingFixService`. This service is responsible for adding and removing page-specific fixes.  The component injects this service through Angular's dependency injection system within the constructor.  The exact implementation details of the `LandingFixService` are outside the scope of this documentation.

```typescript
constructor(
  private fix: LandingFixService
) { }
```
