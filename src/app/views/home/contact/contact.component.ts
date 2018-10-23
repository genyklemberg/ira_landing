import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // encapsulation: ViewEncapsulation.None
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
    this.onSubmit(this.contactForm);
    // this.contactForm.reset();
  }

  onSubmit(form) {
    const array_new = {};
    array_new['phone'] = form.value.mobile;
    array_new['email'] = form.value.email;
    array_new['name'] = form.value.name;
    console.log(array_new);
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    this.http.post('https://formspree.io/aputop@yahoo.com', JSON.stringify(array_new), {
      headers: headers
    })
      .subscribe(data => {
        console.log('form data: ', data);
      });

    form.reset();
  }

  onlyNumberKey(event) {
    return (event.charCode === 8 || event.charCode === 0)
      ? null : event.charCode >= 48 && event.charCode <= 57;
  }

}
