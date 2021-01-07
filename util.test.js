const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', ()=>{
  const text = generateText('Shang', 29);
  expect(text).toBe('Shang (29 years old)')
  
})

test('should generate a valid text output', ()=>{
  const text = checkAndGenerate('Shang',29);
  expect(text).toBe('Shang (29 years old)')
});

test('should click around and create an element wtih text and correct class', async()=>{
  const browser = await puppeteer.launch({
    headless:false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.goto('file:///C:/Users/stone/OneDrive/Desktop/Interview%20Excercises/JEST/Academind/js-testing-introduction/index.html');

  await page.click('input#name')
  await page.type('input#name', 'Anna');
  await page.click('input#age')
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Anna (28 years old)');
}, 100000)