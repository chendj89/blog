import { h, defineComponent, type PropType } from "vue";
export interface Link {
  /**
   * 链接名称
   */
  name: string;
  /**
   * 描述
   */
  desc:string;
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
  children?:Omit<Link,"desc">[];
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
  setup(props, { slots }) {
    return () => {
      return h(
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
                  "img",
                  {
                    class: `${props.className}-icon`,
                    tabindex: "0",
                    src: item.icon,
                  },
                  item.url
                );
              }),
            ]
          )
        )
      );
    };
  },
});
