import { Component } from "@angular/core";
import { CutruService } from "./services/cutru.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(protected cuTruService: CutruService) {
    /*
    cuTruService.getAll().subscribe((data: CuTru[]) => {
      this.cuTrus = data;
      console.log(data);
    });
    */
  }
}
