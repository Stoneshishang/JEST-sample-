const { generateText } = require('./util');

test('should output name and age', ()=>{
  const text = generateText('Shang', 29);
  expect(text).toBe('Shang (29 years old)')
  const text2 = generateText('Anna', 28);
  expect(text2).toBe('Anna (28 years old)');
})

test('should output data-less text', ()=>{
  const text =  generateText();
  expect(text).toBe('undefined (undefined years old)');
})