export interface GameData {
    moves: number[];
    boards: BoardData[];
}

export interface BoardData {
    availableSpaces: number[]; // Maybe this would work?
}

export interface WinnerData {
    board: BoardData;
    move: number;
}