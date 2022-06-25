class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
function LeftLeavesSum(vkg) {
  if (vkg == null) return 0;
  var stack = [];
  stack.push(vkg);
  var sum = 0;
  while (stack.length > 0) {
    var currentNode = stack[stack.length - 1];
    stack.pop();
    if (currentNode.left != null) {
      stack.push(currentNode.left);
      if (currentNode.left.left == null && currentNode.left.right == null) {
        sum = sum + currentNode.left.key;
      }
    }
    if (currentNode.right != null) stack.push(currentNode.right);
  }
  return sum;
}

var vkg = new Node(1);
vkg.left = new Node(2);
vkg.right = new Node(3);
vkg.right.left = new Node(4);
vkg.right.right = new Node(5);
vkg.right.right.left = new Node(6);
vkg.left.left = new Node(7);
vkg.left.right = new Node(8);
vkg.left.right.right = new Node(9);
console.log(`Sum of left leaves is ${LeftLeavesSum(vkg)}`);
