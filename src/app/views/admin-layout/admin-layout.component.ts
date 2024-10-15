import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared/components/shared-components.module';
import { DrawersModule } from '../../shared/components/drawers/drawers.module';
import { DropdownMenusModule } from '../../shared/components/dropdown-menus/dropdown-menus.module';
import { EngagesModule } from '../../shared/components/engages/engages.module';
import { ExtrasModule } from '../../shared/components/extras/extras.module';
import { ModalsModule } from '../../shared/components/modals/modals.module';
import { LayoutInitService } from '../../shared/services/layout-init.service';
import { LayoutService } from '../../shared/services/layout.service';



@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, 
    SharedComponentModule, 
    ExtrasModule,
    ModalsModule,
    DrawersModule,
    EngagesModule,
    DropdownMenusModule,],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
 // Public variables
 userdata: any; 
 selfLayout = 'default';
 asideSelfDisplay!: true;
 asideMenuStatic!: true;
 contentClasses = '';
 contentContainerClasses = '';
 toolbarDisplay = true;
 contentExtended!: false;
 asideCSSClasses!: string;
 asideHTMLAttributes: any = {};
 headerMobileClasses = '';
 headerMobileAttributes = {};
 footerDisplay!: boolean;
 footerCSSClasses!: string;
 headerCSSClasses!: string;
 headerHTMLAttributes: any = {};
 // offcanvases
 extrasSearchOffcanvasDisplay = false;
 extrasNotificationsOffcanvasDisplay = false;
 extrasQuickActionsOffcanvasDisplay = false;
 extrasCartOffcanvasDisplay = false;
 extrasUserOffcanvasDisplay = false;
 extrasQuickPanelDisplay = false;
 extrasScrollTopDisplay = false;
 asideDisplay!: boolean;
 @ViewChild('ktAside', { static: true }) ktAside!: ElementRef;
 @ViewChild('ktHeaderMobile', { static: true }) ktHeaderMobile!: ElementRef;
 @ViewChild('ktHeader', { static: true }) ktHeader!: ElementRef;

 constructor(
   private initService: LayoutInitService,
   private layout: LayoutService,
 ) {
   this.initService.init();
 }

 ngOnInit(): void {
   // build view by layout config settings
   this.asideDisplay = this.layout.getProp('aside.display') as boolean;
   this.toolbarDisplay = this.layout.getProp('toolbar.display') as boolean;
   this.contentContainerClasses = this.layout.getStringCSSClasses('contentContainer');
   this.asideCSSClasses = this.layout.getStringCSSClasses('aside');
   this.headerCSSClasses = this.layout.getStringCSSClasses('header');
   this.headerHTMLAttributes = this.layout.getHTMLAttributes('headerMenu');
 }




 ngAfterViewInit(): void {
   if (this.ktHeader) {
     for (const key in this.headerHTMLAttributes) {
       if (this.headerHTMLAttributes.hasOwnProperty(key)) {
         this.ktHeader.nativeElement.attributes[key] =
           this.headerHTMLAttributes[key];
       }
     }
   }
 }
}
