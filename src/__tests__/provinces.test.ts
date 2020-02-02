import provinces, { provincesList } from '../provinces';

describe('provinces', () => {
  test('should return 26 number of provinces', () => {
    const provincesNumber = Object.keys(provincesList).length;
    expect(provincesNumber).toBe(26);
  });

  test('should return `Équateur` province', () => {
    const province = provincesList.equateur;
    expect(province.name).toBe('Équateur');
  });

  test("should throw an Error(`Province doesn't exist`)", () => {
    expect(() => provinces('province')).toThrowError("Province doesn't exist");
  });

  test('should return `Équateur` province', () => {
    const province = provinces('Équateur');
    expect(province.name).toBe('Équateur');
  });

  test('should return 26 number of provinces', () => {
    const allProvinces = provinces();
    const provincesNumber = Object.keys(allProvinces).length;
    expect(provincesNumber).toBe(26);
    expect(allProvinces['bas-uele'].name).toBe('Bas-Uele');
    expect(allProvinces.equateur.name).toBe('Équateur');
  });
});
