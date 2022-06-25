class Node {
  constructor(val) {
    this.left = null;
    this.value = val;
    this.right = null;
  }
}

let vkg = null;

const insert = (vkg, value) => {
  if (vkg == null) {
    let node = new Node(value);
    vkg = node;
    return vkg;
  }
  if (value <= vkg.value) {
    vkg.left = insert(vkg.left, value);
  } else if (value > vkg.value) {
    vkg.right = insert(vkg.right, value);
  }
  return vkg;
};

const search = (vkg, value) => {
  if (vkg == null) {
    return false;
  }
  if (vkg.value == value) {
    return true;
  } else if (value < vkg.value) {
    return search(vkg.left, value);
  }
  return search(vkg.right, value);
};

const findMaxVal = (vkg) => {
  if (vkg == null) {
    return null;
  }
  if (vkg.right == null) {
    return vkg.value;
  }
  return findMaxVal(vkg.right);
};

const remove = (vkg, value) => {
  if (vkg == null) {
    return null;
  }
  if (value < vkg.value) {
    vkg.left = remove(vkg.left, value);
  } else if (value > vkg.value) {
    vkg.right = remove(vkg.right, value);
  } else {
    if (vkg.left == null && vkg.right == null) {
      return null;
    }
    if (vkg.left && vkg.right) {
      let temp = findMaxVal(vkg.left);
      vkg.value = temp;
      vkg.left = remove(vkg.left, temp);
    } else {
      if (vkg.left !== null) {
        return vkg.left;
      }
      if (vkg.right !== null) {
        return vkg.right;
      }
    }
  }
  return vkg;
};

const preOrder = (vkg) => {
  if (vkg == null) {
    return;
  }
  console.log(vkg.value);
  preOrder(vkg.left);
  preOrder(vkg.right);
};

const inOrder = (vkg) => {
  if (vkg == null) {
    return;
  }
  inOrder(vkg.left);
  console.log(vkg.value);
  inOrder(vkg.right);
};

const postOrder = (vkg) => {
  if (vkg == null) {
    return;
  }
  postOrder(vkg.left);
  postOrder(vkg.right);
  console.log(vkg.value);
};

vkg = insert(vkg, 9);
vkg = insert(vkg, 12);
vkg = insert(vkg, 8);
vkg = insert(vkg, 6);
vkg = insert(vkg, 3);
vkg = insert(vkg, 1);
vkg = insert(vkg, 8);
vkg = insert(vkg, 11);
vkg = insert(vkg, 9);

preOrder(vkg);
console.log("------End of PreOrder------");
inOrder(vkg);
console.log("------End of InOrder------");
postOrder(vkg);
console.log("------End of PostOrder------");

console.log(search(vkg, 5));
console.log(search(vkg, 1011));

vkg = remove(vkg, 5);
preOrder(vkg);
console.log("----------------");
vkg = remove(vkg, 4);
preOrder(vkg);
