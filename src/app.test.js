import { describe, it, expect } from '@jest/globals';

describe('Sanity check', () => {
  it('should pass', () => {
    expect(1 + 1).toBe(2);
  });

  it('environment should be test or development', () => {
    const env = process.env.NODE_ENV ?? 'development';
    expect(['test', 'development']).toContain(env);
  });
});