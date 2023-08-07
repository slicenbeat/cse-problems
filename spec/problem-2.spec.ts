import * as assert from "assert";
import { findArithmeticMeanOnLeftSide } from "../solution";
import { COMMON_TEST_CASES, TestCase } from ".";
/**
 * Найти среднее арифметическое всех элементов слева от побочной 
 * и главной диагонали целочисленной квадратной матрицы
 */
describe("problem 2: findArithmeticMeanOnLeftSide", () => {

    const testCases: TestCase[] = [
        ...COMMON_TEST_CASES,
        {
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            expectedMean: 4
        }

    ]
    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOnLeftSide(item.matrix), item.expectedMean);
        })
    })
})