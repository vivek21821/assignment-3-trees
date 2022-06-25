class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sum(vkg) {
  if (vkg == null) return 0;

  let result = vkg.value;

  let q = [];
  q.push(vkg);
  while (q.length != 0) {
    let count = q.length;

    let sum = 0;
    while (count-- > 0) {
      let vkg1 = q.shift();

      sum = sum + vkg1.value;

      if (vkg1.left != null) q.push(vkg1.left);
      if (vkg1.right != null) q.push(vkg1.right);
    }

    result = Math.max(sum, result);
  }
  return result;
}

let vkg = new Node(4);
vkg.left = new Node(5);
vkg.right = new Node(3);
vkg.left.left = new Node(2);
vkg.left.right = new Node(1);
vkg.right.right = new Node(7);
vkg.right.right.left = new Node(8);
vkg.right.right.right = new Node(9);

console.log("Maximum level sum is " + sum(vkg));
