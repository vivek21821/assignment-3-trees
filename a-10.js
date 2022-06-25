class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function nodes(vkg, isOdd) {
  if (vkg == null) return;

  if (isOdd == true) console.log(vkg.value + " ");

  nodes(vkg.left, !isOdd);
  nodes(vkg.right, !isOdd);
}

function nodes2(value) {
  let node = new Node(value);
  return node;
}

let vkg = nodes2(11);
vkg.left = nodes2(3);
vkg.right = nodes2(1);
vkg.left.left = nodes2(3);
vkg.left.right = nodes2(9);
vkg.right.right = nodes2(5);
nodes(vkg, true);
