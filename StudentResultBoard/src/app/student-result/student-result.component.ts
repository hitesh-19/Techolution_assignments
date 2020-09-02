import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  students:Array<any> = [];
  updateStudents = [];
  studentData = {};
  maxValue: number = 0;
  total: number;
  passStatus: String = '';

  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentService.getResults().subscribe(
      data => {
        this.students = data['students'];
        for(let data of this.students) {
          if(this.maxValue < this.sum(data.marks)) {
            this.maxValue = this.sum(data.marks);
          }
        }
      }, error => {
        console.log(error);
      }
    )
  }

  sum(marks) {
    if(Number(marks.Maths)<20 || Number(marks.English)<20 || Number(marks.Science)<20)
      this.passStatus = 'Fail';
    else
      this.passStatus = 'Pass';

    this.total  = Number(marks.Maths) + Number(marks.English) + Number(marks.Science);

    if(this.total===this.maxValue && this.passStatus!='Fail')
      this.passStatus = 'Topper';
    return this.total;
  }
  fontColor(marks) {
    this.sum(marks);
    if(this.passStatus=='Fail')
      return 'red';
    else if(this.passStatus=='Pass')
      return 'black';
    else if(this.passStatus=='Topper')
      return 'green';
  }
}
