import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keenicon', 
  templateUrl: './keenicon.component.html',
  styleUrl: './keenicon.component.scss'
})
export class KeeniconComponent  implements OnInit{
  @Input() name!: string;
  @Input() class!: string;
  @Input() type: string = 'duotone';

  pathsNumber: number = 0;

  constructor() {
  }

  ngOnInit() {
    if (this.type === 'duotone') {
      // @ts-ignore
      this.pathsNumber = icons[this.type + '-paths'][this.name] ?? 0;
    }
  }

  @HostBinding('style.display')
  get styleDisplay() {
    return 'contents';
  }
}

