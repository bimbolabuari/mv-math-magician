import calculate from '../logic/Calculate'

test('AC button to clear output', () => {
  expect(calculate({ total: '12', next: '25', operation: '+' }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
});

test('Zero should return no output', () => {
    expect(calculate({ total: null, next: '0', operation: null }, '0')).toStrictEqual({});
  });

  test('Empty next value should return null', () => {
    expect(calculate({ total: '23', next: null, operation: '÷' }, '=')).toStrictEqual({});
  });

  test('Empty operation sign & next value should return null', () => {
    expect(calculate({ total: '5', next: null, operation: null }, '=')).toStrictEqual({});
  });


  test('+/- sign should return null when there is no total or next value', () => {
    expect( calculate({ total: null, next: null, operation: '+' }, '+/-')).toStrictEqual({});
  });


  test('plus sign should add up number', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '=')).toStrictEqual({ total: '15', next: null, operation: null });
  });

  test('minus sign should minus number', () => {
    expect(calculate({ total: '10', next: '5', operation: '-' }, '=')).toStrictEqual({ total: '5', next: null, operation: null });
  });