import { setupGame } from './parser';

describe('Game parser', () => {
    it('should parse an empty game', () => {
        const data: string[] = [];

        const result = setupGame(data);
        expect(result.boards).toEqual([]);
        expect(result.moves).toEqual([]);
    });

    it('should parse a basic game with one board', () => {
        const data: string[] = [
            '1,2,3,4,5',
            '',
            '1 2 3 4 5',
            '6 7 8 9 10',
            '11 12 13 14 15',
            '16 17 18 19 20',
            '21 22 23 24 25',
        ];
        const result = setupGame(data);
        expect(result.moves).toEqual([1, 2, 3, 4, 5]);
        expect(result.boards.length).toBe(1);
        expect(result.boards[0]).toEqual([
            '1 2 3 4 5',
            '6 7 8 9 10',
            '11 12 13 14 15',
            '16 17 18 19 20',
            '21 22 23 24 25',
        ]);
    });

    it('should correctly parse a game of two boards', () => {
        const data: string[] = [
            '1,2,3,4,5',
            '',
            '1 2 3 4 5',
            '6 7 8 9 10',
            '11 12 13 14 15',
            '16 17 18 19 20',
            '21 22 23 24 25',
            '',
            '22 13 17 11 0',
            '8 2 23 4 24',
            '21 9 14 16 7',
            '6 10 3 18 5',
            '1 12 20 15 19',
        ];
        const result = setupGame(data);
        expect(result.moves).toEqual([1, 2, 3, 4, 5]);
        expect(result.boards.length).toBe(2);
        expect(result.boards[0]).toEqual([
            '1 2 3 4 5',
            '6 7 8 9 10',
            '11 12 13 14 15',
            '16 17 18 19 20',
            '21 22 23 24 25',
        ]);

        expect(result.boards[1]).toEqual([
            '22 13 17 11 0',
            '8 2 23 4 24',
            '21 9 14 16 7',
            '6 10 3 18 5',
            '1 12 20 15 19',
        ]);
    });
});