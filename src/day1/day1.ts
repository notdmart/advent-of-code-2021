import * as fs from 'fs';
import * as path from 'path';

import { countIncreases, reduceMeasurements } from './depth';

const text = fs.readFileSync(path.resolve('./src/day1/input.txt')).toString();
const data = text.split('\n').map(n => Number(n));

// part 1
console.log('Part 1: ' + countIncreases(data));

// part 2
console.log('Part 2: ' + countIncreases(reduceMeasurements(data)));