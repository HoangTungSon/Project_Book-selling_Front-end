import {Component, OnInit} from '@angular/core';
import {IBook} from "../IBook";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {TestService} from "../test.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: IBook;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private postService: TestService
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.book = next;
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  onDeletePost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.deletePost(id).subscribe(next => {
      this.router.navigate(['/list']).then(r=> console.log("success delete"))
    }, error => {
      console.log('error')
    })
  }

}
