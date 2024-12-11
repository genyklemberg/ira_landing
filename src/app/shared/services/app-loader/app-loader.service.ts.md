# AppLoaderService Documentation

[TOC]

## 1. Overview

The `AppLoaderService` is an Angular service responsible for managing a loading indicator dialog.  It uses Angular Material's `MatDialog` to display a modal `AppLoaderComponent` while asynchronous operations are in progress. This service provides a simple interface for opening and closing the loading indicator.

## 2. Class: `AppLoaderService`

This service manages the display and closing of a loading indicator dialog.


| Member          | Type                                      | Description                                                                                                  |
|-----------------|-------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `dialogRef`     | `MatDialogRef<AppLoaderComponent>`         | A reference to the currently open MatDialogRef for the AppLoaderComponent.  Null if no dialog is open. |
| `constructor`   | `(private dialog: MatDialog)`              | Constructor injects the MatDialog service.                                                                    |
| `open(title)`   | `Observable<boolean>`                     | Opens the loading indicator dialog.                                                                           |
| `close()`        | `void`                                     | Closes the loading indicator dialog.                                                                          |


## 3.  Methods

### 3.1 `open(title: string = 'Please wait'): Observable<boolean>`

This method opens the loading indicator dialog.

* **Parameters:**
    * `title: string = 'Please wait'`: (Optional) The title to display in the loading indicator. Defaults to "Please wait".

* **Return Value:**
    * `Observable<boolean>`: An observable that emits `true` when the dialog is closed. This allows the caller to subscribe and execute code after the loader is closed.

* **Implementation Details:**
    1. The method opens a new instance of `AppLoaderComponent` using `this.dialog.open()`.
    2. `disableClose: true` prevents the user from closing the dialog manually.
    3. `backdropClass: 'light-backdrop'` applies a custom CSS class to the backdrop for visual customization.
    4. `this.dialogRef.updateSize('200px')` sets the dialog's size.
    5. `this.dialogRef.componentInstance.title = title;` sets the title of the component instance.
    6. `this.dialogRef.afterClosed()` returns an observable that emits a value when the dialog is closed.  The emitted value is not used in this case, but the fact that it emits indicates successful closure.

### 3.2 `close()`: `void`

This method closes the loading indicator dialog if it is currently open.

* **Implementation Details:**
    The method checks if `this.dialogRef` is not null (meaning a dialog is open). If it is, it calls `this.dialogRef.close()` to close the dialog.  No value is returned because the closing action is void.

## 4. Usage Example

```typescript
// Inject the service
constructor(private appLoaderService: AppLoaderService) {}

// Open the loader with a custom title
const loaderRef = this.appLoaderService.open('Processing your request...');

// Perform an asynchronous operation
someAsyncOperation().subscribe({
    next: (result) => { /* Handle the result */ },
    error: (error) => { /* Handle the error */ },
    complete: () => {
      // Close the loader after the operation is complete.  The complete is fired only after the observable completes
      this.appLoaderService.close();
    }
  });

// Alternatively,  subscribe to the observable from open() for closing:
loaderRef.subscribe(() => {
  console.log("Loader closed");
});
```
