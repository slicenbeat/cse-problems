import * as assert from "assert";
import { findArithmeticMeanOfAllElementsUnderTheSideAndMainDiagonal } from "../solution";
/**
 * 9. Найти среднее арифметическое всех элементов под побочной и главной
диагональю целочисленной квадратной матрицы (включая прилегающие
элементы диагоналей).
 */
describe("problem 9: findArithmeticMeanOfAllElementsUnderTheSideAndMainDiagonal", () => {
    interface TestCase {
        matrix: number[][],
        expectedMean: number;
    }
    const testCases: TestCase[] = [
        {
            matrix: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            expectedMean: 0
        },
        {
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            expectedMean: 7
        },

    ]
    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOfAllElementsUnderTheSideAndMainDiagonal(item.matrix), item.expectedMean);
        })
    })
})