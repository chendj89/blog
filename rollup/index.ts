export default () => {
  return {
    name: "vite-cc",
    transform(src: string, id: string) {
      return src;
    },
  };
};
