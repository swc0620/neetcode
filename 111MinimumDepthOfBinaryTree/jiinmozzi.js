/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


var isBalanced = function(root) {
    let isBalancedTree = true;
    const maxDepth = (root) => {
        if (!root) return 0;

        const right = maxDepth(root.right);
        const left = maxDepth(root.left);
        if (Math.abs(right - left) > 1){
            isBalancedTree = false;
        }
        return Math.max(right, left) + 1;
    };

    maxDepth(root);

    return isBalancedTree;
};