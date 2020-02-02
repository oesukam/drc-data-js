import removeAccents from '../../utils/removeAccents';

describe('removeAccents', () => {
  test('should return `Equateur` instead of `Équateur`', () => {
    expect(removeAccents('Équateur')).toBe('Equateur');
  });
});
