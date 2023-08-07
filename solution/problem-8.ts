export function findMedianOfNumber(numbers: number[]): number {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Invalid input. Please provide a non-empty array of numbers.');
    }
    const sortedNumbers = quickSort(numbers);
    // const sortedNumbers = numbers.sort((a, b) => a - b)
    const length = sortedNumbers.length;
    return length % 2 === 1
        ? sortedNumbers[Math.ceil(length / 2)]
        : (sortedNumbers[length / 2 - 1] + sortedNumbers[length / 2]) / 2
}

function quickSort(numbers: number[]): number[] {
    if (numbers.length < 2) {
        return numbers;
    }

    const pivot = numbers[0];
    const less: number[] = [];
    const greater: number[] = [];

    for (let i = 1; i < numbers.length; i++) {
        numbers[i] < pivot ? less.push(numbers[i]) : greater.push(numbers[i]);
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}