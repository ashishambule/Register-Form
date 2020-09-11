import { Injectable } from '@angular/core';
import {
  ValidatorFn,
  AbstractControl,
  FormGroup,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorService {
  constructor() {}

  pwdPattern =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[! @#$%^&*()_+{}:<|>]).{8,}$';

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp(this.pwdPattern);
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }
}
