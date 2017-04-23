import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, MenubarModule  } from 'primeng/primeng';
import { SharedCommonModule } from './components/shared/shared.module';
import { routing } from './app.rounting';

 @NgModule({
     bootstrap: [AppComponent],
     declarations: [
         AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
         HomeComponent
    ],
    imports: [
        CommonModule, TabMenuModule, MenuModule, TabViewModule, SharedModule, SharedCommonModule, DataTableModule, MenubarModule,
        HttpModule, routing
        
    ]
})
export class AppModule {
}
