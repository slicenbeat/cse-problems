import * as assert from "assert";
import { findArithmeticMeanBeneathTheDiagonales } from "../solution";
/**
 * Найти среднее арифметическое всех элементов под побочной и главной
диагональю целочисленной квадратной матрицы.
 */

describe("problem 6: findArithmeticMeanBeneathTheDiagonales", ()=>{
    interface TestCase {
        matrix: number[][],
        expectedMean: number;
    }
    const testCases: TestCase[] = [
        {
            matrix: [
                [1, 2, 3],
                [4, 5, 6], 
                [7, 8, 9]
            ],
            expectedMean: 8
        },
        {
            matrix: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            expectedMean: 0
        },
    ]

    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanBeneathTheDiagonales(item.matrix), item.expectedMean);
        })
    })
})