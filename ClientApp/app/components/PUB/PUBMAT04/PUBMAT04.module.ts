import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT04Component } from './PUBMAT04.component';
import { PUBMAT04EntryComponent } from './entry/PUBMAT04.entry.component';
import { PUBMAT04ConditionComponent } from './condition/PUBMAT04.condition.component';
import { PUBMAT04QueryComponent } from './query/PUBMAT04.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT04.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUBMAT04Component, PUBMAT04EntryComponent, PUBMAT04ConditionComponent, PUBMAT04QueryComponent]
})
export class PUBMAT04Module { }
