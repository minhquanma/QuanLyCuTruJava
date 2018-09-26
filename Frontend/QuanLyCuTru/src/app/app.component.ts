import { Component } from '@angular/core';
import { CutruService } from './services/cutru.service';
import { CuTru } from './models/customizes/cutru';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cuTrus: CuTru[];
  constructor(protected cuTruService: CutruService) {
    cuTruService.getAll().subscribe((data: CuTru[]) => {
      this.cuTrus = data;
      console.log(data);
    });
  }
}
