import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PUNMAT01Component } from './components/PUB/PUBMAT01/PUBMAT01.component';

import { PUNMAT01Module  } from './components/PUB/PUBMAT01/PUBMAT01.module';

export function loadPUNMAT01Module()
{
    return PUNMAT01Module;
}

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //{ path: 'PUBMAT01', component: PUNMAT01Component },
    { path: 'PUBMAT01', loadChildren: loadPUNMAT01Module },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**', redirectTo: 'home' },
];

export const routing= RouterModule.forRoot(routes);