import { NgModule } from '@angular/core';
import { MainComponents } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { MainServices } from './services';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    ...MainComponents
  ],
  providers: [
    ...MainServices
  ]
})
export class MainModule { }
