function findClosestValueInBst(tree, target) {
  return returnClosestValue(tree, target, Infinity);
}

function returnClosestValue(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }
  if (target > tree.value) {
    return returnClosestValue(tree.right, target, closest);
  }
  return returnClosestValue(tree.left, target, closest);
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
