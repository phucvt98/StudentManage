import { Component, OnInit } from '@angular/core';
import Student from './Student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student;
  lstStudent = [];
  constructor() { }

  ngOnInit() {
  }
  getStudent(student) {
    console.log(this.lstStudent);
    console.log(student);
    student.Id = this.lstStudent.length++;
    console.log(student.Id);
    console.log(student);
    this.lstStudent.push(student);
    console.log(this.lstStudent);
    // console.log(JSON.stringify(this.lstStudent) + "Length " +this.lstStudent.length)
  }

}
