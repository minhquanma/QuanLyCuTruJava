import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownDirective } from './components/header/dropdown.directive';
import { HeaderComponent } from './components/header/header.component';
import { ChiTietCongDanComponent } from './pages/chi-tiet-cong-dan/chi-tiet-cong-dan.component';
import { ChiTietCuTruComponent } from './pages/chi-tiet-cu-tru/chi-tiet-cu-tru.component';
import { CongDanComponent } from './pages/cong-dan/cong-dan.component';
import { CutruComponent } from './pages/cutru/cutru.component';
import { DangKyCuTruComponent } from './pages/dang-ky-cu-tru/dang-ky-cu-tru.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TrangchuComponent } from './pages/trangchu/trangchu.component';
import { GioiTinhPipe } from './pipes/gioi-tinh.pipe';
import { LoaiCuTruPipe } from './pipes/loai-cu-tru.pipe';
import { TrangThaiPipe } from './pipes/trang-thai.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    DropdownDirective,
    CutruComponent,
    DangKyCuTruComponent,
    TrangThaiPipe,
    LoaiCuTruPipe,
    CongDanComponent,
    GioiTinhPipe,
    ChiTietCongDanComponent,
    TrangchuComponent,
    DatepickerComponent,
    ChiTietCuTruComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
