import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { AppRoutes } from './app.routes';
import { EventsComponent } from './events/events.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { ZodiacSignsComponent } from './zodiac-signs/zodiac-signs.component';


import { ToastModule } from './toast/toast.module';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    HomeComponent,
    EventsComponent,
    ZodiacSignsComponent,
    CalendarComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutes,
    CommonModule,
    CalendarCommonModule,
    CalendarMonthModule,
    NgbModule,
    NgbModalModule,
    BrowserModule,
    FormsModule,
    ToastModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
