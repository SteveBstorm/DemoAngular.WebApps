import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MinLengthValidatorCustom } from 'src/app/shared/Validators/minChar.validator';

@Component({
  selector: 'app-demo09',
  templateUrl: './demo09.component.html',
  styleUrls: ['./demo09.component.scss']
})
export class Demo09Component implements OnInit {

  myFormGroup! : FormGroup

  constructor(
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myFormGroup = this._builder.group({
      'nom' : ["perceval", Validators.required],
      'prenom' : [null, [Validators.required, MinLengthValidatorCustom(5)]],
      'email' : [null, [Validators.required, Validators.email]],
      'choix' : this._builder.array([])
    })
  }

  getArray() : FormArray {
    return this.myFormGroup.get('choix') as FormArray
  }

  addControl() {
    this.getArray().push(new FormControl("", Validators.required))
  }

  validation() {
    console.log(this.myFormGroup.value)
  }
}
