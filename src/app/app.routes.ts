import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EventsComponent } from './events/events.component';



const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'events',
        component: EventsComponent
    }
];



export const AppRoutes = RouterModule.forRoot(routes);

