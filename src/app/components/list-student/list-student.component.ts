import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: any;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent = () => {
    this.studentService.getAllStudent().subscribe(students => {
      console.log(JSON.stringify(students));
      this.students = students;
    });
  }

}
