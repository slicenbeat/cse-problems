import { hasCycle, ListNode } from "../solution";// Укажите правильный путь к файлу с функцией hasCycle и определением класса ListNode
import * as assert from "assert";

describe('problem 12: hasCycle', () => {
    it('return false for an empty list', () => {
        const head = null;
        assert.strictEqual(hasCycle(head), false);
    });

    it('return false for a list without a cycle', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);

        assert.strictEqual(hasCycle(head), false);
    });

    it('return true for a list with a cycle', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);

        head.next.next.next.next = head.next;
        assert.strictEqual(hasCycle(head), true);
    });
});
