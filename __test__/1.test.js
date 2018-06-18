import isUnique from '../Ch 1/1.1';

describe('isUnique', () => {

  test('returns true if empty string', () => {
    expect(isUnique('')).toBe(true);
  });

  test('returns true if 1 char', () => {
    expect(isUnique('a')).toBe(true);
  });

  test('returns true if longer unique string', () => {
    expect(isUnique('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  test('returns false if not unique-short', () => {
    expect(isUnique('aa')).toBe(false);
  });

  test('returns false if not unique-longer', () => {
    expect(isUnique('abcdefghijklmnopqrstuvwxyza')).toBe(false);
  });
});