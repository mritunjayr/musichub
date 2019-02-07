import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {FavouriteComponent} from './favourite/favourite.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'result',component:SearchResultComponent},
  {path:'favs',component:FavouriteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
