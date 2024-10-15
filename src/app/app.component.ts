import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalModule, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,MsalModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  
  title:any="IIVF"
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();


  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
  ){
    
    setTimeout(() => {
      let splash = document.getElementById('splash-screen');
      if (splash) {
        splash.remove();
      }
    }, 1000);
  } 
  }
