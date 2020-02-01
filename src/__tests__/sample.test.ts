describe('sample-test', () => {
  test('should add two numbers', () => {
    const add = (a: number, b: number) => a + b;
    expect(add(1, 2)).toBe(3);
  });
});
