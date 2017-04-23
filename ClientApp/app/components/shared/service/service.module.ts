import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ConfigService } from "./configservice/configs.service";
import { DataService } from "./dataservice/data.service";

import { NodeService } from '../service/menuservice/menu.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        
    ],
    exports: [
       
    ],
    providers: [ConfigService, DataService, NodeService]
})
export class ServiceModule {

}
