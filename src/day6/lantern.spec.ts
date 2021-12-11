import { simulateAge, simulateDay } from './lantern';

describe('lantern simulator', () => {
    describe('simulateDay', () => {
        it('should reduce timer each day', () => {
            const population = [
                1,
            ];
            const result = simulateDay(population);
            expect(result).toEqual([0]);
        });

        it('should reproduce after timer reaches zero', () => {
            const population = [
                0,
            ];
            const result = simulateDay(population);
            expect(result).toEqual([6, 8])
        });
    });

    describe('simulateAge', () => {
        it('should match the example as expected', () => {
            const population = [
                3,
                4,
                3,
                1,
                2,
            ];
            const expected = [
                [2, 3, 2, 0, 1],
                [1, 2, 1, 6, 0, 8],
                [0, 1, 0, 5, 6, 7, 8],
                [6, 0, 6, 4, 5, 6, 7, 8, 8],
                [5, 6, 5, 3, 4, 5, 6, 7, 7, 8],
                [4, 5, 4, 2, 3, 4, 5, 6, 6, 7],
                [3, 4, 3, 1, 2, 3, 4, 5, 5, 6],
                [2, 3, 2, 0, 1, 2, 3, 4, 4, 5],
                [1, 2, 1, 6, 0, 1, 2, 3, 3, 4, 8],
                [0, 1, 0, 5, 6, 0, 1, 2, 2, 3, 7, 8],
                [6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 7, 8, 8, 8],
                [5, 6, 5, 3, 4, 5, 6, 0, 0, 1, 5, 6, 7, 7, 7, 8, 8],
                [4, 5, 4, 2, 3, 4, 5, 6, 6, 0, 4, 5, 6, 6, 6, 7, 7, 8, 8],
                [3, 4, 3, 1, 2, 3, 4, 5, 5, 6, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8],
                [2, 3, 2, 0, 1, 2, 3, 4, 4, 5, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7],
                [1, 2, 1, 6, 0, 1, 2, 3, 3, 4, 1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 8],
                [0, 1, 0, 5, 6, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 7, 8],
                [6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 8, 8],
            ];
            expected.reduce((currentPopulation, expectation, currentIndex) => {
                const result = simulateAge(currentPopulation, 1);

                expect(result).toEqual(expectation);

                return result;
            }, population);
        });

        it('should handle multi-day jumps correctly', () => {
            const population = [
                3,
                4,
                3,
                1,
                2,
            ];
            const expected = [6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 8, 8];
            const result = simulateAge(population, 18);

            expect(result).toEqual(expected);
        });

        // TODO: Rework because it runs out of memory
        xit('should handle multi-day jumps correctly', () => {
            const population = [
                3,
                4,
                3,
                1,
                2,
            ];
            const result = simulateAge(population, 256);

            expect(result.length).toEqual(26984457539);
        });
    });
});