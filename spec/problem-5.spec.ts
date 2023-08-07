import * as assert from "assert";
import { findSequenceLongStartPosition } from "../solution/";
/**
 * 5. Найти индекс начала наиболее длинной и непрерывной
 * последовательности одинаковых чисел в целочисленном массиве.
 */

describe("problem 5: findSequenceLongStartPosition", () => {
    it("return correct start position when arr = [1, 1, 1]", () => {
        const array = [1, 1, 1];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, 0);
    });
    it("return correct start position when arr = [1, 1, 1, 2, 2]", () => {
        const array = [1, 1, 1, 2, 2];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, 0);
    });
    it("return correct start position when arr contains only one element", () => {
        const array = [5];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, 0);
    });

    it("return correct start position when arr is empty", () => {
        const array = [];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, -1);
    });

    it("return correct start position when arr has no repeating elements", () => {
        const array = [1, 2, 3, 4, 5];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, -1);
    });

    it("return correct start position when arr contains negative numbers", () => {
        const array = [-1, -2, -2, -2, -3, -3, -3];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, 1);
    });

    it("return correct start position when arr contains positive and negative numbers", () => {
        const array = [1, 1, 1, -2, -2, 1, 1, 1];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, 0);
    });

    it("return correct start position when arr has multiple sequences with the same length", () => {
        const array = [1, 1, 2, 2, 3, 3];
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, 0);
    });

    it("return correct start position when arr is null", () => {
        const array = null;
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, -1);
    });

    it("return correct start position when arr is undefined", () => {
        const array = undefined;
        const index = findSequenceLongStartPosition(array);
        assert.strictEqual(index, -1);
    });
})