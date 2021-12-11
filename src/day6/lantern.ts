export function simulateAge(population: number[], days: number): number[] {
    return Array(days).fill(null).reduce(simulateDay, population);
}

export function simulateDay(population: number[]): number[] {
    population.forEach((age, index) => {
        if (age === 0) {
            population[index] = 6;
            population.push(8);
        } else {
            population[index] = population[index] - 1;
        }
    });

    return population;
}