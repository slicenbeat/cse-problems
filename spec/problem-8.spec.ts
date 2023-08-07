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
        },
        {
            numbers: [2, 4, 6, 8, 10],
            expectedMedianNumber: 6
        },
        {
            numbers: [15, 10, 20, 25, 30],
            expectedMedianNumber: 20
        },
        {
            numbers: [0, 0, 0, 0, 0, 0],
            expectedMedianNumber: 0
        },
        {
            numbers: [100, 200, 300, 400],
            expectedMedianNumber: 250
        },
        {
            numbers: [7],
            expectedMedianNumber: 7
        },
        {
            numbers: [2, 4, 6, 8],
            expectedMedianNumber: 5
        },
        {
            numbers: [1, 2],
            expectedMedianNumber: 1.5
        },
    ]

    testCases.forEach((testCase, index) => {
        it(`test case ${index + 1}`, () => {
            assert.strictEqual(findMedianOfNumber(testCase.numbers), testCase.expectedMedianNumber)
        })
    })
})