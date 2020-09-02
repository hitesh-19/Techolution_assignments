import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentResultComponent } from './student-result/student-result.component';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/student-result', pathMatch: 'full'},
  {path: 'student-result', component: StudentResultComponent},
  {path: 'student-admission', component: StudentAdmissionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
