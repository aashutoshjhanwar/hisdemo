import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds-widget2',
  templateUrl: './feeds-widget2.component.html',
})
export class FeedsWidget2Component implements OnInit {
  public gridData: any[] = [
    { ProductID: 1, ProductName: 'Chai', Category: 'Beverages', Price: 18 },
    { ProductID: 2, ProductName: 'Chang', Category: 'Beverages', Price: 19 },
    // Add more data here
  ];
  constructor() {}

  ngOnInit(): void {}
}
