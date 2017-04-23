import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUNMAT01Component } from './PUBMAT01.component';

const routes: Routes = [
    { path: '', component: PUNMAT01Component }
];

export const routing = RouterModule.forChild(routes);
