import { Health } from './Health';

export interface HealthRepository {
  check(): Promise<Health>;
}
