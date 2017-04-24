import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { PUBMAT06EntryComponent} from './entry/PUBMAT06.entry.component';
import { PUBMAT06ConditionComponent} from './condition/PUBMAT06.condition.component';
import { PUBMAT06QueryComponent} from './query/PUBMAT06.query.component';
import { MenuItem } from 'primeng/primeng';
import { CommandbuttonComponentComponent } from '../../shared/commandbutton/commandbutton.component';
import { DataService } from './../../shared/service/dataservice/data.service';
import { MaintainBase } from '../../shared/system/maintainBase.class';

@Component({
    selector: 'pubmat06',
    templateUrl: './PUBMAT06.component.html',
    styleUrls: ['./PUBMAT06.component.css']
})
export class PUBMAT06Component extends  MaintainBase {    

    constructor(private dataService: DataService) {
        super(dataService);
        this.scope.menuType = 'MSSVCH';
        
    }

    ngOnInit() {
        
    }
}
