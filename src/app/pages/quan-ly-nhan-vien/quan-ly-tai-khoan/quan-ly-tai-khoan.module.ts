import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyTaiKhoanComponent } from './quan-ly-tai-khoan.component';
import { RouterModule } from '@angular/router';
import { NgnDatatableModule } from 'ngn-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectNhanVienModule } from 'app/shared/components/select-nhan-vien/select-nhan-vien.module';
import { SelectRoleModule } from 'app/shared/components/select-role/select-role.module';

@NgModule({
  declarations: [QuanLyTaiKhoanComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgnDatatableModule,
    FormsModule,
    SelectNhanVienModule,
    NbButtonModule,
    SelectRoleModule,
    RouterModule.forChild([{ path: '', component: QuanLyTaiKhoanComponent }]),
  ],
})
export class QuanLyTaiKhoanModule { }
