import { Injectable } from '@angular/core';
import { ICar } from '../my-types/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: ICar[] = [
    {
      name: 'BMW',
      madeYear: 1996,
    },
    {
      name: 'Marcides',
      madeYear: 1996,
    },
    {
      name: 'Toyota',
      madeYear: 1996,
    },
  ];
  constructor() { }

  DisplayAllCar = () => this.cars;

  DisplayCarByName(CarName: string): ICar | null {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].name == CarName) {
        return this.cars[i];
      }
    }
    return null;
  }
}
