import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BeckDepressionTestComponent } from './beck-depression-test/beck-depression-test.component';
import { RadioSelectorComponent } from './radio-selector/radio-selector.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BeckDepressionTestComponent,
    RadioSelectorComponent,
    RangeSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
