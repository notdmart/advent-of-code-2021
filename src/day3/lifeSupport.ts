import { getGammaForPosition } from './gamma';

export function calculateLifeSupport(data: string[]): { o2: string, co2: string } {
    const o2 = filterByMeasurement(data, 'gamma');
    const co2 = filterByMeasurement(data, 'epsilon');

    return {
        o2,
        co2,
    }
}

function filterByMeasurement(data: string[], filterOn: 'gamma' | 'epsilon'): string {
    const finalBitmap = data.reduce((remaining, _, currentIndex) => {
        if (remaining.length === 1) {
            return remaining;
        }

        const gamma = getGammaForPosition(remaining, currentIndex);

        let filterValue: string = gamma;
        if (filterOn === 'epsilon') {
            filterValue = (gamma === '1') ? '0' : '1';
        }
        const filteredResults = remaining.filter(measurement => measurement.charAt(currentIndex) === filterValue);
        if (filteredResults.length === 0) {
            return [remaining[0]];
        } else {
            return filteredResults;
        }
    }, data);

    return finalBitmap.join('');
}