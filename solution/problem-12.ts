export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

export function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false;
    }

    let slowPointer: ListNode | null = head;
    let fastPointer: ListNode | null = head;

    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer!.next;
        fastPointer = fastPointer.next.next;

        if (slowPointer === fastPointer) {
            return true;
        }
    }

    return false;
}
