import { Component, OnInit, DoCheck } from '@angular/core';
import { CutruService } from './services/cutru.service';
import { CuTru } from './models/customizes/cutru';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  public isDisplayHeader: boolean;
  public isDisplayFooter: boolean;
  public cuTrus: CuTru[];

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilitiesService
  ) {}

  ngOnInit() {
    this.getAllCuTru();
  }

  ngDoCheck() {
    this.isDisplayHeader = this.utilitiesService.isDisplayHeader();
    this.isDisplayFooter = this.utilitiesService.isDisplayFooter();
  }

  private getAllCuTru() {
    this.cuTruService.getAllCuTru().subscribe((data: CuTru[]) => {
      this.cuTrus = data;
      console.log(data);
    });
  }
}
