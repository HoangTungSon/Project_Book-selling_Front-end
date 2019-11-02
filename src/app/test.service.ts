import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "./IBook";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private httpClient: HttpClient) {
  }

  URL = 'http://localhost:8080/Book_store-1.0-SNAPSHOT/books';

  getPostById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.URL}/${id}`);
  }

  getBook(count = 10): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.URL).pipe(
      map(data => data.filter((todo, i) => i < count))
    )
  }

  createBook(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(this.URL + '/', book)
  }

  updatePost(book: IBook): Observable<IBook> {
    return this.httpClient.patch<IBook>(`${this.URL}/${book.id}`, book);
  }

  deletePost(id: number): Observable<any> {
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
