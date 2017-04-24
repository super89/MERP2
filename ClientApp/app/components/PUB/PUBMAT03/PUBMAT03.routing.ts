import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT03Component } from './PUBMAT03.component';

const routes: Routes = [
    { path: '', component: PUBMAT03Component }
];

export const routing = RouterModule.forChild(routes);
