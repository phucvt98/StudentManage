import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { StudentComponent } from './student/student.component';
import { AddNewStudentComponent } from './student/add-new-student/add-new-student.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

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
    MatInputModule,
    FormsModule
  ]
})
export class ViewModule { }
