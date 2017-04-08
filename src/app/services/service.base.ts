export enum ServiceStatus {
    Loaded = 1, Loading = 2, NotLoaded = 3
}

export class ServiceBase {
    private status: ServiceStatus = ServiceStatus.Loaded;
    private onChangeCallbacks: Function[] = [];

    constructor() {}

    public emitChage = () => {
        this.onChangeCallbacks.forEach(f => f());
    }

    public getStatus = (): ServiceStatus => {
        return this.status;
    }

    public onChange = (callback: Function) => {
        this.onChangeCallbacks.push(callback);
    }

    public offChange = (callback: Function) => {
        const index = this.onChangeCallbacks.findIndex(f => f === callback);
        this.onChangeCallbacks = this.onChangeCallbacks.splice(index, 1);
    }
}