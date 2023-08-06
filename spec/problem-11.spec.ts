import * as assert from "assert";
import { findArithmeticMeanOfAllElementsOverSideAndMainDiagonal } from "../solution";
/**
 * 11. Найти среднее арифметическое всех элементов над побочной и главной
диагональю целочисленной квадратной матрицы.
 */
describe("problem 11: findArithmeticMeanOfAllElementsOverSideAndMainDiagonal", () => {
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
            expectedMean: 2
        },

    ]
    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOfAllElementsOverSideAndMainDiagonal(item.matrix), item.expectedMean);
        })
    })
})