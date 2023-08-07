import * as assert from "assert";
import { findArithmeticMeanBeneathTheDiagonales } from "../solution";
import { COMMON_TEST_CASES, TestCase } from ".";
/**
 * Найти среднее арифметическое всех элементов под побочной и главной
диагональю целочисленной квадратной матрицы.
 */

describe("problem 6: findArithmeticMeanBeneathTheDiagonales", () => {

    const testCases: TestCase[] = [
        ...COMMON_TEST_CASES,
        {
            matrix: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            expectedMean: 8
        }
    ]

    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanBeneathTheDiagonales(item.matrix), item.expectedMean);
        })
    })
})