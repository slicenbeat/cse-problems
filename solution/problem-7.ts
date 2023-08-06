export function findArithmeticMeanOnLeftSideInclusive(matrix: number[][]): number {
    const N = matrix.length;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (j <= i && i + j + 1 <= N) {
                sum += matrix[i][j];
                count++;
            }
        }
    }
    return Math.round(sum / count)
}