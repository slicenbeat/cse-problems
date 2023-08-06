import * as assert from "assert";
import { findSequenceShortStartPosition } from "../solution/";
/**
 * 1. Найти индекс начала наиболее короткой (не менее двух) и
 * непрерывной последовательности одинаковых чисел в целочисленном
 * массиве.
 */
describe("problem 1: findSequenceShortStartPosition", () => {
    it("return correct start position when arr = [1, 1, 1]", () => {
        const array = [1, 1, 1];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 0);
    });
    it("return correct start position when arr = [1, 1, 1, 2, 2]", () => {
        const array = [1, 1, 1, 2, 2];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 3);
    });
})