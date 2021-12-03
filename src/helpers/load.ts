import * as fs from 'fs';
import * as path from 'path';

export function loadInputFile(location: string): string[] {
    const text = fs.readFileSync(path.resolve(location)).toString();
    return text.split('\n');
}