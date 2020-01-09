import M from "materialize-css/dist/js/materialize";
export default {
	install(Vue) {
		Vue.prototype.$toast = function(html) {
			M.toast({ html });
		}
	}
};
