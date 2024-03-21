const { capitalizeTextFirstChar } = require('../capitalizeTextFirstChar'); 

describe('capitalizeTextFirstChar', () => {
  it('returns a string when passed a string', () => {
    expect(typeof capitalizeTextFirstChar('hello world')).toBe('string');
  });

  it('capitalizes each word in a string', () => {
    expect(capitalizeTextFirstChar('hello world')).toBe('Hello World');
  });

  it('throws an error when passed a non-string', () => {
    expect(() => capitalizeTextFirstChar(123)).toThrowError();
  });
});
