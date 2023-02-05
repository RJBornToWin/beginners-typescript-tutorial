import { expect, it } from "vitest";

const createCache = () => {
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
    console.log(cache);
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.add("124", "Matt");
  cache.add("125", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
