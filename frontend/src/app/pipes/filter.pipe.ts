import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchBar: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchBar) {
      return items;
    }
    searchBar = searchBar.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchBar);
    });
  }
}