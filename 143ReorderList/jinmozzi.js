/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head.next || !head.next.next) return;

    let list1 = head;
    let list2 = head;
    while ( list1.next && list2.next && list2.next.next ){
        list1 = list1.next;
        list2 = list2.next.next;
    }
    
    let middle = list1;
    let curr = list1.next;

    while (curr.next){
        const current = curr.next;
        curr.next = current.next;
        current.next = middle.next;
        middle.next = current;
    }

    list1 = head;
    list2 = middle.next;
    while ( list1 !== middle ){
        middle.next = list2.next;
        list2.next = list1.next;
        list1.next = list2;
        list1 = list2.next; 
        list2 = middle.next;
    }
};