import operate from '../logic/operate'

test('plus sign should add up numbers', () => {
  expect(operate('1', '5', '+')).toStrictEqual('6');
});

test('subtraction sign should minus numbers', () => {
    expect(operate('1', '5', '-')).toStrictEqual('-4');
  });

  test('multiplication sign should multiply numbers', () => {
    expect(operate('1', '5', 'x')).toStrictEqual('5');
  });

  test('division sign should divide numbers', () => {
    expect(operate('1', '5', '÷')).toStrictEqual('0.2');
  });

  test('any number divisible by zero should return zero', () => {
    expect(operate('5', '0', '÷')).toStrictEqual(0);
  });