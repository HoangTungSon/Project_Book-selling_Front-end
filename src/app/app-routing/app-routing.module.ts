import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from "../test/test.component";
import {CreateBookComponent} from "../create-book/create-book.component";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {DeleteBookComponent} from "../delete-book/delete-book.component";

const routes: Routes = [{
  path: 'list',
  component: TestComponent
}, {
  path: 'list/create',
  component: CreateBookComponent
}, {
  path: 'list/:id/edit',
  component: EditBookComponent
}, {
  path: 'list/:id/delete',
  component: DeleteBookComponent
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
