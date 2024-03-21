const { createArray } = require('../createArray');

describe('createArray', () => {
  it('returns an array', () => {
    expect(Array.isArray(createArray(2))).toBe(true);
  });

  it('creates an array of the specified length', () => {
    expect(createArray(2).length).toBe(2);
    expect(createArray(2)).toContain(1);
  });

  it('doesn\'t include the specified length in the array', () => {
    expect(createArray(3)).not.toContain(3);
  });
});
