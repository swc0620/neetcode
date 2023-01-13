/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    const cloneSet = new Map();

    let trace = head;
    while (trace) {
        cloneSet.set(trace, new Node(trace.val));
        trace = trace.next; 
    }

    trace = head;
    while (trace) {
        cloneSet.get(trace).next = cloneSet.get(trace.next) || null;
        cloneSet.get(trace).random = cloneSet.get(trace.random) || null;
        trace = trace.next;
    }
    return cloneSet.get(head);
};
