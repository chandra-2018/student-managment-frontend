import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      processStatus: new FormControl(''),
      mobileNo: new FormControl(''),
      address: new FormGroup({
        streetName: new FormControl(''),
        cityName: new FormControl(''),
        stateName: new FormControl(''),
        zipCode: new FormControl(''),
        countryName: new FormControl('')
      })
    });
  }

  saveStudent = (student: any) => {
    console.log(JSON.stringify(student));
    this.studentService.saveStudent(student).subscribe(res => {
      alert('student info is saved successfully in db.');
      this.router.navigateByUrl('list-student');
    });
  }
}
