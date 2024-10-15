import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  cards = [
    {
      badgeText: 'Appointment',
      detailsText: 'Follow Up',
      date: '3rd Sep 24',
      isChecked: true
    },
    {
      badgeText: 'Consent',
      detailsText: 'File',
      date: '3rd Sep 24',
      isChecked: true
    },
    {
      badgeText: 'Injection',
      detailsText: 'Simulation',
      date: '3rd Sep 24',
      isChecked: true
    },
    {
      badgeText: 'Billing',
      detailsText: 'Cash Counter',
      date: '3rd Sep 24',
      isChecked: false
    },
    {
      badgeText: 'Pharmacy',
      detailsText: 'Medicines',
      date: '3rd Sep 24',
      isChecked: false
    }

  ];
  toggleCheckbox(card: any): void {
    card.isChecked = !card.isChecked;
  }
}
