import * as assert from "assert";
import { findArithmeticMeanOnLeftSideInclusive } from "../solution";
import { COMMON_TEST_CASES, TestCase } from ".";
/**
 * 7. Найти среднее арифметическое всех элементов слева от побочной и
главной диагонали целочисленной квадратной матрицы (включая
прилегающие элементы диагоналей).
 */
describe("problem 7: findArithmeticMeanOnLeftSideInclusive", () => {

    const testCases: TestCase[] = [
        ...COMMON_TEST_CASES,
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