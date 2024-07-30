import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingService, DiagramModule, HierarchicalTreeService } from '@syncfusion/ej2-angular-diagrams';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule,
  ],
  providers: [HierarchicalTreeService, DataBindingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
