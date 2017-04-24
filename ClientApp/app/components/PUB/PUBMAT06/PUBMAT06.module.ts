import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBMAT06Component } from './PUBMAT06.component';
import { PUBMAT06EntryComponent } from './entry/PUBMAT06.entry.component';
import { PUBMAT06ConditionComponent } from './condition/PUBMAT06.condition.component';
import { PUBMAT06QueryComponent } from './query/PUBMAT06.query.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { SharedCommonModule } from '../../shared/shared.module';
import { routing } from './PUBMAT06.routing';

@NgModule({
    imports: [routing, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, SharedCommonModule],
    declarations: [PUBMAT06Component, PUBMAT06EntryComponent, PUBMAT06ConditionComponent, PUBMAT06QueryComponent]
})
export class PUBMAT06Module { }
