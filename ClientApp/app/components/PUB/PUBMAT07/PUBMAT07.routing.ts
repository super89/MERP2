import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT07Component } from './PUBMAT07.component';

const routes: Routes = [
    { path: '', component: PUBMAT07Component }
];

export const routing = RouterModule.forChild(routes);
