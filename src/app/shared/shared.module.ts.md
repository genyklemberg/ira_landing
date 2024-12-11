# SharedModule Internal Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Introduction](#1-introduction)
* [2. Module Imports](#2-module-imports)
* [3. Entry Components](#3-entry-components)
* [4. Providers](#4-providers)
* [5. Declarations and Exports](#5-declarations-and-exports)
* [6. `classesToInclude` Array](#6-classestoinclude-array)


## 1. Introduction

This document provides internal documentation for the `SharedModule`. This module aggregates commonly used components, directives, and services across the application, promoting code reusability and maintainability.


## 2. Module Imports

The `SharedModule` imports the following Angular and Material modules:

| Module                      | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `CommonModule`              | Provides common Angular directives, such as `NgIf` and `NgFor`.                 |
| `FormsModule`               | Enables template-driven forms.                                                |
| `RouterModule`              | Enables client-side routing.                                                  |
| `FlexLayoutModule`          | Provides a responsive layout system.                                           |
| `MatMenuModule`             | Material Design menu component.                                               |
| `MatSnackBarModule`         | Material Design snack bar component for displaying messages.                   |
| `MatIconModule`            | Material Design icon component.                                              |
| `MatButtonModule`           | Material Design button component.                                             |
| `MatCardModule`             | Material Design card component.                                               |
| `MatProgressSpinnerModule` | Material Design progress spinner component.                                  |
| `MatRippleModule`           | Material Design ripple effect module.                                        |
| `MatDialogModule`           | Material Design dialog component.                                            |


## 3. Entry Components

The `entryComponents` array specifies components that are loaded dynamically, without being declared in a template.  In this case, it includes:

| Component                | Description                                                             |
|-------------------------|-------------------------------------------------------------------------|
| `AppLoaderComponent`     | A component that displays a loading indicator. This is dynamically loaded, likely because it might be overlaid on top of other components. |


## 4. Providers

The `providers` array lists services that are available application-wide.  This module provides:


| Service                | Description                                                                  |
|-------------------------|------------------------------------------------------------------------------|
| `AuthGuard`             | A service responsible for authentication and authorization.                     |
| `AppLoaderService`      | A service managing the `AppLoaderComponent`.   Handles the display and hiding of the loading indicator.    |
| `LandingFixService`     | A service likely handling specific fixes or adjustments related to the landing page. |


## 5. Declarations and Exports

The `declarations` and `exports` arrays both use the `classesToInclude` array, ensuring consistency. This array contains:


| Class                  | Type       | Description                                                              |
|-------------------------|------------|--------------------------------------------------------------------------|
| `AppLoaderComponent`     | Component   | Displays a loading indicator.                                             |
| `FontSizeDirective`     | Directive   | Likely modifies the font size of an element.                                 |
| `ScrollToDirective`     | Directive   | Likely allows scrolling to a specific element on the page.               |


These components and directives are both declared within, and exposed from this module, making them readily available for use in other parts of the application.


## 6. `classesToInclude` Array

The `classesToInclude` array simplifies the management of components, directives, and services included in the declarations and exports of the `SharedModule`.  This approach ensures that any changes to the list of shared elements only need to be made in one place. This improves maintainability and reduces the risk of inconsistencies between declarations and exports.
