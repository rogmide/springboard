function hash(key, arrayLen) {
  const H_PRIME = 31;
  hash = Array.from(key).reduce(
    (acc, char) => acc + H_PRIME + char.charCodeAt(),
    0
  );
  return hash % arrayLen;
}

class HashMap {
  constructor() {
    this._items = [];
  }

  set(k, v) {
    const HashKey = hash(k, 10);
    this._items[HashKey] = v;
  }

  get(k) {
    const hashedKey = hash(k, 10);
    return this._items[hashedKey];
  }
}
