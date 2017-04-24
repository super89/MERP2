import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUNMAT03Component } from './PUBMAT03.component';
import { PUBMAT03EntryComponent } from './entry/PUBMAT03.entry.component';
import { PUBMAT03ConditionComponent } from './condition/PUBMAT03.condition.component';
import { PUNMAT03QueryComponent } from './query/PUBMAT03.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT03.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUNMAT03Component, PUBMAT03EntryComponent, PUBMAT03ConditionComponent, PUNMAT03QueryComponent]
})
export class PUNMAT03Module { }
