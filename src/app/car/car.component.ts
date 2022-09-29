import { Component, OnInit } from '@angular/core';
import { ICar } from '../my-types/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: ICar[];
  constructor(private carService: CarService) {
    this.cars = carService.DisplayAllCar();
  }

  ngOnInit(): void {
  }

}
