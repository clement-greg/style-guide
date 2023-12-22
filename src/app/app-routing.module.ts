import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideInputsComponent } from './guide-inputs/guide-inputs.component';

const routes: Routes = [
  {
    path: 'inputs',
    component: GuideInputsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
