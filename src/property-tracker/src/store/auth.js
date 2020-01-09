/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import firebase from "firebase/app";

function normalizeCode(code) {
	return (code || "").split("/").join(".");
}

export default {
	actions: {
		async login({ dispatch, commit }, { email, password }) {
			try {
				await firebase
					.auth()
					.signInWithEmailAndPassword(email, password);
			} catch (e) {
				commit("setError", normalizeCode(e.code));
				throw e;
			}
		},
		async signUp({ dispatch, commit }, { email, password, name }) {
			try {
				await firebase
					.auth()
					.createUserWithEmailAndPassword(email, password);

				const uid = await dispatch("getUid");
				//
				await firebase
					.database()
					.ref(`/users/${uid}/info`)
					.set({
						balance: 100,
						name: name
					});
			} catch (e) {
				console.log("sign-up error", e);
				commit("setError", normalizeCode(e.code));
				throw e;
			}
		},
		async getUid() {
			const user = firebase.auth().currentUser;
			return user ? user.uid : null;
		},
		async logout({ dispatch, commit }) {
			try {
				await firebase.auth().signOut();
			} catch (e) {
				commit("setError", normalizeCode(e.code));
				throw e;
			}
		}
	}
};
