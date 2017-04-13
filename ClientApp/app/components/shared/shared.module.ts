import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LayoutModule } from './layout/layout.module'

@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule, RouterModule,LayoutModule



    ],
    declarations: [

    ],
    exports: [
        CommonModule, FormsModule, HttpModule, RouterModule,LayoutModule
    ]
})
export class SharedModule { }
