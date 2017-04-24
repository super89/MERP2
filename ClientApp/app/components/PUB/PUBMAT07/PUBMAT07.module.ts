import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT07Component } from './PUBMAT07.component';
import { PUBMAT07EntryComponent } from './entry/PUBMAT07.entry.component';
import { PUBMAT07ConditionComponent } from './condition/PUBMAT07.condition.component';
import { PUBMAT07QueryComponent } from './query/PUBMAT07.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT07.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUBMAT07Component, PUBMAT07EntryComponent, PUBMAT07ConditionComponent, PUBMAT07QueryComponent]
})
export class PUBMAT07Module { }
