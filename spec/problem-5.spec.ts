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
})