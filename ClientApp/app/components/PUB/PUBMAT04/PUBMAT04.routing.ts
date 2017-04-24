import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT04Component } from './PUBMAT04.component';

const routes: Routes = [
    { path: '', component: PUBMAT04Component }
];

export const routing = RouterModule.forChild(routes);
