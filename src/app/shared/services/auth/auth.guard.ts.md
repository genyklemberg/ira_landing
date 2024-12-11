# AuthGuard Service Documentation

[Linked Table of Contents](#table-of-contents)

## Table of Contents

* [1. Overview](#1-overview)
* [2. Class Structure](#2-class-structure)
* [3. `canActivate` Method Details](#3-canactivate-method-details)


<a name="1-overview"></a>
## 1. Overview

The `AuthGuard` service is an Angular service implementing the `CanActivate` interface.  Its primary purpose is to control access to protected routes within the application.  It determines whether a user is authenticated before allowing navigation to a specific route.  Currently, authentication status is hardcoded for demonstration purposes;  in a production environment, this would be fetched dynamically (e.g., from local storage, a backend service).


<a name="2-class-structure"></a>
## 2. Class Structure

The `AuthGuard` class utilizes the following components:


| Component        | Description                                                                    |
|-----------------|--------------------------------------------------------------------------------|
| `@Injectable()` | Decorator marking the class as an injectable service in Angular's dependency injection system. |
| `implements CanActivate` | Implements the `CanActivate` interface, requiring the implementation of the `canActivate` method. |
| `authToken`     |  (Currently unused) Variable intended to store the user's authentication token.  |
| `isAuthenticated` | Boolean flag indicating user authentication status.  *Note: This is currently hardcoded to `true` for demonstration purposes.  In a production environment, this should be dynamically set based on the user's authentication status.* |
| `constructor(private router: Router)` | Constructor injecting the Angular `Router` service for navigation. |


<a name="3-canactivate-method-details"></a>
## 3. `canActivate` Method Details

The `canActivate` method is the core logic of the `AuthGuard`. It determines whether the user can activate a route.

**Method Signature:**

```typescript
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
```

**Parameters:**

| Parameter           | Type                      | Description                                                                |
|--------------------|---------------------------|----------------------------------------------------------------------------|
| `route`            | `ActivatedRouteSnapshot` | Metadata about the route being accessed.                                   |
| `state`            | `RouterStateSnapshot`    | Metadata about the navigation state.                                      |

**Algorithm:**

1. **Check Authentication Status:** The method first checks the value of `this.isAuthenticated`.
2. **Authorized Access:** If `this.isAuthenticated` is `true`, the method returns `true`, allowing access to the protected route.
3. **Unauthorized Access:** If `this.isAuthenticated` is `false`, the method redirects the user to the `/sessions/signin` route using `this.router.navigate(['/sessions/signin'])` and returns `false`, preventing access to the protected route.

**Example:**

If a user attempts to access a route protected by this guard and `this.isAuthenticated` is `false`, the user will be automatically redirected to the login page (`/sessions/signin`).  If `this.isAuthenticated` is `true`, the user will proceed to the requested route.
