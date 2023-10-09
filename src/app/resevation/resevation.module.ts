import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResevationFormComponent } from '../resevation-form/resevation-form.component';
import { ResevationListComponent } from '../resevation-list/resevation-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HomeModule} from "../home/home.module";



@NgModule({
  declarations: [
    ResevationFormComponent,
    ResevationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class ResevationModule { }
