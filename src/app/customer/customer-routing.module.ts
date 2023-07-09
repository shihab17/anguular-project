import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomercreateComponent } from './customercreate/customercreate.component';

const routes: Routes = [
  {
    path: "list",
    component: CustomerListComponent,
    data: {
      title: "Customer",
    },
  },
  {
    path: "create",
    component: CustomercreateComponent,
    data: {
      title: "Customer",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
