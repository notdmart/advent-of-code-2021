import { loadInputFile } from '../helpers/load';
import { simulateAge } from './lantern';

const input = loadInputFile('./src/day6/input.txt');
const population = input
    .pop()?.split(',')
    .map(s => Number(s)) || [];
const part1 = simulateAge(population, 80);
console.log(`Part 1: Final result after 80 days: ${part1.length} fish`);

// const part2 = simulateAge(population, 256);
const part2 = [];
console.log(`Part 2: Final result after 256 days: ${part2.length} fish`);