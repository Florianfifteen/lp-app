import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../core/models/student';
import { StudentService } from '../core/services/http/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students$: Observable<Student[]> | undefined;

  constructor(private _studentService : StudentService) {}

  ngOnInit(): void {
  }

}
