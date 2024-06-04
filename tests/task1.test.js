const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

const { window } = new JSDOM(html);
global.document = window.document;

test('Повертає значення innerHTML елементів', () => {
  const { firstEl, secondtEl, thirdtEl, fourthEl, lastEl } = require('../task1.js');

  expect(firstEl).toBe('1');
  expect(secondtEl).toBe('2');
  expect(thirdtEl).toBe('3');
  expect(fourthEl).toBe('4');
  expect(lastEl).toBe('5');
});
