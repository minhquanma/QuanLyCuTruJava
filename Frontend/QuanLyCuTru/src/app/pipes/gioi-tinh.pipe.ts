import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gioiTinh'
})
export class GioiTinhPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? 'Nam' : 'Nữ';
  }
}
