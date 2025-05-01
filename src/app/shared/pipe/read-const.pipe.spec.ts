import { ReadConstPipe } from './read-const.pipe';

describe('ReadConstPipe', () => {
  it('create an instance', () => {
    const pipe = new ReadConstPipe();
    expect(pipe).toBeTruthy();
  });
});
