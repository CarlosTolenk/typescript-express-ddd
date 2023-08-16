import {AggregateRoot} from "../../shared/domain/AggregateRoot";

export class Health extends AggregateRoot {
    status: string;
    id: string;

    constructor() {
        super();
        this.status = 'OK'
        this.id = '123'
    }

    toPrimitives(): any {
        return {
            status: this.status,
        }
    }

}
