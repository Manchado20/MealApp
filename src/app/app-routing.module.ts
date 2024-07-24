import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'index', component: SearchComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
