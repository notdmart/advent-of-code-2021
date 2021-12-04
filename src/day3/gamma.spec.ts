import { calculateRates } from './gamma';

describe('calculate rates', () => {
    it('returns correct gamma and epsilon for a single bit measurement', () => {
        const data = ['0'];
        const result = calculateRates(data);

        expect(result.gamma).toBe('0');
        expect(result.epsilon).toBe('1');
    });

    it('returns correct gamma and epsilon for two 1-bit measurements, preferring 1', () => {
        const data = ['0', '1'];
        const result = calculateRates(data);

        expect(result.gamma).toBe('1');
        expect(result.epsilon).toBe('0');
    });

    it('returns correct gamma and epsilon for one 2-bit measurement', () => {
        const data = ['01'];
        const result = calculateRates(data);

        expect(result.gamma).toBe('01');
        expect(result.epsilon).toBe('10');
    });

    it('returns correct gamma and epsilon for two 2-bit measurements', () => {
        const data = ['01', '11'];
        const result = calculateRates(data);

        expect(result.gamma).toBe('11');
        expect(result.epsilon).toBe('00');
    });

    it('returns correct gamma and epsilon for large number of arbitrary-bit measurements', () => {
        const data = [
            '01011',
            '11101',
            '11111',
            '00001',
            '10011',
            '00010',
            '01011',
        ];
        const result = calculateRates(data);

        expect(result.gamma).toBe('01011');
        expect(result.epsilon).toBe('10100');
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
        const result = calculateRates(data);
        expect(result.gamma).toBe('10110');
        expect(result.epsilon).toBe('01001');
    });
});
