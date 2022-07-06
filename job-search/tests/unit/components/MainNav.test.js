import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({ company: "Test Company" });
    expect(wrapper.text()).toMatch("Test Company");
  });
});
