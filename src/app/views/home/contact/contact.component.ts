import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      mobile: ['', Validators.required]
    });
  }

  clear() {
    this.contactForm.reset();
  }

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
  //
  // onlyNumberKey(event) {
  //   return (event.charCode === 8 || event.charCode === 0)
  //     ? null : event.charCode >= 48 && event.charCode <= 57;
  // }

}
