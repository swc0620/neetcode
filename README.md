/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let answerNode = dummy;
    let addUp = 0;
    while ((l1 || l2) || addUp !== 0){
        let sum = 0;
        if (l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += addUp;
        addUp = Math.floor(sum/10);
        const newNode = new ListNode(sum%10);
        answerNode.next = newNode;
        answerNode = answerNode.next;
    }
    return dummy.next;
};
