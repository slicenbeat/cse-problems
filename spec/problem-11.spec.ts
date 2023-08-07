import * as assert from "assert";
import { findArithmeticMeanOfAllElementsOverSideAndMainDiagonal } from "../solution";
import { COMMON_TEST_CASES, TestCase } from ".";
/**
 * 11. Найти среднее арифметическое всех элементов над побочной и главной
диагональю целочисленной квадратной матрицы.
 */
describe("problem 11: findArithmeticMeanOfAllElementsOverSideAndMainDiagonal", () => {
    const testCases: TestCase[] = [
        ...COMMON_TEST_CASES,
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