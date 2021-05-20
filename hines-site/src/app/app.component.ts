import { Component } from '@angular/core';
import { BillDataService } from 'src/services/bill-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  billData: Object

  constructor(private service: BillDataService){}

  ngOnInit(){
    this.billData = this.service.getBillData()
    console.log(this.billData)
  }
}
