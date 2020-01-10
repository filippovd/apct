import firebase from "firebase/app";

function normalizeCode(code) {
	return (code || "").split("/").join(".");
}

export default {
	state: {
		user: null
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		clearUser: state => (state.user = null)
	},
	actions: {
		async fetchUser({ dispatch, commit }) {
			// TODO
			try {
				//
				//const fbuser = firebase.auth().currentUser;
				const uid = await dispatch("getUid");
				const info = (
					await firebase
						.database()
						.ref(`/users/${uid}/info`)
						.once("value")
				).val();

				commit("setUser", {
					uid,
					info
				});
			} catch (e) {
				console.log("fetchUser", e);
				commit("setError", normalizeCode(e.code || "unknown"));
				throw e;
			}
		}
	},
	getters: {
		user: state => state.user
	}
};
