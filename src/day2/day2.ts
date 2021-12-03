import { loadInputFile } from '../helpers/load';
import { basicNavigate, navigateWithAim } from './navigator';

const data = loadInputFile('./src/day2/input.txt');

console.log(data);

const part1 = basicNavigate(data);
console.log(`Part 1: (depth: ${part1.depth}, position: ${part1.position}) (${part1.depth * part1.position})`);

const part2 = navigateWithAim(data);
console.log(`Part 2: (depth: ${part2.depth}, position: ${part2.position}) (${part2.depth * part2.position})`);