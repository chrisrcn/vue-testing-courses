import store from "@/store/index";

describe("Vuex", () => {
  beforeEach(() => {
    store.state.count = 0;
  });

  it("mutation increments count", () => {
    // commit mutation
    store.commit("increment");
    // test its effect
    expect(store.state.count).toBe(1);
  });
  it("mutation decrements count", () => {
    // commit mutation
    store.commit("decrement");
    // test its effect
    expect(store.state.count).toBe(-1);
  });
  it("mutation decrements count with getters", () => {
    // commit mutation
    store.commit("decrement");
    // test its effect
    expect(store.getters.getCount).toBe(-1);
  });
});
