import stringToNumber from '../app';

test('if amount is number', () => {
  const amount = '6';
  const received = stringToNumber(amount);
  const expected = 6;
  expect(received).toBe(expected);
});

test('if amount is not number', () => {
  const amount = 'frfrf';

  expect(() => {
    stringToNumber(amount);
  }).toThrow(new Error('Некорректные данные: введите число в десятичной системе исчисления!'));
});
