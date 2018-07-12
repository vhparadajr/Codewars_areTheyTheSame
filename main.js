// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays
// have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


const comp = (array1, array2) => {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  return array1.map(x => x * x).sort().toString() === array2.sort().toString();
}
