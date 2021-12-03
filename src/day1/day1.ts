import { loadInputFile } from '../helpers/load';
import { countIncreases, reduceMeasurements } from './depth';

const data = loadInputFile('./src/day1/input.txt').map(n => Number(n));

// part 1
console.log('Part 1: ' + countIncreases(data));

// part 2
console.log('Part 2: ' + countIncreases(reduceMeasurements(data)));