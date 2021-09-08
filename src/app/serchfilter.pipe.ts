import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchfilter'
})
export class SerchfilterPipe implements PipeTransform {

 
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val:any) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args)) || (val.name.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
