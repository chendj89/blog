import { h, defineComponent, type PropType } from "vue";
export interface Link {
  /**
   * 链接名称
   */
  name: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 链接
   */
  url: string;
  /**
   * 子列表
   */
  children?: Link[];
}
interface Props {
  /**
   * 组件类名
   */
  className?: string;
  /**
   * 数据
   */
  link?: Link;
}
export default defineComponent({
  name: "IconGroup",
  props: {
    /**
     * 名称
     */
    className: {
      type: String,
      default: () => "iconGroup",
    },
    /**
     * 链接数据
     */
    link: {
      type: Object as PropType<Link>,
      required: true,
    },
  },
  setup(props: Props) {
    return () =>
      h(
        "div",
        {
          class: props.className,
        },
        h(
          "div",
          { class: `${props.className}-content` },
          h(
            "div",
            {
              class: `${props.className}-drag`,
            },
            [
              props.link?.children?.map((item) => {
                return h(
                  "div",
                  {
                    class: `${props.className}-icon`,
                    tabindex: "0",
                    src: item.icon,
                  },
                  "按钮"
                );
              }),
            ]
          )
        )
      );
  },
});
