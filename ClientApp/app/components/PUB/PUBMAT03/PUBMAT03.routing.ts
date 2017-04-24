import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUNMAT03Component } from './PUBMAT03.component';

const routes: Routes = [
    { path: '', component: PUNMAT03Component }
];

export const routing = RouterModule.forChild(routes);
