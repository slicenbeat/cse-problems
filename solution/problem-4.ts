export function findArithmeticMeanOnRightSide(matrix: number[][]): number {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const N = matrix.length;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if ((j > i) && (i + j + 1 > N)) {
                sum += matrix[i][j];
                count++;
            }
        }
    }
    return count > 0 ? Math.round(sum / count) : 0;
}