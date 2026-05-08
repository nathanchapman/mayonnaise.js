import { describe, expect, test } from 'bun:test';
import mayonnaise = require('../src/mayonnaise.cts');

describe('mayonnaise.js', () => {
  test('registers Patrick-flavored text generators', () => {
    expect(typeof mayonnaise.sentence).toBe('string');
    expect(typeof mayonnaise.sentences(2)).toBe('string');
    expect(typeof mayonnaise.short_description).toBe('string');
    expect(typeof mayonnaise.word).toBe('string');
  });

  test('registers SpongeBob character and place generators', () => {
    expect(typeof mayonnaise.name).toBe('string');
    expect(typeof mayonnaise.username).toBe('string');
    expect(typeof mayonnaise.place).toBe('string');
    expect(typeof mayonnaise.timecard).toBe('string');
  });
});
