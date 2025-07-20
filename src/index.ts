class FxIterable<A> {
  private iterable: Iterable<A>;

  constructor(iterable: Iterable<A>) {
    this.iterable = iterable;
  }

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  map<B>(fn: (a: A) => B): FxIterable<B> {
    const mapped = Array.from(this.iterable).map(fn);
    return new FxIterable(mapped);
  }
}

function fx<A>(iterable: Iterable<A>): FxIterable<A> {
  return new FxIterable(iterable);
}

const mapped = new FxIterable([1, 2, 3, 4, 5]).map((x) => x * 2);

console.log(mapped);

const mapped2 = fx(["a", "b", "c", "d", "e"])
  .map((x) => x.toUpperCase())
  .map((b) => b);
console.log(mapped2);
