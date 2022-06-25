class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

let vkg;

function treeHeight(node) {
  if (node == null) {
    return 0;
  } else {
    let leftHeight = treeHeight(node.left);
    let rightHeight = treeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

vkg = new Node(5);
vkg.left = new Node(2);
vkg.right = new Node(15);
vkg.right.left = new Node(45);
vkg.right.right = new Node(75);
vkg.right.left.left = new Node(12);
vkg.right.left.right = new Node(10);
vkg.right.right.left = new Node(11);
vkg.right.right.right = new Node(23);
console.log("Height/Depth of the tree is : " + treeHeight(vkg));
