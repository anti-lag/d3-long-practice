const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // return leftMost node 
  // let root = new TreeNode(rootNode)
  // Tree1.depthFirstTraversal
  while (rootNode.left)
  {
    rootNode = rootNode.left
  }
  return rootNode.val
}

function findMaxBST (rootNode) {
  while (rootNode.right)
  {
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT (rootNode) {
  let min = rootNode.val

  const stack = [rootNode];
  while (stack.length) {
    let currentNode = stack.pop();
    // console.log(currentNode.val);
    if (currentNode.val < min)
    {
      min = currentNode.val
    }
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }
  return min
}
  // iterate each node
  // var check less than infinity or negative infinity
  // let min = Infinity;
  // let currentNode = rootNode

  // while (currentNode !== null)
  // {
  //   if (min === currentNode.val)
  //   {
  //     return min
  //   }
  //   if (min < currentNode.val)
  //   {
  //     currentNode = currentNode.left
  //   }
  //   if (min > currentNode.val)
  //   {
  //     min = currentNode.val
  //   }
  // } 
  // while (currentNode !== null)
  // {
  //   if (min === currentNode.val)
  //   {
  //     return min
  //   }
  //   if (min < currentNode.val)
  //   {
  //     currentNode = currentNode.right
  //   }
  //   if (min > currentNode.val)
  //   {
  //     min = currentNode.val
  //   }
  // } 
  // return min



function findMaxBT (rootNode) {
  let max = rootNode.val

  const stack = [rootNode];
  while (stack.length) {
    let currentNode = stack.pop();
    // console.log(currentNode.val);
    if (currentNode.val > max)
    {
      max = currentNode.val
    }
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }
  return max
}

function getHeight (rootNode) 
{
  let count = 0, countR = 0;

  while (rootNode.left)
  {
    count+=1
    rootNode = rootNode.left
  }

  while (rootNode.right)
  {
    countR += 1
    rootNode = rootNode.right
  }

  if (count >= countR)
  {
    return count
  }
  else
  {
    return countR
  }
}

function countNodes (rootNode) {
  let count = 0, countR = 0;

  while (rootNode.left)
  {
    count+=1
    rootNode = rootNode.left
  }

  while (rootNode.right)
  {
    countR += 1
    rootNode = rootNode.right
  }
  console.log(count);
  console.log(countR)
  // return count + countR;
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}