export function findSequenceLongStartPosition(array: number[]): number {
    let maxLength: number = Number.MIN_SAFE_INTEGER;
    let currentLength: number = 1;
    let index: number = -1;
    let currentIndex: number = 0;

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] === array[i - 1]) {
            currentLength++;
        }
        else {
            if (currentLength > 1 && currentLength > maxLength) {
                index = currentIndex;
                maxLength = currentLength;
            }
            currentIndex = i;
            currentLength = 1;
        }
    }
    if (currentLength > 1 && currentLength > maxLength) {
        return currentIndex;
    }
    return index;
}