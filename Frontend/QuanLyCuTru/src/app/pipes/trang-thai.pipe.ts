import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trangThai'
})
export class TrangThaiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Đã duyệt' : 'Chưa duyệt';
  }

}
