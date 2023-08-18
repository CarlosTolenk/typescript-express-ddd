import {Connection, EntitySchema, Repository} from 'typeorm';
import {QueryRunner} from "typeorm/query-runner/QueryRunner";
import {AggregateRoot} from "../../domain/AggregateRoot";

export abstract class TypeOrmRepository<T extends AggregateRoot> {
    public constructor(private _clientFactoryDB: Promise<Connection>) {
    }

    protected abstract entitySchema(): EntitySchema<T>;

    protected client(): Promise<Connection> {
        return this._clientFactoryDB;
    }

    protected async repository(): Promise<Repository<T>> {
        return (await this._clientFactoryDB).getRepository(this.entitySchema());
    }

    protected async queryRunner(): Promise<QueryRunner> {
        return (await this._clientFactoryDB).createQueryRunner()
    }

    protected async persist(aggregateRoot: T): Promise<void> {
        const repository = await this.repository();
        await repository.save(aggregateRoot as any);
    }
}
