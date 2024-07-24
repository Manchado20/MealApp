import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Agregar FormsModule a los imports
    HttpClientModule // Agregar HttpClientModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
