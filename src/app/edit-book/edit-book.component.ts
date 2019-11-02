import {Component, OnInit} from '@angular/core';
import {TestService} from "../test.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IBook} from "../IBook";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: IBook;
  postForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bookService: TestService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      publisher: ['', [Validators.required, Validators.minLength(2)]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getPostById(id).subscribe(
      next => {
        this.book = next;
        this.postForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const {value} = this.postForm;
    value.id = id;
    this.bookService.updatePost(value).subscribe(next => {
      this.router.navigate(['/list']).then( r =>console.log('success'));
    }, error => {
      console.log('error')
    })

  }

}
