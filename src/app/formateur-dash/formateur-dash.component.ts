import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  course: string;
  sales:number;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course:'Angular',sales:22,amount:50},
  {course:'Angular',sales:20,amount:50},
  {course:'Angular',sales:20,amount:50},
  {course:'Angular',sales:20,amount:50},
  {course:'Angular',sales:20,amount:50},
 
];

@Component({
  selector: 'app-formateur-dash',
  templateUrl: './formateur-dash.component.html',
  styleUrls: ['./formateur-dash.component.scss']
})
export class FormateurDashComponent implements OnInit {
  opened: boolean;
  constructor() { }
  displayedColumns: string[] = ['course', 'sales', 'amount'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.opened=true;
  }

}
