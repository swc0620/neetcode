/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || !head.next || k === 1) return head;
    let dummy = new ListNode();
    let curr = dummy;
    while (head){
        const stack = [];
        for (let i=0; i<k && head; i++){
            stack.push(head);
            head = head.next;
        }
        if (stack.length === k){
            while (stack.length > 0){
                curr.next = stack.pop();
                curr = curr.next;    
            }
            curr.next = head;
        }   
        
    }
    return dummy.next;
}