const { execSync } = require('child_process');

test('ADD_TWO_NUMBERS', () => {
  // Invoke the CLI tool and capture the output
  const output = execSync('node index.js 9 5').toString().trim();
  expect(output).toContain('14');
});

test('ADD_NEGATIVE_NUMBERS', () => {
  // Invoke the CLI tool and capture the output
  const output = execSync('node index.js 100 -100').toString().trim();
  expect(output).toContain('0');
});

test('ADD_ZEROS', () => {
  // Invoke the CLI tool and capture the output
  const output = execSync('node index.js 0 0').toString().trim();
  expect(output).toContain('0');
});

