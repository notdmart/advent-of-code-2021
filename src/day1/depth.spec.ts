import { countIncreases, reduceMeasurements } from './depth';

describe('day1', () => {
    describe('depth', () => {
        it('returns 1 for a single increase', () => {
            const data = [
                0,
                1,
            ];
            expect(countIncreases(data)).toBe(1);
        });

        it('returns 0 for a single decrease', () => {
            const data = [
                1,
                0,
            ];
            expect(countIncreases(data)).toBe(0);
        });

        it('returns 0 for no change', () => {
            const data = [
                1,
                1,
            ];
            expect(countIncreases(data)).toBe(0);
        });

        it('returns 1 for a decrease followed by an increase', () => {
            const data = [
                1,
                0,
                1,
            ];
            expect(countIncreases(data)).toBe(1);
        });

        it('correctly counts multiple increases', () => {
            const data = [
                0,
                1,
                2,
            ];
            expect(countIncreases(data)).toBe(2);
        });

        it('matches the example', () => {
            const data = [
                199,
                200,
                208,
                210,
                200,
                207,
                240,
                269,
                260,
                263,
            ];
            expect(countIncreases(data)).toBe(7);
        });
    });

    describe('reduceMeasurement', () => {
        it('returns an empty array for zero elements', () => {
            const data: number[] = [];
            expect(reduceMeasurements(data)).toStrictEqual([]);
        });

        it('returns an empty array for one element', () => {
            const data: number[] = [
                0,
            ];
            expect(reduceMeasurements(data)).toStrictEqual([]);
        });

        it('returns an empty array for two element', () => {
            const data: number[] = [
                0,
                1,
            ];
            expect(reduceMeasurements(data)).toStrictEqual([]);
        });

        it('returns a single sum for three elements', () => {
            const data: number[] = [
                0,
                1,
                2,
            ];
            expect(reduceMeasurements(data)).toStrictEqual([3]);
        });

        it('returns a rolling sum for four elements', () => {
            const data: number[] = [
                1,
                2,
                3,
                4,
            ];
            expect(reduceMeasurements(data)).toStrictEqual([6, 9]);
        });

        it('matches the example', () => {
            const data = [
                199,
                200,
                208,
                210,
                200,
                207,
                240,
                269,
                260,
                263,
            ];
            expect(reduceMeasurements(data)).toStrictEqual([
                607,
                618,
                618,
                617,
                647,
                716,
                769,
                792,
            ])
        });
    });
});