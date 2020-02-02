import territories, { territoriesList } from '../territories';

describe('territories', () => {
  test('should return total number of territories to be 164', () => {
    const territoriesNumber = Object.keys(territoriesList).length;
    expect(territoriesNumber).toBe(164);
  });

  test('should return `Aketi` territory', () => {
    const territory = territoriesList.aketi;
    expect(territory.name).toBe('Aketi');
  });

  test('should return `Aketi` territory', () => {
    const territory = territories({ name: 'Aketi' });
    expect(territory.aketi.name).toBe('Aketi');
  });

  test('should return `Aketi` territory', () => {
    const territory = territories({ name: 'Aketi', province: 'Bas-Uele' });
    expect(territory.aketi.name).toBe('Aketi');
    expect(territory.aketi.province).toBe('Bas-Uele');
  });

  test('should return all `Bas-Uele` territories', () => {
    const allTerritories = territories({ province: 'Bas-Uele' });
    const territoriesNumber = Object.keys(allTerritories).length;
    expect(territoriesNumber).toBe(6);
    expect(allTerritories).toHaveProperty('aketi');
  });

  test('should return 164 number of territories', () => {
    const allTerritories = territories();
    const territoriesNumber = Object.keys(allTerritories).length;
    expect(territoriesNumber).toBe(164);
    expect(allTerritories.aketi.name).toBe('Aketi');
  });
});
