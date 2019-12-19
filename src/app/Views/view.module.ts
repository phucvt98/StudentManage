import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { StudentComponent } from './student/student.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AddNewStudentComponent } from './student/add-new-student/add-new-student.component';

@NgModule({
  declarations: [
    ViewComponent,
    DashBoardComponent,
    StudentComponent,
    AddNewStudentComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ViewModule { }
