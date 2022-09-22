import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapGeneralService } from 'projects/map-service/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MapGeneralService],
  bootstrap: [AppComponent],
})
export class AppModule {}
