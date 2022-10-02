import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  noteFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.noteFormGroup = this.fb.group({
      name: ['', [Validators.required, this.forbiddenNameValidator(/admin/)]],
      product: ['', Validators.required],
      hasDiscount: [false, Validators.required],
      discountInPercent: [''],
      comments: this.fb.array([
        ['']
      ]),
    });
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  get name(): FormArray {
    return this.noteFormGroup.get('name') as FormArray;
  }
  get product(): FormArray {
    return this.noteFormGroup.get('product') as FormArray;
  }
  get hasDiscount(): FormArray {
    return this.noteFormGroup.get('hasDiscount') as FormArray;
  }
  get discountInPercent(): FormArray {
    return this.noteFormGroup.get('discountInPercent') as FormArray;
  }

  onChangeHasDiscount() {
    if (this.hasDiscount.value) {
      this.discountInPercent.addValidators(Validators.required);
    } else {
      this.discountInPercent.removeValidators(Validators.required);
    }
    this.discountInPercent.updateValueAndValidity()


  }

  get comments(): FormArray {
    return this.noteFormGroup.get('comments') as FormArray;
  }

  addComment() {
    this.comments.push(this.fb.control(''));
    console.log(this.comments);

  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  displayErrors() {
    console.log(this.name.errors)

  }
}
