import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (data) => {
        console.log(data);
        this.customers =data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
