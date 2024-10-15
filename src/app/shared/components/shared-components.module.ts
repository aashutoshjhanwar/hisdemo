import { NgModule } from "@angular/core";
import { AsideComponent } from "./aside/aside.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ScriptsInitComponent } from "./scripts-init/scripts-init.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { CommonModule } from "@angular/common";
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetsModule } from "./widgets/widgets.module";
import { CardsModule } from "./cards/cards.module";
import { ThemeModeModule } from "./theme-mode-switcher/theme-mode.module";
import { SplashScreenModule } from "./splash-screen/splash-screen.module";
import { ChatInnerModule } from "./chat-inner/chat-inner.module";
import { DrawersModule } from "./drawers/drawers.module";
import { DropdownMenusModule } from "./dropdown-menus/dropdown-menus.module";
import { EngagesModule } from "./engages/engages.module";
import { ExtrasModule } from "./extras/extras.module";
import { ModalsModule } from "./modals/modals.module";
import { AsideMenuComponent } from "./aside/aside-menu/aside-menu.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { PageTitleComponent } from "./header/page-title/page-title.component";
import { HeaderMenuComponent } from "./header/header-menu/header-menu.component";
import { EngagesComponent } from "./engages/engages.component";
import { KeeniconComponent } from "./keenicon/keenicon.component";
import { FormsModule } from "@angular/forms";

const LAYOUT_COMPONENTS = [
    AsideComponent,
    TopbarComponent,
    ToolbarComponent,
    ScriptsInitComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AsideMenuComponent,
    PageTitleComponent,
    EngagesComponent,
    KeeniconComponent,
    HeaderMenuComponent,
]
@NgModule({
    exports:[LAYOUT_COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        RouterOutlet,
        InlineSVGModule,
        CardsModule,
        ChatInnerModule,
        DrawersModule,
        DropdownMenusModule,
        EngagesModule,
        ModalsModule,
        SplashScreenModule,
        ThemeModeModule,
        WidgetsModule,
        RouterModule,
    ],
    declarations: [LAYOUT_COMPONENTS],
})
 export class SharedComponentModule{}