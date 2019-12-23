import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Student from '../Student';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {
  @Output() studentInfo = new EventEmitter();

  student: Student = {
    Id: null,
    Name: '',
    Age: null
  };
  name: '';
  age: number = null;
  constructor() { }

  ngOnInit() {
  }

  getStudent() {
    this.student = {
      Id: null,
      Name: this.name,
      Age: this.age
    }
    this.studentInfo.emit(this.student)
  }

}
