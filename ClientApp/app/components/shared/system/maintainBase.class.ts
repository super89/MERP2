import { Scope } from './scope.class';
import { DataService } from './../../shared/service/dataservice/data.service';

export class MaintainBase {
    public scope: Scope = new Scope();   
    constructor(dataService: DataService) {
        dataService.scope = this.scope;
        this.scope.model = [];
        this.scope.menuType = 'MSS';
    }
}