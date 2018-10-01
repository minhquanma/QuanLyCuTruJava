import { Component, OnInit, DoCheck } from '@angular/core';
import { CutruService } from './services/cutru.service';
import { CuTru } from './models/customizes/cutru';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cuTrus: CuTru[];

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {}

  ngOnInit() {
    this.getAllCuTru();
  }

  public isDisplayHeader(): boolean {
    return this.utilitiesService.isDisplayHeader();
  }

  public isDisplayFooter(): boolean {
    return this.utilitiesService.isDisplayFooter();
  }

  private getAllCuTru() {
    this.cuTruService.getAllCuTru().subscribe((data: CuTru[]) => {
      this.cuTrus = data;
      console.log(data);
    });
  }
}
