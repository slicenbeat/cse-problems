import * as assert from "assert";
import { findArithmeticMeanOnRightSide } from "../solution";
import { COMMON_TEST_CASES, TestCase } from ".";
/**
 * 4. Найти среднее арифметическое всех элементов справа от побочной и
главной диагонали целочисленной квадратной матрицы.
 */

describe("problem 4: findArithmeticMeanOnRightSide", () => {
    const testCases: TestCase[] = [
        {
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            expectedMean: 6
        },
        ...COMMON_TEST_CASES
    ]

    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOnRightSide(item.matrix), item.expectedMean);
        })
    })

});