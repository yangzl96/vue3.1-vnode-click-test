import { h, defineComponent } from "vue";
import "./index.less";

export default defineComponent({
  name: "JinkeButton",
  props: {
    type: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  slots: ["icon"],
  setup(props, { attrs, slots, emit }) {
    const icon = slots.icon?.();
    return () =>
      h(
        "button",
        {
          class: {
            "jinke-button": true,
            [`jinke-button-${props.type}`]: props.type,
            "jinke-button-rounded": props.rounded,
          },
        },
        [h("span", null, icon), h("span", null, slots.default())]
      );
  },
});
