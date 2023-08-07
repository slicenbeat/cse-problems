import * as assert from "assert";
import { findArithmeticMeanOfAllElementsOverSideAndMainDiagonalInclusive } from "../solution";
import { COMMON_TEST_CASES, TestCase } from ".";
/**
 * 10. Найти среднее арифметическое всех элементов над побочной и главной
диагональю целочисленной квадратной матрицы (включая прилегающие
элементы диагоналей).
 */
describe("problem 10: findArithmeticMeanOfAllElementsOverSideAndMainDiagonalInclusive", () => {
    const testCases: TestCase[] = [
        {
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            expectedMean: 3
        },
        ...COMMON_TEST_CASES

    ]
    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOfAllElementsOverSideAndMainDiagonalInclusive(item.matrix), item.expectedMean);
        })
    })
})