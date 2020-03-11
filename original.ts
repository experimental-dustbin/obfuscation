async function sumUpTo(n: number) {
  let sum = await s(0, 1);
  for (let i = await s(0, 1); i < (await s(n, 1)); await s(i++, 1)) {
    for (const v of g(i, 1)) {
      sum += await v;
    }
  }
  return sum;
}

async function s<T>(i: T, counter: number): Promise<T> {
  if (counter < 0) {
    return new Promise((r, _r) => {
      return r(i);
    });
  } else {
    return await s(i, counter - 1);
  }
}

function* g<T>(i: T, counter: number) {
  if (counter < 0) {
    yield new Promise<T>((r, _r) => {
      return r(i);
    });
  } else {
    yield* g(i, counter - 1);
  }
}