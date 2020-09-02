import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-admission-form',
  templateUrl: './student-admission-form.component.html',
  styleUrls: ['./student-admission-form.component.css']
})
export class StudentAdmissionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data: NgForm) {
    console.log(data.value.studentData);
  }
}
