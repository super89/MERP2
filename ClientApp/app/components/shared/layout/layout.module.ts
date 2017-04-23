import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
/*import { LayoutsMasterComponent } from './layouts/layouts.master.component';*/
import { FooterComponent } from "./footer/footer.component";
import { NAVComponent } from "./nav/nav.component";
import { RouterModule } from '@angular/router';
import { TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, MenubarModule, PanelMenuModule, TreeModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule, RouterModule, TabMenuModule, MenuModule, TabViewModule, DataTableModule, SharedModule, MenubarModule, PanelMenuModule, TreeModule,
    ],
    declarations: [
        HeaderComponent,
        //LayoutsMasterComponent,
        FooterComponent,
        NAVComponent
    ],
    exports: [
        HeaderComponent,
        //LayoutsMasterComponent,
        FooterComponent,
        NAVComponent
    ]
})
export class LayoutModule {

}
