import { provinces } from '../index';

describe('index.ts -> provinces', () => {
  test("should throw an Error(`Province doesn't exist`)", () => {
    expect(() => provinces('province')).toThrowError("Province doesn't exist");
  });

  test('should return `Équateur` province', () => {
    const province = provinces('Équateur');
    expect(province.province).toBe('Équateur');
  });
});
