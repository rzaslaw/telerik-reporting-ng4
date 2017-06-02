import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//Imponrt Telerik Reporting Module
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
// Import the Kendo UI Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the Kendo UI ButtonsModule and DropDownsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    TelerikReportingModule, 
    BrowserAnimationsModule, 
    ButtonsModule, 
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
