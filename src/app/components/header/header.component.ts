import { Component, Input } from "@angular/core";

@Component({
  selector: "header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {

  @Input() public isConnected: boolean;

}
