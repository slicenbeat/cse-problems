import * as assert from "assert";
import { findArithmeticMeanOfAllElementsOverSideAndMainDiagonalInclusive } from "../solution";
/**
 * 10. Найти среднее арифметическое всех элементов над побочной и главной
диагональю целочисленной квадратной матрицы (включая прилегающие
элементы диагоналей).
 */
describe("problem 10: findArithmeticMeanOfAllElementsOverSideAndMainDiagonalInclusive", () => {
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
            expectedMean: 3
        },

    ]
    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOfAllElementsOverSideAndMainDiagonalInclusive(item.matrix), item.expectedMean);
        })
    })
})