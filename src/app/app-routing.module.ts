import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './Views/dash-board/dash-board.component';
import { PageNotFoundComponent } from './Views/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/view.module').then(m => m.ViewModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
