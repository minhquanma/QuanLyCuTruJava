import { Component } from "@angular/core";
import { CutruService } from "../service/cutru.service";
import { CuTru } from "../model/CuTru";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  cuTrus: CuTru[];
  constructor(private cuTruService: CutruService) {
    cuTruService.getAll().subscribe((data: CuTru[]) => {
      this.cuTrus = data;
      console.log(data);
    });
  }
}
