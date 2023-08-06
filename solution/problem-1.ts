export function findSequenceShortStartPosition(array: number[]): number {
    let minLength: number = Number.MAX_SAFE_INTEGER;
    let currentLength: number = 1;
    let minIndex: number = -1;
    let currentIndex: number = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            currentLength++
            continue;
        }
        else {
            if (currentLength > 1 && currentLength < minLength){
                minLength = currentLength;
                minIndex = currentIndex;
            }
            currentIndex = i;
            currentLength = 1;
        }
    }
    if (currentLength > 1 && currentLength < minLength){
        return currentIndex;
    }
    return minIndex;
}