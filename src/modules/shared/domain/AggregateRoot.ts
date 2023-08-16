export abstract class AggregateRoot {
    protected constructor() {
    }
    abstract toPrimitives(): any;
}
