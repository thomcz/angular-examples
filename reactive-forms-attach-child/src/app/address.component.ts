
import { Component, forwardRef } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: [ './address.component.css' ],
  viewProviders: [ { provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class AddressComponent  {
  address : FormGroup;
  constructor() {
    this.address= new FormGroup({
      zip: new FormControl(),
      street: new FormControl(),
      city: new FormControl()
    });
  }
  
}