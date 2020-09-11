import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { CustomValidatorService } from '../services/custom-validator.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  checkBox = false;
  submitted = false;
  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private customValidation: CustomValidatorService,
    private router: Router,
    public navCtrl: NgxNavigationWithDataComponent
  ) {}

  ngOnInit(): void {}

  registrationForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    mobile: ['', Validators.required],
    password: [
      '',
      Validators.compose([
        Validators.required,
        this.customValidation.patternValidator,
      ]),
    ],
    checked: [false],
  });

  signUp = () => {
    console.log('sign upp');
    this.submitted = true;
    // if (this.registrationForm.valid === true) {
    this.registerService
      .register(this.registrationForm.value)
      .subscribe((res: any) => {
        if (res.status === true) {
          console.log(res);
          // alert('Record added successfully');
          if (res.response.checked === false) {
            console.log('not checked');
            this.navCtrl.navigate('home', { isChecked: false });
          } else {
            this.navCtrl.navigate('home', { isChecked: true });
          }
        } else if (
          res.status === false &&
          res.error == 'Record already exist'
        ) {
          console.log(res);
          alert(res.error);
        } else {
          console.log(res);
          alert('please fill all required fields');
        }
        // this.router.navigate(['/login']);
      });
    // }
  };

  onCheckboxChange(e) {
    if (e.target.checked) {
      console.log('checked');
      this.registrationForm.controls['checked'].setValue(true);
    } else {
      console.log('unchekce');
      this.registrationForm.controls['checked'].setValue(false);
    }
  }

  get registerFormControl() {
    return this.registrationForm.controls;
  }

  test() {
    console.log('tets');
  }
}
