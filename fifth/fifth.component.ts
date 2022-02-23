import { Component, OnInit } from '@angular/core';
import { FifthService } from './fifth.service';
import { Student } from './Student';

@Component({
  selector: 'fifth-route',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  isAscendingSort: boolean = false;
  count: number = 0;
  constructor(private service: FifthService) { }

  columns = ["Id", "Student's Name", "Class", "Section", "Subject 1", "Subject 2", "Subject 3"];
  index = ["id", "studentsname", "class", "section", "sub1", "sub2", "sub3"];

  students: Student[] = [];

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (data) => { this.students = data }
    )
  }
  sortUser() {
    let data = this.students;
    this.count++;
    switch (this.count) {
      case 1: {
        this.isAscendingSort = !this.isAscendingSort;
        this.students.sort((item1: any, item2: any) => this.compare(item1, item2));
        break;
      }
      case 2: {
        this.students.sort((item1: any, item2: any) => this.compare(item1, item2));
        break;
      }
      case 3: {
        this.students = data;
        break;
      }
    }
  }
  compare(item1: any, item2: any): number {
    let compValue = 0;
    compValue = item1.attributes.id.localeCompare(item2.attributes.id, 'en', {
        sensitivity: 'base'
    });
    console.log(compValue);
    if (!this.isAscendingSort) {
      compValue = compValue * -1;
    }
    return compValue;
  }
}
