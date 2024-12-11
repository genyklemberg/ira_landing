# Contact Component Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Properties](#2-component-properties)
* [3. Constructor](#3-constructor)
* [4. `ngOnInit()` Method](#4-ngoninit-method)
* [5. `clear()` Method](#5-clear-method)
* [6. `onlyNumberKey()` Method](#6-onlynumberkey-method)
* [7.  `onSubmit()` Method (Commented Out)](#7-onsubmit-method-commented-out)


## 1. Overview

The `ContactComponent` is an Angular component responsible for handling user contact submissions.  It utilizes Angular's reactive forms for data management and `HttpClient` for sending data to a backend server (currently commented out). The component includes input validation and a method to restrict numeric input fields to numbers only.


## 2. Component Properties

| Property Name      | Type              | Description                                                                 |
|----------------------|----------------------|-----------------------------------------------------------------------------|
| `backgroundGray` | `any`               | Input property to control background color (not currently used in the provided code). |
| `contactForm`     | `FormGroup`         | Reactive form group managing user input.                                      |


## 3. Constructor

The constructor injects the `FormBuilder` and `HttpClient` services.

```typescript
constructor(
  private fb: FormBuilder,
  private http: HttpClient
) { }
```

* `fb`:  An instance of `FormBuilder` used to create and manage the reactive form.
* `http`: An instance of `HttpClient` used to make HTTP requests to the backend server (currently commented out).


## 4. `ngOnInit()` Method

The `ngOnInit()` lifecycle hook initializes the reactive form using `FormBuilder.group()`.  It defines form controls for 'name', 'email', and 'mobile', along with validators for required fields and email format.

```typescript
ngOnInit() {
  this.contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
    mobile: ['', Validators.required]
  });
}
```

* **`fb.group({})`**: Creates a new `FormGroup` instance.  The object passed as an argument defines the form controls.
* **`name: ['', [Validators.required]]`**: Creates a form control for 'name' with an initial value of '' (empty string) and a `Validators.required` validator.
* **`email: ['', [Validators.email]]`**: Creates a form control for 'email' with an initial value of '' and a `Validators.email` validator.
* **`mobile: ['', Validators.required]`**: Creates a form control for 'mobile' with an initial value of '' and a `Validators.required` validator.


## 5. `clear()` Method

The `clear()` method resets the `contactForm` to its initial state.

```typescript
clear() {
  this.contactForm.reset();
}
```

* **`this.contactForm.reset()`**: Resets all form controls to their initial values.


## 6. `onlyNumberKey()` Method

The `onlyNumberKey()` method is an event handler that allows only numeric input in a designated input field. It checks the `charCode` of the key pressed.  It returns `null` for backspace (charCode 8) and other control characters (charCode 0) allowing deletion and other navigation; otherwise, it only allows digits (charCode 48-57).

```typescript
onlyNumberKey(event) {
  return (event.charCode === 8 || event.charCode === 0)
    ? null : event.charCode >= 48 && event.charCode <= 57;
}
```


## 7. `onSubmit()` Method (Commented Out)

The `onSubmit()` method (currently commented out) would handle form submission. It constructs a data object (`array_new`) from form values, sets HTTP headers including authorization, and sends a POST request to the specified URL (`http://127.0.0.1:3000/send`).  The response from the server is logged to the console.  Finally, it resets the form.

```typescript
// onSubmit(form) {
//   console.log('Form Submitted!');
//   const array_new = {};
//   array_new['phone'] = form.value.mobile;
//   array_new['address_customer'] = form.value.address;
//   array_new['name_customer'] = form.value.name;
//   console.log(array_new);
//   const headers = new HttpHeaders()
//     .set('Authorization', 'my-auth-token')
//     .set('Content-Type', 'application/json');
//
//   this.http.post('http://127.0.0.1:3000/send', JSON.stringify(array_new), {
//     headers: headers
//   })
//     .subscribe(data => {
//       console.log('form data: ', data);
//     });
//
//   form.reset();
// }
```

* **Data Transformation**: The form values are rearranged into a different structure (`array_new`).
* **HTTP Headers**:  Authorization and Content-Type headers are set for the HTTP request.
* **HTTP POST Request**: An HTTP POST request is made using the `HttpClient.post()` method.
* **Response Handling**: The response from the server is handled using the `subscribe()` method.
* **Form Reset**:  The form is reset after submission.

Note:  The `address` field is referenced in the commented-out `onSubmit` function, but it's not defined in the `ngOnInit` method's form definition.  This would cause an error if uncommented.
