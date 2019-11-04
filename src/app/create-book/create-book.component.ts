import {Component, OnInit} from '@angular/core';
import {TestService} from "../test.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private bookService: TestService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      author_name: ['', [Validators.required, Validators.minLength(10)]],
      publisher: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
      const {value} = this.postForm;
      this.bookService.createBook(value)
        .subscribe(
          next => {
            this.postForm.reset({
              name: '',
              author_name: '',
              publisher: '',
            });
            console.log('success');
            this.router.navigate(['/list']);
          }, error => console.log(error));
  }

}
