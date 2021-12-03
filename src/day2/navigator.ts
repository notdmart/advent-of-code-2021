import { AimedPosition, Position } from './models';
import { applyAimedCommand, applyCommand, parseCommand } from './navigationHelpers';

export function basicNavigate(data: string[]): Position {
    return data.reduce((currentPosition: Position, rawData) => {
        const command = parseCommand(rawData);
        return applyCommand(command, currentPosition);
    }, { depth: 0, position: 0 });
}

export function navigateWithAim(data: string[]): AimedPosition {
    return data.reduce((currentPosition: AimedPosition, rawData) => {
        const command = parseCommand(rawData);
        return applyAimedCommand(command, currentPosition);
    }, { depth: 0, position: 0, aim: 0 });
}