import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/my-types/user';
import { HtttpService } from 'src/app/services/htttp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  socialMedia: string[] = ["facebook", "twitter", "google"];
  formGroup: FormGroup;



  constructor(private http: HtttpService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      fromWhereHeCome: ['', Validators.required],
    })

  }

  get userName(): FormArray {
    return this.formGroup.get('userName') as FormArray;
  }
  get email(): FormArray {
    return this.formGroup.get('email') as FormArray;
  }
  get password(): FormArray {
    return this.formGroup.get('password') as FormArray;
  }
  get confirmPassword(): FormArray {
    return this.formGroup.get('confirmPassword') as FormArray;
  }
  get fromWhereHeCome(): FormArray {
    return this.formGroup.get('fromWhereHeCome') as FormArray;
  }

  confirmPasswordIsMatch(): boolean {
    return this.password.value !== this.confirmPassword.value
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formGroup.value);
  }


}
