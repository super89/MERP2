export class Scope {
    private _model: any;
    get model(): any {
        return this._model;
    }
    set model(value: any) {
        this._model = value;
    }

    private _menuType: string;
    get menuType(): string {
        return this._model;
    }
    set menuType(value: string) {
        this._model = value;
    }
}