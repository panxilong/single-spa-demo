import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import Antd from "ant-design-vue";
// @ts-ignore
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
// @ts-ignore
if (!window.singleSpaNavigate) {
  createApp(App).use(Antd).mount("#app");
}

const appOptions = {
  el: "#vue",
  render() {
    return h(App);
  },
};

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions,
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
