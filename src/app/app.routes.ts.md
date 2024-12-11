# Internal Code Documentation: `rootRouterConfig`

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. `rootRouterConfig` Details](#2-rootrouterconfig-details)
    * [2.1. Route Configuration Structure](#21-route-configuration-structure)
    * [2.2. Route Definitions](#22-route-definitions)
        * [2.2.1. Home Route](#221-home-route)
        * [2.2.2. Story Route](#222-story-route)
        * [2.2.3. Wildcard Route](#223-wildcard-route)


## 1. Overview

This document details the `rootRouterConfig` array, which defines the routing configuration for the Angular application.  It uses Angular's routing module to map URL paths to specific components or modules.  This configuration dictates how the application navigates between different views.

## 2. `rootRouterConfig` Details

The `rootRouterConfig` is an array of route objects exported as a constant. Each route object defines a path and the component or module to load when that path is matched.

### 2.1. Route Configuration Structure

The structure of each route object within the `rootRouterConfig` array follows Angular's `Routes` interface.  Each object generally consists of the following properties:

| Property        | Data Type      | Description                                                                     |
|-----------------|-----------------|---------------------------------------------------------------------------------|
| `path`          | string          | The URL path that triggers this route.                                          |
| `loadChildren`  | string or function          |  Specifies a module to load lazily, improving initial load time.  Uses the module's path and the `#` symbol followed by the module's name.                     |


### 2.2. Route Definitions

The `rootRouterConfig` contains three route definitions:

#### 2.2.1. Home Route

```typescript
{path: '', loadChildren: './views/home/home.module#HomeModule'}
```

*   **`path: ''`**: This defines the default route. When the application loads or the URL is just the base URL (e.g., `http://example.com`), this route will be activated.
*   **`loadChildren: './views/home/home.module#HomeModule'`**: This lazily loads the `HomeModule` located at `./views/home/home.module`.  This means the module is only loaded when the home route is navigated to, improving initial application load time.  The `#HomeModule` syntax specifies the name of the module to load.


#### 2.2.2. Story Route

```typescript
{path: 'story', loadChildren: './views/story/story.module#StoryModule'}
```

*   **`path: 'story'`**:  This route is activated when the URL path includes `/story` (e.g., `http://example.com/story`).
*   **`loadChildren: './views/story/story.module#StoryModule'`**: Lazily loads the `StoryModule` from the specified path.  Similar to the home route, this optimizes the initial load time by delaying the loading of this module until it's needed.


#### 2.2.3. Wildcard Route

```typescript
{path: '**', redirectTo: 'home'}
```

*   **`path: '**'`**: This is a wildcard route. It matches any URL path that doesn't match the previous routes.  The `**` acts as a catch-all.
*   **`redirectTo: 'home'`**: This redirects any unmatched URL to the home route (`/`). This is typically used to handle 404 (Not Found) errors gracefully by redirecting to a default view.  This improves user experience by preventing broken links from producing error messages.
