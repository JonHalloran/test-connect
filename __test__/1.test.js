import isUnique from '../Ch 1/1.1';
import checkPermut from '../Ch 1/1.2';

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

describe('checkPermut', () => {

  test('returns true if two empty strings', () => {
    expect(checkPermut('', '')).toBe(true);
  });

  test('returns true if two same 1 char strings', () => {
    expect(checkPermut('a', 'a')).toBe(true);
  });

  test('returns true if two same strings', () => {
    expect(checkPermut('abcd', 'abcd')).toBe(true);
  });

  test('returns true for scrambled strings', () => {
    expect(checkPermut('abcd', 'badc')).toBe(true);
  });

  test('returns false for different lengthed strings', () => {
    expect(checkPermut('', 'a')).toBe(false);
  });

  test('returns false for non-palindromic strings', () => {
    expect(checkPermut('foo', 'bar')).toBe(false);
  });
});