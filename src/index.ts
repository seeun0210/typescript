class FxIterable<A> {
  constructor(private iterable: Iterable<A>) {}

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  map<B>(f: (a: A) => B): FxIterable<B> {
    const iterable = this.iterable;
    return new FxIterable({
      *[Symbol.iterator]() {
        for (const item of iterable) {
          yield f(item);
        }
      },
    });
  }

  filter(f: (a: A) => boolean): FxIterable<A> {
    const iterable = this.iterable;
    return new FxIterable({
      *[Symbol.iterator]() {
        for (const item of iterable) {
          if (f(item)) {
            yield item;
          }
        }
      },
    });
  }
}

//헬퍼 함수
function fx<A>(iterable: Iterable<A>): FxIterable<A> {
  return new FxIterable(iterable);
}

const mapped = fx([1, 2, 3, 4, 5]).map((x) => x * 2);

const mapped2 = fx(["a", "b", "c", "d", "e"])
  .map((x) => x.toUpperCase())
  .map((b) => b);
console.log([...mapped2]);
