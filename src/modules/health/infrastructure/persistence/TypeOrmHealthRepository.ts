import {EntitySchema} from "typeorm";

import {Health} from "../../domain/Health";
import {HealthRepository} from "../../domain/HealthRepository";

import {TypeOrmRepository} from "../../../shared/infrastructure/persistence/TypeOrmRepository";
import {HealthEntity} from "./Health.entity";


export class TypeOrmHealthRepository extends TypeOrmRepository<Health> implements HealthRepository {
    protected entitySchema(): EntitySchema<Health> {
        return HealthEntity;
    }

    async find(): Promise<Health> {
        try {
            const repository = await this.repository();
            await repository.find();
            return new Health();
        } catch (error) {
            throw error
        }
    }

}
