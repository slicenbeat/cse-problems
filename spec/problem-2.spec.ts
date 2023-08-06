import * as assert from "assert";
import { findArithmeticMeanOnLeftSide } from "../solution";
/**
 * Найти среднее арифметическое всех элементов слева от побочной 
 * и главной диагонали целочисленной квадратной матрицы
 */
describe("problem 2: findArithmeticMeanOnLeftSide", () => {
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
            assert.strictEqual(findArithmeticMeanOnLeftSide(item.matrix), item.expectedMean);
        })
    })
})