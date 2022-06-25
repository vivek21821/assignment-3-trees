class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

var vkg = null;

function treeBFS() {
  var h = height(vkg);
  var i;
  for (i = 1; i <= h; i++) currentLevel(vkg, i);
}

function treeDFS(vkg) {
  if (vkg == null) {
    return;
  }
  console.log(vkg.value);
  treeDFS(vkg.left);
  treeDFS(vkg.right);
}

function height(vkg) {
  if (vkg == null) return 0;
  else {
    var leftHeight = height(vkg.left);
    var rightHeight = height(vkg.right);

    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
}

function currentLevel(vkg, level) {
  if (vkg == null) return;
  if (level == 1) console.log(vkg.value + " ");
  else if (level > 1) {
    currentLevel(vkg.left, level - 1);
    currentLevel(vkg.right, level - 1);
  }
}

vkg = new Node(1);
vkg.left = new Node(2);
vkg.right = new Node(3);
vkg.left.left = new Node(4);
vkg.left.right = new Node(5);

console.log("BFS:");
treeBFS();
console.log("DFS:");
treeDFS(vkg);
