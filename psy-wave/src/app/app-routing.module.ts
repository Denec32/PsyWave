import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeckDepressionTestComponent } from './beck-depression-test/beck-depression-test.component';

const routes: Routes = [
  {path: 'beck-depression-test', component: BeckDepressionTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
