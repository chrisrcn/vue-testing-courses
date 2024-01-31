import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "../../src/App.vue";
import AboutView from "@/views/AboutView.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  describe("App", () => {
    it("renders a component via routing", async () => {
      const router = createRouter({
        history: createWebHistory(),
        routes: [
          {
            path: "/about",
            name: "About",
            component: AboutView,
          },
        ],
      });
      await router.push("/about");
      await router.isReady();
      const wrapper = mount(App, {
        global: {
          plugins: [router],
        },
      });
      expect(wrapper.findComponent(AboutView).exists()).toBe(true);
    });
  });
});
