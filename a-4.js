class Node {
  constructor() {
    this.value = 0;
    this.left = null;
    this.right = null;
  }
}
let vkg = null;
function searchLeaves(vkg) {
  if (vkg == null) return;

  if (vkg.left == null && vkg.right == null) {
    console.log(vkg.value + " ");
    return;
  }

  if (vkg.left != null) searchLeaves(vkg.left);

  if (vkg.right != null) searchLeaves(vkg.right);
}

function newNode(value) {
  var vkg2 = new Node();
  vkg2.value = value;
  vkg2.left = null;
  vkg2.right = null;
  return vkg2;
}

vkg = newNode(9);
vkg.left = newNode(2);
vkg.left.left = newNode(10);
vkg.left.right = newNode(8);
vkg.left.right.left = newNode(14);
vkg.left.right.right = newNode(12);
vkg.right = newNode(6);
vkg.right.right = newNode(12);
vkg.right.right.left = newNode(5);

console.log("Leaves are");
searchLeaves(vkg);
