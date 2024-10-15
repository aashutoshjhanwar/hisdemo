import { Component, Input } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../services/common.service';
import { ICustomFilterDataDto } from '../../interface/common.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MastersService } from '../../../views/features/masters/masters.service';
import { IDefaultResponseTableDto, IGetApplicationList, IGetRoleList } from '../../../views/features/feature.interface';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  @Input() customFilter: any;
  customFilterHere!: ICustomFilterDataDto;
  applications!: IGetApplicationList[];
  roles: any = [];

  constructor( public activeOffcanvas: NgbActiveOffcanvas, private commonService: CommonService, private masterService: MastersService) {}

  public ngOnInit() {
    this.customFilterHere = JSON.parse(this.customFilter);
    if(this.customFilterHere.isApplicationVisible) {
      this.getAllApplications();
    }
    if(this.customFilterHere.isRoleDrpVisible) {
      this.getAllRoles();
    }
  }

  getAllApplications() {
    this.masterService.getAllApplications().subscribe({
      next: (result: IDefaultResponseTableDto<IGetApplicationList[]>) => {
        this.applications = result.data;
      },
      error: (err) => { },
    });
  }

  getAllRoles() {
    this.masterService.getAllRoles().subscribe({
      next: (result: IDefaultResponseTableDto<IGetRoleList[]>) => {
        this.roles = result.data;
      },
      error: (err) => { },
    });
  }

  getRoleNameFromId(id: number){
    return this.roles.find((role: IGetRoleList) => role.id === id)
  }


  filterButton(isReset: boolean = false) {
    if (isReset) {
      this.customFilterHere.role = '';
      this.customFilterHere.roleDrp = 0;
      this.customFilterHere.application = 0;
      this.customFilterHere.email = '';
      this.customFilterHere.username = '';
      this.customFilterHere.phoneNo = '';
      this.customFilterHere.userType = 0;
      this.customFilterHere.status = 2;
    } else {
        if(this.customFilterHere.roleDrp){
          this.customFilterHere['roleName'] = this.getRoleNameFromId(this.customFilterHere.roleDrp).roleName || ''
        }
        this.activeOffcanvas.dismiss(this.customFilterHere);
    }
  }

  close() {
    this.activeOffcanvas.dismiss();
  }
}
