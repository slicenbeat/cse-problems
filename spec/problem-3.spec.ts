import * as assert from "assert";
import { findArithmeticMeanOnRightSideInclusive } from "../solution";
/**
 * 3. Найти среднее арифметическое всех элементов справа от побочной и
главной диагонали целочисленной квадратной матрицы (включая
прилегающие элементы диагоналей).
 */

describe("problem 3: findArithmeticMeanOnRightSideInclusive", ()=>{
    interface TestCase {
        matrix: number[][],
        expectedMean: number;
    }
    const testCases: TestCase[] = [
        {
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            expectedMean: 6
        },
        {
            matrix: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            expectedMean: 0
        },
    ]

    testCases.forEach((item, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findArithmeticMeanOnRightSideInclusive(item.matrix), item.expectedMean);
        })
    })

});