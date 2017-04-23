import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ConfigService } from "./configservice/configs.service";
import { DataService } from "./dataservice/data.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        
    ],
    exports: [
       
    ],
    providers: [ConfigService, DataService]
})
export class ServiceModule {

}
