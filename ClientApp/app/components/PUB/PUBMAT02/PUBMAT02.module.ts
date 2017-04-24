import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT02Component } from './PUBMAT02.component';
import { PUBMAT02EntryComponent } from './entry/PUBMAT02.entry.component';
import { PUBMAT02ConditionComponent } from './condition/PUBMAT02.condition.component';
import { PUBMAT02QueryComponent } from './query/PUBMAT02.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT02.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUBMAT02Component, PUBMAT02EntryComponent, PUBMAT02ConditionComponent, PUBMAT02QueryComponent]
})
export class PUBMAT02Module { }
