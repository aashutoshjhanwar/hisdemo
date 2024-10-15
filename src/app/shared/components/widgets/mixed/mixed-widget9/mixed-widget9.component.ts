import { Component, Input, OnInit } from '@angular/core'; 
import { getCSSVariableValue } from '../../../../utils/_utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mixed-widget9',
  templateUrl: './mixed-widget9.component.html',
})
export class MixedWidget9Component implements OnInit {
  @Input() chartColor: string = '';
  @Input() strokeColor: string = '';
  @Input() chartHeight: string = '';
  chartOptions: any = {};

  constructor(private linksModel: NgbModal,) {}

  ngOnInit(): void {
   
  }

  AddQuickLinks(){
    
   

  }
}


