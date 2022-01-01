export default {
  search(state) {
    state.searchClicked = !state.searchClicked;
  },
  leftClick(state) {
    --state.counter;
  },
  rightClick(state) {
    ++state.counter;
  },
  inter(state, payload) {
    state.intersecting = payload;
  },
};
