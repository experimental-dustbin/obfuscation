async function sumUpTo(n: number) {
  let sum = await identity(0, 1);
  for (let i = await identity(0, 1); i < (await identity(n, 1)); await identity(i++, 1)) {
    sum += await identity(i, 1);
  }
  return sum;
}

async function identity<T>(i: T, counter: number): Promise<T> {
  if (counter < 0) {
    return new Promise((r, _r) => {
      return r(i);
    });
  } else {
    return await identity(i, counter - 1);
  }
}