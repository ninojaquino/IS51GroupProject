import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EventsComponent } from './events/events.component';
import { Component } from '@angular/core';
import { ZodiacSignsComponent } from './zodiac-signs/zodiac-signs.component';


const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'zodiac-signs',
        component: ZodiacSignsComponent
    }
];



export const AppRoutes = RouterModule.forRoot(routes);

