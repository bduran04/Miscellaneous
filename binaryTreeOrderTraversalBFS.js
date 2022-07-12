//Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */

var levelOrder = function(root) {
    //use BFS since the nodes are going from left --> right, level by level 
    if(!root) return [];
    
    const res = [];
    const queue = [root];
    
    while(queue.length){
        const size = queue.length
        const curlvl = [];
		// we only want to run most recent length of queue which is "size"
		// and that consist only the same level of tree nodes
        for(let i = 0; i < size; i++){
            const node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            curlvl.push(node.val)
        }
        res.push(curlvl)
    }
    return res
};