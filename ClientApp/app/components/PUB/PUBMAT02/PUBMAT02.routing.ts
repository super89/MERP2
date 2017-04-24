import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT02Component } from './PUBMAT02.component';

const routes: Routes = [
    { path: '', component: PUBMAT02Component }
];

export const routing = RouterModule.forChild(routes);
