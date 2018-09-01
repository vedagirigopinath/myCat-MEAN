import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
        if (args === 'popularity') {
          return value.sort((a: any, b: any) => {
              if (a.rating > b.rating) {
                  return -1;
              } else if (a.rating < b.rating) {
                  return 1;
              } else {
                  return 0;
              }
          });
      } else if (args === 'pricelh') {
          return value.sort((a: any, b: any) => {
              if (a.price < b.price) {
                  return -1;
              } else if (a.price > b.price) {
                  return 1;
              } else {
                  return 0;
              }
          });

      } else if (args === 'pricehl') {
          return value.sort((a: any, b: any) => {
              if (a.price > b.price) {
                  return -1;
              } else if (a.price < b.price) {
                  return 1;
              } else {
                  return 0;
              }
          });
      }
      return value;
    
  }

}
