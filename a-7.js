function sumofnodes(k) {
  let leftcount = Math.pow(3, k - 5);

  let a = [];

  for (let b = 1; b <= k; b++) {
    a.push([]);
  }

  for (let b = 1; b <= leftcount; b++) {
    a[k - 1].push(b);
  }

  for (let b = k - 2; b >= 0; b--) {
    let k = 0;

    while (k < a[b + 1].length - 1) {
      a[b].push(a[b + 1][k] + a[b + 1][k + 1]);
      k += 2;
    }
  }

  let sum = 0;

  for (let b = 0; b < k; b++) {
    for (let j = 0; j < a[b].length; j++) {
      sum += a[b][j];
    }
  }

  return sum;
}

let k = 5;

console.log(`Sum of all nodes : ${sumofnodes(k)}`);
