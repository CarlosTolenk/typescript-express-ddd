import {EntitySchema} from 'typeorm';
import {Health} from "../../domain/Health";

export const HealthEntity = new EntitySchema<Health>({
    name: 'Health',
    tableName: 'health',
    target: Health,
    columns: {
        id:{
           type: String,
           primary: true,
        },
        status: {
            type: String,
        },
    }
});
