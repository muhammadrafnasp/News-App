import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(home: [], searchKey: string, propName: string): any[] {
    if (!home || searchKey == "" || propName == "") {
      return home;
    }


    const result: any = []; //new array
    home.forEach((home: any) => {
      if (home[propName].trim().toLowerCase().includes(searchKey.toLowerCase())) {
        result.push(home);
      }
    })
    return result;
  }

}
