export interface TestCase {
    matrix: number[][],
    expectedMean: number;
}

export const COMMON_TEST_CASES: TestCase[] = [
    {
        matrix: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        expectedMean: 0
    },
    {
        matrix: [[null]],
        expectedMean: 0
    },
    {
        matrix: null,
        expectedMean: 0
    },
];