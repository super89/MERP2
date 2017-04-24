import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUBMAT07EntryComponent} from './entry/PUBMAT07.entry.component';
import { PUBMAT07ConditionComponent} from './condition/PUBMAT07.condition.component';
import { PUBMAT07QueryComponent} from './query/PUBMAT07.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat07',
    templateUrl: './PUBMAT07.component.html',
    styleUrls: ['./PUBMAT07.component.css']
})
export class PUBMAT07Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
