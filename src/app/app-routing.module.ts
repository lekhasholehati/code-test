import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './pages/film/film.component';
import { HomeComponent } from './pages/home/home.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PeopleDetailComponent } from './pages/people-detail/people-detail.component';
import { PeopleComponent } from './pages/people/people.component';

const routes: Routes = [
  {
    redirectTo : 'home',
    path       : '',
    pathMatch  : 'full'
  },
  {
    component : MainPageComponent,
    path      : '',
    children  : [
      {
        component  : HomeComponent,
        path       : 'home'
      },
      {
        component  : FilmComponent,
        path       : 'films'
      },
      {
        component  : PeopleComponent,
        path       : 'people'
      },
      {
        component  : PeopleDetailComponent,
        path       : 'people-detail/:url'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
