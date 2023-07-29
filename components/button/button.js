import { h, defineComponent } from "vue";
import "./index.less";

export default defineComponent({
  name: "JinkeButton",
  props: {},
  setup(props, { attrs, slots, emit, expose }) {
    return () =>
      h(
        "button",
        {
          onClick: (e) => {
            console.log('trigger');
            emit('testClick', e)
          },
          class: {
            "jinke-button": true,
          },
        },
        [
          h("span", null, slots.default()),
        ]
      );
  },
});
