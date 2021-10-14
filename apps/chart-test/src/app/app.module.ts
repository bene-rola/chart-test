import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestchartComponent } from './testchart/testchart.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [AppComponent, TestchartComponent],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
