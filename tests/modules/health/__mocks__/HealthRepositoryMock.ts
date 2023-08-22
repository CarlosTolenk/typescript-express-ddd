import { HealthRepository } from '../../../../src/modules/health/domain/HealthRepository';
import { Health } from '../../../../src/modules/health/domain/Health';
import { Nullable } from '../../../../src/modules/shared/domain/Nullable';

export class HealthRepositoryMock implements HealthRepository {
  private mockCheck = jest.fn();

  check(): Promise<Nullable<Health>> {
    return this.mockCheck();
  }

  assertCheckedStatus(): void {
    expect(this.mockCheck).toHaveBeenCalled();
  }
}
