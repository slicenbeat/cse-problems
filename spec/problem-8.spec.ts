import * as assert from "assert";
import { findMedianOfNumber } from "../solution/problem-8";

describe("problem 8: findMedianOfNumber", () => {
    interface TestCase {
        numbers: number[],
        expectedMedianNumber: number
    }
    const testCases: TestCase[] = [
        {
            numbers: [1, 1],
            expectedMedianNumber: 1
        },
        {
            numbers: [45, 4, 1, 42, 42, 1],
            expectedMedianNumber: 23
        },
        {
            numbers: [45, 4, 42, 42, 1],
            expectedMedianNumber: 42
        }
    ]

    testCases.forEach((testCase, index) => {
        it(`test case ${index+1}`, () => {
            assert.strictEqual(findMedianOfNumber(testCase.numbers), testCase.expectedMedianNumber)
        })
    })
})