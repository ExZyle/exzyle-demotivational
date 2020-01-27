import { demotivate } from '../src/index';

describe('#demotivate()', () => {
  it('should return a zero length string', () => {
    const demotivational = demotivate();
    expect(demotivational.length).toBeGreaterThan(0);
  });
  describe('running 100 times should return zero length string each time', () => {
    for (let iteration = 0; iteration < 100; iteration++) {
      it(`should return a zero length string for iteration ${iteration +
        1}`, () => {
        const demotivational = demotivate();
        // console.log(`Iteration ${iteration}: ${demotivational}`);
        expect(demotivational.length).toBeGreaterThan(0);
      });
    }
  });
});
