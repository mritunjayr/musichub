import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {FavouriteComponent} from './favourite/favourite.component';
import{MusicDetailsComponent} from './music-details/music-details.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'result/:id',component:SearchResultComponent},
  {path:'favs',component:FavouriteComponent},
  {path:'details/:id',component:MusicDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
