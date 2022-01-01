export default {
  search(context) {
    context.commit("search");
  },
  leftClick(context) {
    context.commit("leftClick");
  },
  rightClick(context) {
    context.commit("rightClick");
  },
  inter(context, payload) {
    context.commit("inter", payload);
  },
};
