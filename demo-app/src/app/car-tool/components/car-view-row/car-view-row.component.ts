import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'tr.car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css']
})
export class CarViewRowComponent implements OnInit {

  @Input()
  car: Car = null;

  constructor() { }

  ngOnInit(): void {
  }

}