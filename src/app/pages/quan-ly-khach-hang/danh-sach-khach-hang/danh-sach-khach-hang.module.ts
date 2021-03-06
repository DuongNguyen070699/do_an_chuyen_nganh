import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachKhachHangComponent } from './danh-sach-khach-hang.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [DanhSachKhachHangComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([{
      path: '',
      component: DanhSachKhachHangComponent,
    }]),
  ],
})
export class DanhSachKhachHangModule { }
