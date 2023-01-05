/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newHead = null;
    while (head !== null){
        const next = head.next; 
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
};

// { next : 1 } => 1 => 2 => 3

// {next : {ref : 1}} => { val : 1, next : {ref : 2 }} 
// {next : newHead} 
// {next : {next : {ref : 1}}} => { val : 1, next : {ref : 2 }}(head) 

