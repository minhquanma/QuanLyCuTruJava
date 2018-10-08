import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-dang-ky-cu-tru',
  templateUrl: './dang-ky-cu-tru.component.html',
  styleUrls: ['./dang-ky-cu-tru.component.scss']
})
export class DangKyCuTruComponent extends AppComponent implements OnInit {
  public ngayTao: Date = new Date();
  public ngayDangKy: Date = new Date();
  public ngayHetHan: Date = new Date();

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(true);
  }

  ngOnInit() {
    this.ngayHetHan.setMonth(this.ngayHetHan.getMonth() + 1);
  }

  public submit(value) {
    console.log(value);
  }
}
