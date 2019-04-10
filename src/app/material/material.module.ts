import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlider } from '@angular/material';


// in this module we import every angular material module
@NgModule({
  imports: [
    CommonModule,
    MatSlider
  ],
  exports: [
    CommonModule,
    MatSlider
  ]
})
export class MaterialModule { }
