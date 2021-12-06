import { GameData } from './models';

interface GameSetup {
    existingBoards: unknown[][],
    newBoard: unknown[],
}

export function setupGame(data: string[]): GameData {
    const moves = data.shift()?.split(',').map(s => Number(s)) || [];

    data.shift();

    const boards = data.reduce(({ existingBoards, newBoard }: GameSetup, line) => {
        if (line.trim().length > 0) {
            const lineData = line.trim().split(' ').filter(l => !!l).map(s => Number(s));
            newBoard.push(lineData);
        } else {
            existingBoards.push(newBoard);
            newBoard = [];
        }

        return {
            existingBoards,
            newBoard,
        };
    }, { existingBoards: [], newBoard: [] });

    if (boards.newBoard.length > 0) {
        boards.existingBoards.push(boards.newBoard);
    }

    return { moves, boards: boards.existingBoards };
}