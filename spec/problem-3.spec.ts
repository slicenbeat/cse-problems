import * as assert from "assert";
import { findArithmeticMeanOnRightSideInclusive } from "../solution";
import { COMMON_TEST_CASES, TestCase } from ".";
/**
 * 3. Найти среднее арифметическое всех элементов справа от побочной и
главной диагонали целочисленной квадратной матрицы (включая
прилегающие элементы диагоналей).
 */

describe("problem 3: findArithmeticMeanOnRightSideInclusive", () => {

    const testCases: TestCase[] = [
        ...COMMON_TEST_CASES,
        {
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            expectedMean: 6
        }
    ]

    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOnRightSideInclusive(item.matrix), item.expectedMean);
        })
    })

});