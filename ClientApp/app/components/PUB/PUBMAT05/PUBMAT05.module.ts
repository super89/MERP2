import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT05Component } from './PUBMAT05.component';
import { PUBMAT05EntryComponent } from './entry/PUBMAT05.entry.component';
import { PUBMAT05ConditionComponent } from './condition/PUBMAT05.condition.component';
import { PUBMAT05QueryComponent } from './query/PUBMAT05.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT05.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUBMAT05Component, PUBMAT05EntryComponent, PUBMAT05ConditionComponent, PUBMAT05QueryComponent]
})
export class PUBMAT05Module { }
