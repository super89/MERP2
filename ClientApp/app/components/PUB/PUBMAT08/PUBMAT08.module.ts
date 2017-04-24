import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT08Component } from './PUBMAT08.component';
import { PUBMAT08EntryComponent } from './entry/PUBMAT08.entry.component';
import { PUBMAT08ConditionComponent } from './condition/PUBMAT08.condition.component';
import { PUBMAT08QueryComponent } from './query/PUBMAT08.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT08.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUBMAT08Component, PUBMAT08EntryComponent, PUBMAT08ConditionComponent, PUBMAT08QueryComponent]
})
export class PUBMAT08Module { }
