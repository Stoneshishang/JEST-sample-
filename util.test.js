const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', ()=>{
  const text = generateText('Shang', 29);
  expect(text).toBe('Shang (29 years old)')
  
})

test('should generate a valid text output', ()=>{
  const text = checkAndGenerate('Shang',29);
  expect(text).toBe('Shang (29 years old)')
});