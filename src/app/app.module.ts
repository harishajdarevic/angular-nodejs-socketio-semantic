import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SuiModule } from "ng2-semantic-ui";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SocketService } from "./socket/socket.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    SuiModule,
    HttpClientModule,
  ],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule { }
