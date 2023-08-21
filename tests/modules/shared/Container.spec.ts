import { IConfiguration } from '../../../src/config';
import { Container } from '../../../src/Container';

const container = new Container();

describe('Container', () => {
  it('should resolve an instaciated container config object', () => {
    const config = container.invoke().resolve<IConfiguration>('config');
    expect(typeof config).toBe('object');
  });
});
