import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VisitEntryComponent } from "./visit-entry/visit-entry.component";
import { TasksComponent } from "./tasks/tasks.component";


export const Home_Routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'visit',
    component: VisitEntryComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
]
