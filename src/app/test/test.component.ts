import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";
import {IBook} from "../IBook";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  bookList: IBook[] = [];

  ngOnInit() {
    this.testService.getBook().subscribe(
      next => {
        this.bookList = next;
        console.log('success')
      }, error => {
        console.log('error')
      }
    )
  }

}
