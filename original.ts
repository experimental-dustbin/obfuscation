async function sumUpTo(n: number) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

async function identity(i: any) {
  return new Promise((r, _r) => {
    return r(i);
  });
}