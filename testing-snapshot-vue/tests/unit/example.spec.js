import { mount } from "@vue/test-utils";
import App from "@/App.vue";

it("should render correctly", () => {
  const wrapper = mount(App);
  expect(wrapper.element).toMatchSnapshot();
});
