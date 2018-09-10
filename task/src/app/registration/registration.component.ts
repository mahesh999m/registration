import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var alertify: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      age: [null, [Validators.required,Validators.max(100),Validators.min(1)]],
      mobile: [null, [Validators.required]],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(6)]]
    });
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get mobile() {
    return this.registrationForm.get('mobile');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  onSubmit() {
    console.log(this.registrationForm);
     this.httpClient.post("http://localhost:8500/registration", this.registrationForm.value)
     .subscribe((res) => {
       console.log(res);
       this.registrationForm.reset();
       alertify.success("successfully added!");
     });
  }
}