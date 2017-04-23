import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { ServiceModule } from './service/service.module';
import {CommandbuttonComponentComponent } from './commandbutton/commandbutton.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, MenubarModule } from 'primeng/primeng';
@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule, RouterModule, LayoutModule, MenubarModule, ServiceModule
    ],
    declarations: [
        CommandbuttonComponentComponent
    ],
    exports: [
        CommonModule, FormsModule, HttpModule, RouterModule, LayoutModule, MenubarModule, ServiceModule,CommandbuttonComponentComponent
    ]
})
export class SharedCommonModule { }
