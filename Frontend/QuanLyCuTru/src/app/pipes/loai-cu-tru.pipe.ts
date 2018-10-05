import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "loaiCuTru"
})
export class LoaiCuTruPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value === 1 ? "Tạm vắng" : "Tạm trú";
  }
}
