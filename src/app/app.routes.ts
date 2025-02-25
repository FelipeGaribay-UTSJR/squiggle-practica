import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemporadasComponent } from './pages/temporadas/temporadas.component';
import { EquiposComponent } from './pages/equipos/equipos.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'temporadas',
        component: TemporadasComponent
    },
    {
        path: 'equipos',
        component: EquiposComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
