import {Health} from "./Health";

export interface HealthRepository {
    find(): Promise<Health>
}
