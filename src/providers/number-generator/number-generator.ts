import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NumberGeneratorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NumberGeneratorProvider {

  constructor() {
    console.log('Hello NumberGeneratorProvider Provider');
  }

  hello(name) {
    return "hello :" + name + '.';
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  add(x: number, y: number): number {
    let res: number = x + y;
    return res;
  }

  is_odd(x: number) {
    if (x % 2 === 1)
      return true;

    return false;
  }
 /* iszero(x) {
    if (x = 0)
      return true;
  }*/

}
