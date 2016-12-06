function flatten (arr) {
  // exception handling, non array arg, null, empty array
  if (!Array.isArray[arr]) return arr;
  if (arr == null || arr.length < 1) return arr;

  arr = arr.toString().split(',').map(Number);
  return arr;
}
