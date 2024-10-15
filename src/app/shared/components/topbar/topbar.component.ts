import { Component, OnInit } from '@angular/core'; 
import { LayoutService } from '../../services/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  toolbarButtonMarginClass = 'ms-1 ms-lg-3';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';
  date: string | undefined;
  time: string | undefined;
  fullName: string | undefined;
  firstLetter: string | undefined;
  sessionStartTime!: Date;
  sessionTime: string = '';
  intervalId: any;

  constructor( private layout: LayoutService) {}

  ngOnInit(): void {

  }



  

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }


  
}
