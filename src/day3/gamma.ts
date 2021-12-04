export function calculateRates(data: string[]): { gamma: string, epsilon: string } {
    const bitmapSize = data[0].length;
    const bitmapLength = data.length;
    const sums = data.reduce((tally, setting) => {
        return setting
            .split("")
            .map(s => parseInt(s))
            .map((bit, i) => tally[i] + bit);
    }, new Array<number>(bitmapSize).fill(0));

    const bitmaps = sums.reduce((bitmap, sum) => {
        return [
            bitmap[0].concat(sum >= bitmapLength / 2 ? "1" : "0"),
            bitmap[1].concat(sum >= bitmapLength / 2 ? "0" : "1"),
        ];
    }, ['', '']);

    return {
        gamma: bitmaps[0],
        epsilon: bitmaps[1],
    }
}

export function getGammaForPosition(input: string[], index: number): string {
    const sum = input.reduce((total, currentMeasurement) => {
        return total + Number(currentMeasurement[index]);
    }, 0);

    return (sum >= input.length / 2) ? '1' : '0';
}