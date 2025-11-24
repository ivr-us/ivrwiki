import DefaultTheme from "vitepress/theme";
import Popover from "./components/Popover.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Popover", Popover);
  },
};
