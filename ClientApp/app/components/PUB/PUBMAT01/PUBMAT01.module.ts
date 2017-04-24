import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT01Component } from './PUBMAT01.component';
import { PUBMAT01EntryComponent } from './entry/PUBMAT01.entry.component';
import { PUBMAT01ConditionComponent } from './condition/PUBMAT01.condition.component';
import { PUBMAT01QueryComponent } from './query/PUBMAT01.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT01.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUBMAT01Component, PUBMAT01EntryComponent, PUBMAT01ConditionComponent, PUBMAT01QueryComponent]
})
export class PUBMAT01Module { }
