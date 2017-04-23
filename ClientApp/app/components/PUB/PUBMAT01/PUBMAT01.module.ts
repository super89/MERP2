import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUNMAT01Component } from './PUBMAT01.component';
import { PUNMAT01EntryComponent } from './entry/PUBMAT01.entry.component';
import { PUNMAT01ConditionComponent } from './condition/PUBMAT01.condition.component';
import { PUNMAT01QueryComponent } from './query/PUBMAT01.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT01.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUNMAT01Component, PUNMAT01EntryComponent, PUNMAT01ConditionComponent, PUNMAT01QueryComponent]
})
export class PUNMAT01Module { }
