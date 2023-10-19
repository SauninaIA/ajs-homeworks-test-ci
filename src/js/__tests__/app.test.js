import showHealth from '../app';

test.each([
  [
    {
      name: 'MageName',
      health: 55,
    },
    'healthy',
  ],
  [
    {
      name: 'MageName',
      health: 45,
    },
    'wounded',
  ],
  [
    {
      name: 'MageName',
      health: 10,
    },
    'critical',
  ],
])('testing checkHealth function with %s character', (character, expected) => {
  const correct = showHealth(character);
  expect(correct).toBe(expected);
});