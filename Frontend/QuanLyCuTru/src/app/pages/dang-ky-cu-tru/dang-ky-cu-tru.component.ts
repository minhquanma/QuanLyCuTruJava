import { CuTruDTO } from './../../models/customizes/cutru.dto';
import { CuTru } from './../../models/customizes/cutru';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { NguoiDung } from '../../models/standards/nguoidung';
import { CongdanService } from '../../services/congdan.service';
import { LOAI_CU_TRU } from 'src/app/utilities/constants';

@Component({
  selector: 'app-dang-ky-cu-tru',
  templateUrl: './dang-ky-cu-tru.component.html',
  styleUrls: ['./dang-ky-cu-tru.component.scss']
})
export class DangKyCuTruComponent extends AppComponent implements OnInit {
  public ngayTao: Date = new Date();
  public ngayDangKy: Date = new Date();
  public ngayHetHan: Date = new Date();

  public readonly loaiCuTrus = [
    { name: 'Tạm vắng', value: 1 },
    { name: 'Tạm trú', value: 2 }
  ];
  public bsValue: Date = new Date();

  private selectedLoaiCuTru = 0;
  // Mảng lưu danh sách công dân đăng ký (mặc định sẽ là rỗng)
  public congDanList: Array<NguoiDung> = new Array<NguoiDung>();

  constructor(
    protected cuTruService: CutruService,
    protected congDanService: CongdanService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(true);
  }

  ngOnInit() {
    this.ngayHetHan.setMonth(this.ngayHetHan.getMonth() + 1);
  }

  public onAddCongDanClicked(value: string): void {
    // 1. Kiểm tra xem trong mảng đã tồn tại người dùng này hay chưa
    // Tìm kiếm trong mảng với id được nhập từ user
    const findCongDan = this.congDanList.find(congDan => {
      return congDan.id === +value;
    });

    // <> Trường hợp mảng chưa tồn tại người dùng này
    if (findCongDan === undefined) {
      // 2. Lấy thông tin người dùng từ server
      this.congDanService.getNguoiDungById(+value, congDan => {
        // <> Trường hợp tìm thấy công dân
        if (congDan !== null) {
          // 3. Thêm người dùng này vào danh sách công dân
          this.congDanList.push(congDan);
        } else {
          // <> Trường hợp không tìm thấy công dân
          // TODO: hiện label thông báo lỗi
          window.alert('Không tìm thấy công dân với mã số ' + value);
        }
      });
    } else {
      // <> Trường hợp mảng đã tồn tại người dùng này
      window.alert('Vui long nhap cong dan khac!');
      console.log(findCongDan);
    }
    // Kết thúc xử lý
  }

  public onDangKyCuTruClicked(value) {
    const cuTruData: CuTruDTO = new CuTruDTO(value);
    // Gắn id loại cư trú đã chọn
    // Mặc định là Tạm Vắng = 1
    cuTruData.loaiCuTruId =
      this.selectedLoaiCuTru === 0
        ? LOAI_CU_TRU.TAM_VANG
        : this.selectedLoaiCuTru;

    // Gắn danh sách công dân vào cư trú
    cuTruData.congDans = this.congDanList;

    console.table(cuTruData);

    // Gửi lên server
    this.cuTruService.createCuTru(cuTruData, result => {
      console.log(result);
      if (result === null) {
        window.alert('Dang ky cu tru that bai!');
      } else {
        // Sau khi đăng ký thành công thì chuyển về trang cư trú
        // TODO: chuyển về trang quản lý cư trú
      }
    });
  }

  public onLoaiCuTruSelectChanged(value: number): void {
    this.selectedLoaiCuTru = +value;
  }
}
