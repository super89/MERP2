import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { TabMenuModule, MenuModule, TabViewModule } from 'primeng/primeng';
import { SharedModule } from './components/shared/shared.module';
import {  PUNMAT01Component } from './components/PUB/PUBMAT01/PUBMAT01.component';
import { PUNMAT01EntryComponent } from './components/PUB/PUBMAT01/entry/PUBMAT01.entry.component';
import { PUNMAT01ConditionComponent } from './components/PUB/PUBMAT01/condition/PUBMAT01.condition.component';
import { PUNMAT01QueryComponent } from './components/PUB/PUBMAT01/query/PUBMAT01.query.component';
import {routing } from './app.rounting';

 @NgModule({
     bootstrap: [AppComponent],
     declarations: [
         AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
         HomeComponent, PUNMAT01Component, PUNMAT01EntryComponent, PUNMAT01ConditionComponent, PUNMAT01QueryComponent
    ],
    imports: [
        CommonModule, TabMenuModule, MenuModule, TabViewModule, SharedModule,
        HttpModule, routing
        //RouterModule.forRoot([
        //    { path: '', redirectTo: 'home', pathMatch: 'full' },
        //    { path: 'home', component: HomeComponent },
        //    { path: 'PUBMAT01', component: PUNMAT01Component },
        //    //{ path: 'PUBMAT01', loadChildren: './components/PUB/PUBMAT01/PUBMAT01.module#PUNMAT01Module' },
        //    { path: 'fetch-data', component: FetchDataComponent },
        //    { path: '**', redirectTo: 'home' },

        //])
    ]
})
export class AppModule {
}
