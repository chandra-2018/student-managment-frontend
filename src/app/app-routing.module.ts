import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {ListStudentComponent} from "./components/list-student/list-student.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'list-student', component: ListStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
