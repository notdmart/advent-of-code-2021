import { AimedPosition, Command, Direction, Position } from './models';
import { applyAimedCommand, applyCommand, parseCommand } from './navigationHelpers';
import { basicNavigate, navigateWithAim } from './navigator';

describe('Navigation Helpers', () => {
    describe('parseCommand', () => {
        it('parses forward correctly', () => {
            const result = parseCommand('forward 5');
            expect(result.direction).toBe(Direction.forward);
            expect(result.distance).toBe(5);
        });

        it('parses up correctly', () => {
            const result = parseCommand('up 12');
            expect(result.direction).toBe(Direction.up);
            expect(result.distance).toBe(12);
        });

        it('parses down correctly', () => {
            const result = parseCommand('down 2');
            expect(result.direction).toBe(Direction.down);
            expect(result.distance).toBe(2);
        });

        it('parses upper case direction correctly', () => {
            const result = parseCommand('DOWN 2');
            expect(result.direction).toBe(Direction.down);
            expect(result.distance).toBe(2);
        });
    });

    describe('applyCommand', () => {
        it('applies up correctly', () => {
            const position: Position = {
                depth: 0,
                position: 0,
            };
            const command: Command = {
                direction: Direction.up,
                distance: 2,
            };
            const newPosition = applyCommand(command, position);
            expect(newPosition.depth).toBe(-2);
            expect(newPosition.position).toBe(0);
        });

        it('applies down correctly', () => {
            const position: Position = {
                depth: 0,
                position: 0,
            };
            const command: Command = {
                direction: Direction.down,
                distance: 2,
            };
            const newPosition = applyCommand(command, position);
            expect(newPosition.depth).toBe(2);
            expect(newPosition.position).toBe(0);
        });

        it('applies forward correctly', () => {
            const position: Position = {
                depth: 0,
                position: 0,
            };
            const command: Command = {
                direction: Direction.forward,
                distance: 2,
            };
            const newPosition = applyCommand(command, position);
            expect(newPosition.depth).toBe(0);
            expect(newPosition.position).toBe(2);
        });
    });

    describe('basicNavigate', () => {
        it('handles the example correctly', () => {
            const data = [
                'forward 5',
                'down 5',
                'forward 8',
                'up 3',
                'down 8',
                'forward 2',
            ];
            const result = basicNavigate(data);
            expect(result.depth).toBe(10);
            expect(result.position).toBe(15);
        });
    });

    describe('applyAimedCommand', () => {
        it('decreases aim on up', () => {
            const command: Command = {
                direction: Direction.up,
                distance: 1,
            };
            const startingPosition: AimedPosition = {
                position: 0,
                depth: 0,
                aim: 0,
            };
            const result = applyAimedCommand(command, startingPosition);
            expect(result.position).toBe(0);
            expect(result.depth).toBe(0);
            expect(result.aim).toBe(-1);
        });

        it('increases aim on down', () => {
            const command: Command = {
                direction: Direction.down,
                distance: 1,
            };
            const startingPosition: AimedPosition = {
                position: 0,
                depth: 0,
                aim: 0,
            };
            const result = applyAimedCommand(command, startingPosition);
            expect(result.position).toBe(0);
            expect(result.depth).toBe(0);
            expect(result.aim).toBe(1);
        });

        it('increases position on forward', () => {
            const command: Command = {
                direction: Direction.forward,
                distance: 1,
            };
            const startingPosition: AimedPosition = {
                position: 0,
                depth: 0,
                aim: 0,
            };
            const result = applyAimedCommand(command, startingPosition);
            expect(result.position).toBe(1);
        });

        it('does not increase depth on forward when aim is 0', () => {
            const command: Command = {
                direction: Direction.forward,
                distance: 1,
            };
            const startingPosition: AimedPosition = {
                position: 0,
                depth: 0,
                aim: 0,
            };
            const result = applyAimedCommand(command, startingPosition);
            expect(result.depth).toBe(0);
        });

        it('multiplies depth on forward when aim is non-zero', () => {
            const command: Command = {
                direction: Direction.forward,
                distance: 1,
            };
            const startingPosition: AimedPosition = {
                position: 0,
                depth: 0,
                aim: 1,
            };
            const result = applyAimedCommand(command, startingPosition);
            expect(result.depth).toBe(1);
            expect(result.position).toBe(1);
        });

        it('multiplies depth on forward when aim and distance are greater than 1', () => {
            const command: Command = {
                direction: Direction.forward,
                distance: 2,
            };
            const startingPosition: AimedPosition = {
                position: 0,
                depth: 0,
                aim: 4,
            };
            const result = applyAimedCommand(command, startingPosition);
            expect(result.depth).toBe(8);
            expect(result.position).toBe(2);
        });

    });

    describe('navigateWithAim', () => {
        it('handles the example correctly', () => {
            const data = [
                'forward 5',
                'down 5',
                'forward 8',
                'up 3',
                'down 8',
                'forward 2',
            ];
            const result = navigateWithAim(data);
            expect(result.depth).toBe(60);
            expect(result.position).toBe(15);
        });
    });
});