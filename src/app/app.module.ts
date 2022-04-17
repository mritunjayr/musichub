import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MusicService } from './services/music.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { MusicDetailsComponent } from './music-details/music-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SearchResultComponent,
    FavouriteComponent,
    MusicDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MusicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
