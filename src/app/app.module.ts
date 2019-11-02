import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreateBookComponent } from './create-book/create-book.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CreateBookComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
