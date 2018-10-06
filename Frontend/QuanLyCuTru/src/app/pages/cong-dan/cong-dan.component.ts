import { Component, OnInit } from '@angular/core';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { AppComponent } from '../../app.component';
import { NguoiDung } from '../../models/standards/nguoidung';

@Component({
  selector: 'app-cong-dan',
  templateUrl: './cong-dan.component.html',
  styleUrls: ['./cong-dan.component.scss']
})
export class CongDanComponent extends AppComponent implements OnInit {
  public congDans: NguoiDung[];

  public readonly timKiems = [
    { name: 'Họ tên', value: 'hoTen' },
    { name: 'Địa chỉ', value: 'diaChi' }
  ];

  public readonly loaiTaiKhoans = [
    { name: 'Tất cả', value: null },
    { name: 'Đăng ký', value: true },
    { name: 'Chưa Đăng ký', value: false }
  ];

  public readonly gioiTinhs = [
    { name: 'Tất cả', value: null },
    { name: 'Nam', value: true },
    { name: 'Nữ', value: false }
  ];

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {}
}
