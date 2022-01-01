import { createStore } from "vuex";

import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default createStore({
  state: { searchClicked: false, counter: 1, intersecting: false },
  mutations,
  actions,
  getters,
});
