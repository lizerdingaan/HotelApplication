import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResevationFormComponent } from '../resevation-form/resevation-form.component';
import { ResevationListComponent } from '../resevation-list/resevation-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ResevationFormComponent,
    ResevationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResevationModule { }
