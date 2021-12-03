export enum Direction {
    forward = 'forward',
    down = 'down',
    up = 'up',
};

export interface Command {
    direction: Direction,
    distance: number,
};

export interface Position {
    depth: number,
    position: number,
};

export interface AimedPosition extends Position {
    aim: number,
}