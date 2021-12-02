export function countIncreases(data: number[]): number {
    const result = data.reduce(({ last, count }, depth: number) => {
        const increment = (depth > last) ? 1 : 0;
        return {
            last: depth,
            count: count + increment,
        };
    }, { last: Number.POSITIVE_INFINITY, count: 0 });

    return result.count;
}

export function reduceMeasurements(data: number[]): number[] {
    const result = data.reduce((incoming: { lastDepth: number, previousDepth: number, windows: number[] }, depth: number) => {
        const { lastDepth, previousDepth, windows } = incoming;
        if (lastDepth !== Number.NEGATIVE_INFINITY && previousDepth !== Number.NEGATIVE_INFINITY) {
            windows.push(lastDepth + previousDepth + depth);
        }
        return {
            lastDepth: depth,
            previousDepth: lastDepth,
            windows,
        }
    }, { lastDepth: Number.NEGATIVE_INFINITY, previousDepth: Number.NEGATIVE_INFINITY, windows: [] });

    return result.windows;
}
