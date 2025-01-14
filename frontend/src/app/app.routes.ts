import {Routes} from '@angular/router';
import {ShortenedRouteComponent} from './shortened-route/shortened-route.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'short/:id', component: ShortenedRouteComponent }
];
