import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT06Component } from './PUBMAT06.component';

const routes: Routes = [
    { path: '', component: PUBMAT06Component }
];

export const routing = RouterModule.forChild(routes);
