import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT05Component } from './PUBMAT05.component';

const routes: Routes = [
    { path: '', component: PUBMAT05Component }
];

export const routing = RouterModule.forChild(routes);
