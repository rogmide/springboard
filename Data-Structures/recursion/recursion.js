function count(n = 1) {
  if (n > 3) return;
  console.log(n);
  count(n + 1);
}

count();

function doubler(nums) {
  for (const n of nums) {
    if (Array.isArray(n)) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
}

doubler([5, 6, [7, 8, 9, [10, 11]]]);
