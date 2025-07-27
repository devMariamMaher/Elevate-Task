import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], filterKey: string): any[] {
    let arrCopy = [...arr]

    if (!arr || !filterKey || filterKey === 'Sort by') return arrCopy;

    if (filterKey === 'Name A-Z') {
      return arrCopy.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    } else if (filterKey === 'Name Z-A') {
      return arrCopy.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1);
    } else if (filterKey === 'Price Low to High') {
      return arrCopy.sort((a, b) => a.price - b.price);
    } else if (filterKey === 'Price High to Low') {
      return arrCopy.sort((a, b) => b.price - a.price);
    } else {
      return arrCopy;
    }
  }

}
