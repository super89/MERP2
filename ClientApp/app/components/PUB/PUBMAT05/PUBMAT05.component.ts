import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUBMAT05EntryComponent} from './entry/PUBMAT05.entry.component';
import { PUBMAT05ConditionComponent} from './condition/PUBMAT05.condition.component';
import { PUBMAT05QueryComponent } from './query/PUBMAT05.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat04',
    templateUrl: './PUBMAT05.component.html',
    styleUrls: ['./PUBMAT05.component.css']
})
export class PUBMAT05Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
