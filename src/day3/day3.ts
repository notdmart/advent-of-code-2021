import { loadInputFile } from '../helpers/load';
import { stringifiedNumberToBinary } from '../helpers/num';
import { calculateRates } from './gamma';
import { calculateLifeSupport } from './lifeSupport';

const data = loadInputFile('./src/day3/input.txt');

const { gamma: binaryGamma, epsilon: binaryEpsilon } = calculateRates(data);
const gamma = stringifiedNumberToBinary(binaryGamma);
const epsilon = stringifiedNumberToBinary(binaryEpsilon);
const powerConsumption = gamma * epsilon;
console.log(`Part 1: gamma ${gamma}, epsilon ${epsilon} --> power ${powerConsumption}`);


const { o2: binaryO2, co2: binaryCO2 } = calculateLifeSupport(data);
const oxygenGeneration = stringifiedNumberToBinary(binaryO2);
const co2Scrubbing = stringifiedNumberToBinary(binaryCO2);
const lifeSupport = oxygenGeneration * co2Scrubbing;
console.log(`Part 2: O2 ${oxygenGeneration}, CO2 ${co2Scrubbing} --> life support ${lifeSupport}`);