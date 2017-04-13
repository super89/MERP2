import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PUNMAT01Component } from './components/PUB/PUBMAT01/PUBMAT01.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //{ path: 'PUBMAT01', component: PUNMAT01Component },
    { path: 'PUBMAT01', loadChildren: '/PUB/PUBMAT01/PUBMAT01.module#PUNMAT01Module' },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**', redirectTo: 'home' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);