import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText?: any): any {
    if(!value) return [];
    if(!searchText) return value;
    searchText = searchText.toLowerCase();
    return value.filter( (it : any) => {
      console.log(it)
      return it.type.toLowerCase().includes(searchText) || it.image_url.toString().includes(searchText) || (it.topping &&  it.popularity.toString().includes(searchText) || it.description.toLowerCase().includes(searchText));
    });
  }

}
