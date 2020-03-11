async function q(n: number) {
  let a = await s(0, 1);
  for (let i = await s(0, 1); i < (await s(n, 1)); await s(i++, 1)) {
    for (const v of g(i, 2)) {
      a += await v;
    }
  }
  return a;
}

async function s<T>(i: T, c: number): Promise<T> {
  if (c < 0) {
    return new Promise((r, _r) => {
      return r(i);
    });
  } else {
    return s(i, c - 1);
  }
}

function* g<T>(i: T, c: number): Generator<Promise<T>> {
  if (c < 0) {
    yield new Promise<T>((r, _r) => {
      return r(i);
    });
  } else {
    yield* g(i, c - 1);
  }
}

async function main() {
  console.log(await q(4));
}
main();