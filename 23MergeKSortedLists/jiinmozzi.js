/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    let mergedList = lists;
    // should deep copy object to get out of infinite loop
    while (mergedList.length !== 1){
        const newList = [];
        for (let i=0; i<mergedList.length; i+=2){
            if (lists.length > i + 1)   newList.push(mergeTwoLists(mergedList[i], mergedList[i+1]));
            else newList.push(mergedList[i]);
        }
        mergedList = newList;
    }
    
    return mergedList[0];
};

var mergeTwoLists = function(list1, list2) {
    let curr = new ListNode();
    const head = curr;
    while (list1 && list2){
        if (list1.val > list2.val){
            curr.next = list2;
            curr = list2;
            list2 = list2.next;
        }   else {
            curr.next = list1;
            curr = list1;
            list1 = list1.next
        }
    }
    if (list1 || list2){
        if (list1){
            curr.next = list1;
            curr = list1;
        }   else {
            curr.next = list2;
            curr = list2
        }
    }
    return head.next
};