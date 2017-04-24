import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT08Component } from './PUBMAT08.component';

const routes: Routes = [
    { path: '', component: PUBMAT08Component }
];

export const routing = RouterModule.forChild(routes);
