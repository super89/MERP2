import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT01Component } from './PUBMAT01.component';

const routes: Routes = [
    { path: '', component: PUBMAT01Component }
];

export const routing = RouterModule.forChild(routes);
