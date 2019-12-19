import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  { path: '', component: DashBoardComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
