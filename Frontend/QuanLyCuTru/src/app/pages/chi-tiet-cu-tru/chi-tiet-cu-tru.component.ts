import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { ActivatedRoute } from '@angular/router';
import { CuTru } from 'src/app/models/customizes/cutru';

@Component({
  selector: 'app-chi-tiet-cu-tru',
  templateUrl: './chi-tiet-cu-tru.component.html',
  styleUrls: ['./chi-tiet-cu-tru.component.scss']
})
export class ChiTietCuTruComponent extends AppComponent implements OnInit {

  cuTru: CuTru;
  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService,
    protected route: ActivatedRoute
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(true);
  }

  ngOnInit() {
    this.callAPI_GetCuTruById();
  }

  private callAPI_GetCuTruById() {
    const cuTruId = this.route.snapshot.params['id'];
    this.cuTruService.getCuTruById(cuTruId, result => {
      this.handlingGetCuTruById(result);
    });
  }

  private handlingGetCuTruById(result: CuTru) {
    this.cuTru = result;
  }

  public duyetCuTru() {
    const result = confirm('Bạn có muốn duyệt cư trú này?');
    if (result) {
      this.cuTruService.duyetCuTru(this.cuTru.id, result => {
        if (result == null) {
          window.alert('Không thể duyệt hoặc không tìm thấy cư trú này!');
        } else {
          window.alert('Đã duyệt thành công');
          window.location.reload();
          console.table(result);
        }
      });
    } else {
      // Không
    }
  }
}
