import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {AddressComponent} from './address.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

@ViewChild(AddressComponent) childComponent: AddressComponent;

  name = 'Nested reactive form';

  form:FormGroup;
  constructor() {
    this.form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    
  });
  }
  
  ngAfterViewInit() {
    this.form.addControl('addresse', this.childComponent.address);
    this.childComponent.address.setParent(this.form);
 
    console.log(this.form)
  }
}
