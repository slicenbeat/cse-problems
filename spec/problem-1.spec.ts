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
    it("return correct start position when arr = [1, 1]", () => {
        const array = [1, 1];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 0);
    });
    it("return correct start position when arr = [1, 1, 1, 2, 2]", () => {
        const array = [1, 1, 1, 2, 2];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 3);
    });
    it("return -1 when arr = []", () => {
        const array = [];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, -1);
    });
    it("return correct start position when arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4]", () => {
        const array = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 0);
    });
    it("return correct start position when arr = [4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2]", () => {
        const array = [4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 4);
    });
    it("return correct start position when arr = [1, 1, 2, 2, 3, 3]", () => {
        const array = [1, 1, 2, 2, 3, 3];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 0);
    });
    it("return correct start position when arr = [5, 5, 3, 3, 3, 4, 4, 4, 4]", () => {
        const array = [5, 5, 3, 3, 3, 4, 4, 4, 4];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 0);
    });

    it("return -1 start position when arr = [1]", () => {
        const array = [1];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, -1);
    });

    it("return correct start position when arr = [1, 2, 1, 1, 1]", () => {
        const array = [1, 2, 1, 1, 1];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 2);
    });

    it("return correct start position when arr = [1, 2, 1, 1, 1, 2, 2]", () => {
        const array = [1, 2, 1, 1, 1, 2, 2];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 5);
    });

    it("return -1 when arr = [1, 2, 3, 4, 5]", () => {
        const array = [1, 2, 3, 4, 5];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, -1);
    });

    it("return 0 start position when arr = [1, 1, 2, 2, 2, 1, 1, 1]", () => {
        const array = [1, 1, 2, 2, 2, 1, 1, 1];
        const index = findSequenceShortStartPosition(array);
        assert.strictEqual(index, 0);
    });

})