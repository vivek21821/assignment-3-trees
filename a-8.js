class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

let a;

function nodes(value) {
  let node1 = new Node(value);
  return node1;
}

function nodes2(root, x) {
  if (root === null) return 0;
  let ls = nodes2(root.left, x);
  let rs = nodes2(root.right, x);
  let sum = ls + rs + root.value;

  if (sum === x) a++;

  return sum;
}

function countSum(root, x) {
  if (root === null) return 0;
  a = 0;
  let ls = nodes2(root.left, x);
  let rs = nodes2(root.right, x);
  if (ls + rs + root.value === x) a++;
  return a;
}

let root = nodes(9);
root.left = nodes(8);
root.right = nodes(4);
root.left.left = nodes(1);
root.left.right = nodes(7);
root.right.left = nodes(5);
root.right.right = nodes(7);

let x = 3;

console.log(`Count : ${countSum(root, x)}`);
