import { BoardData, GameData, WinnerData } from './models';

export function play(game: GameData): WinnerData {
    // while no winner --> is there a functional way to do this
    // apply move to boards

    let winner: WinnerData;
    while (!winner) {
        // apply move to boards
        // check each board after apply? that way we know who won first?
        for (const board of game.boards) {

        }
    }

    return winner;
}

function applyMove(board: BoardData, move: number): boolean {
    board.
}