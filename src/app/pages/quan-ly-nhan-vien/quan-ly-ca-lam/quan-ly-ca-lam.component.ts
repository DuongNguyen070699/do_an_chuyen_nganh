import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';
import {
  SmartTableDatepickerComponent,
  SmartTableDatepickerRenderComponent,
} from './smart-table-datepicker/smart-table-datepicker.component';

@Component({
  selector: 'ngx-quan-ly-ca-lam',
  templateUrl: './quan-ly-ca-lam.component.html',
  styleUrls: ['./quan-ly-ca-lam.component.scss'],
})
export class QuanLyCaLamComponent {
  valuePrepareFunction() {
    '<input type="checkbox" checked>';
  }
  settings = {
    pager: {
      display: true,
      perPage: 7,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Id',
        type: 'string',
      },
      fullname: {
        title: 'Tên nhân viên',
        type: 'string',
      },
      ca_lam: {
        title: 'Ca làm',
        type: 'string',
      },
      ghi_chu: {
        title: 'Ghi chú',
        type: 'string',
      },
      status: {
        title: 'Có đi làm hay không',
        type: 'checkbox',
      },
      date: {
        title: 'Ngày làm',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  loadDataTable() {
    this.crudBaseService
      .get(`${environment.rest}/work-shift`)
      .subscribe((value: { allProductType: [] }) => {
        this.source.load(value.allProductType);
      });
  }
  constructor(
    private crudBaseService: CRUDBaseService,
    private toast: NbToastrService,
  ) {
    this.loadDataTable();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.crudBaseService
        .delete(`${environment.rest}/work-shift/${event.data.id}`)
        .subscribe(
          (values: { message: string }) => {
            if (values) {
              this.toast.success(values.message);
            }
          },
          (err) => {
            this.loadDataTable();
            this.toast.danger(err.error.message);
          },
          () => {
            this.loadDataTable();
          },
        );
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event) {
    delete event.newData.fullname;
    this.crudBaseService
      .post(`${environment.rest}/work-shift`, event.newData)
      .subscribe(
        (value: { message: string }) => {
          this.toast.success(value.message);
          this.loadDataTable();
        },
        (err) => {
          this.toast.danger(err.error.message);
        },
        () => {
          this.loadDataTable();
        },
      );
  }
  onSaveConfirm(event) {
    delete event.newData.fullname;
    event.newData.status = false;
    this.crudBaseService
      .put(`${environment.rest}/work-shift/${event.data.id}`, event.newData)
      .subscribe(
        (value: { message: string }) => {
          this.toast.success(value.message);
        },
        (err) => {
          this.toast.danger(err.error.message);
        },
        () => {
          this.loadDataTable();
        },
      );
  }
}