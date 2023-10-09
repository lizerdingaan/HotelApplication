import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResevationListComponent} from "./resevation-list/resevation-list.component";
import {ResevationFormComponent} from "./resevation-form/resevation-form.component";

const routes: Routes = [
  {path: '',
  component: HomeComponent
  },
  {path: 'list',
  component: ResevationListComponent
  },
  {path: 'new',
  component: ResevationFormComponent
  },
  {path: 'edit/:id',
  component: ResevationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
