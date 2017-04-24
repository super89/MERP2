import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUBMAT08EntryComponent} from './entry/PUBMAT08.entry.component';
import { PUBMAT08ConditionComponent} from './condition/PUBMAT08.condition.component';
import { PUBMAT08QueryComponent} from './query/PUBMAT08.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat08',
    templateUrl: './PUBMAT08.component.html',
    styleUrls: ['./PUBMAT08.component.css']
})
export class PUBMAT08Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
