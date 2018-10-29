import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AppComponent } from '../../app.component';
import { NguoiDung } from '../../models/standards/nguoidung';
import { CongdanService } from '../../services/congdan.service';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-cong-dan',
  templateUrl: './cong-dan.component.html',
  styleUrls: ['./cong-dan.component.scss']
})
export class CongDanComponent extends AppComponent implements OnInit {
  public congDans: NguoiDung[];
  public congDansPagination: NguoiDung[];

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
    protected utilitiesService: UtilityService,
    private congDanService: CongdanService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {
    this.callAPI_GetNguoiDungs();
    this.init();
  }

  public pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.congDansPagination = this.congDans.slice(startItem, endItem);
  }

  private init() {
    this.congDansPagination = this.congDans.slice(0, 5);
  }

  private callAPI_GetNguoiDungs() {
    this.congDanService.getNguoiDungs(result => {
      this.congDans = result;
    });
  }
}
