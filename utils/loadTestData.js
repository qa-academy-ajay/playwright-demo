import { join } from 'path';
import { json } from 'stream/consumers';

async function loadTestData(filename, testId) {
  try {
    // Build file path dynamically
    const filepath = join(__dirname, `../testdata/${filename}.json`);
    // Load JSON file
    const testdata = require(filepath);
    const data = testdata[testId];
    if (!data) {
      throw new Error(`Test data not found for ${testId} in ${filename}.json`);
    }
    return data;
  } catch (error) {
    throw new Error(`Error loading test data file: ${filename}.json\n${error.message}`);
  }
}

export { loadTestData };