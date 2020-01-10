import Vue from "vue";
import Vuex from "vuex";
import error from "./error";
import auth from "./auth";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		error,
		auth,
		user
	}
});
