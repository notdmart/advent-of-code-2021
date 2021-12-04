import { calculateLifeSupport } from './lifeSupport';

describe('life support', () => {
    it('calculates o2 and co2 correctly for single 1-bit measurement', () => {
        const data = ['0'];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('0');
        expect(result.co2).toBe('0');
    });

    it('calculates o2 and co2 for two 1-bit measurements', () => {
        const data = ['1', '0'];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('1');
        expect(result.co2).toBe('0');
    });

    it('calculates o2 and co2 correctly one 2-bit measurement', () => {
        const data = ['10'];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('10');
        expect(result.co2).toBe('10');
    });

    it('calculates o2 and co2 for two 2-bit measurements', () => {
        const data = ['10', '11'];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('11');
        expect(result.co2).toBe('10');
    });

    it('calculates o2 and co2 for three 2-bit measurements when there are not alternatives', () => {
        const data = ['10', '11', '11'];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('11');
        expect(result.co2).toBe('10');
    });

    it('calculates o2 and co2 for multiple arbitrary-length measurements', () => {
        const data = [
            '01011',
            '11101',
            '11111',
            '00001',
            '10011',
            '00010',
            '01011',
        ];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('01011');
        expect(result.co2).toBe('10011');
    });

    it('takes the one bits on equal filter', () => {
        const data = [
            '0110',
            '0111',
            '0000',
            '1010',
            '1011',
            '1000',
            '0011',
        ];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('0111');
        expect(result.co2).toBe('1010');
    });

    it('handles the example correctly', () => {
        const data = [
            '00100',
            '11110',
            '10110',
            '10111',
            '10101',
            '01111',
            '00111',
            '11100',
            '10000',
            '11001',
            '00010',
            '01010',
        ];
        const result = calculateLifeSupport(data);
        expect(result.o2).toBe('10111');
        expect(result.co2).toBe('01010');
    });
});