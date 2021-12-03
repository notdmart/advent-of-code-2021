import { AimedPosition, Command, Direction, Position } from './models';

export function parseCommand(command: string): Command {
    const [direction, distance] = command.split(' ');

    return {
        direction: Direction[direction.toLowerCase() as keyof typeof Direction],
        distance: Number(distance),
    }
}

export function applyCommand(command: Command, currentPosition: Position): Position {
    switch (command.direction) {
        case Direction.up:
            currentPosition.depth -= command.distance;
            break;
        case Direction.down:
            currentPosition.depth += command.distance;
            break;
        case Direction.forward:
            currentPosition.position += command.distance;
            break;
    }

    return currentPosition;
}

export function applyAimedCommand(command: Command, currentPosition: AimedPosition): AimedPosition {
    switch (command.direction) {
        case Direction.up:
            currentPosition.aim -= command.distance;
            break;
        case Direction.down:
            currentPosition.aim += command.distance;
            break;
        case Direction.forward:
            currentPosition.position += command.distance;
            currentPosition.depth += (command.distance * currentPosition.aim);
            break;
    }

    return currentPosition;
}