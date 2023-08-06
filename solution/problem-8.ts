export function findMedianOfNumber(numbers: number[]): number {
    const sortedNumbers = quickSort(numbers);
    const length = sortedNumbers.length;
    return length % 2 === 1
        ? sortedNumbers[Math.ceil(length / 2)]
        : (sortedNumbers[Math.floor((length - 1) / 2)] + sortedNumbers[Math.ceil((length - 1) / 2)]) / 2
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

    return quickSort(less).concat([pivot], quickSort(greater));
}