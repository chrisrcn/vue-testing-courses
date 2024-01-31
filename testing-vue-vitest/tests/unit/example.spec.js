import { mount } from "@vue/test-utils";
import App from "@/App";

describe("App.vue", () => {
  let wrapper;
  let helloWorldCpnt;
  beforeEach(() => {
    wrapper = mount(App);
    helloWorldCpnt = wrapper.getComponent({ name: "HelloWorld" });
  });

  it("Renders text: Welcome to Your Vue.js App", () => {
    expect(wrapper.text()).toContain("Welcome to Your Vue.js App");
  });

  it("Check if paragraph exists", () => {
    expect(wrapper.find("p")).toBeTruthy();
  });

  it("Renders greeting Hello World in child", () => {
    expect(helloWorldCpnt).toBeDefined();
  });

  it("Should contain the fullname of the user", () => {
    const name = "John Doe";
    expect(wrapper.text()).toContain(name);
  });
  it("Should contains the setted computed values", () => {
    const testValues = {
      firstName: "Jane",
      lastName: "Doe",
    };
    expect(App.computed.fullName.call(testValues)).toContain("Jane Doe");
  });

  it("Renders message Hello World from the props", () => {
    expect(helloWorldCpnt.props("greeting")).toBe("Hello World");
  });

  it("Increments counter when button is clicked", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.text()).toContain("Clicks: 1");
  });

  it("Increments emitted counter value when button is clicked", async () => {
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    console.log("wrapper.emitted()", wrapper.emitted());
    expect(wrapper.emitted().count[0][0]).toBe(1);
    expect(wrapper.emitted().count[0][1]).toBe("Hello");
    expect(wrapper.emitted().count[1][0]).toBe(2);
    expect(wrapper.emitted().count[1][1]).toBe("Hello");
  });
});
