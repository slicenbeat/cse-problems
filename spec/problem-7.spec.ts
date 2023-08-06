import * as assert from "assert";
import { findArithmeticMeanOnLeftSideInclusive } from "../solution";
/**
 * 7. Найти среднее арифметическое всех элементов слева от побочной и
главной диагонали целочисленной квадратной матрицы (включая
прилегающие элементы диагоналей).
 */
describe("problem 7: findArithmeticMeanOnLeftSideInclusive", () => {
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
            expectedMean: 4
        },

    ]
    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOnLeftSideInclusive(item.matrix), item.expectedMean);
        })
    })
})