export default {
	state: {
		lastError: null
	},
	mutations: {
		setError(state, error) {
			state.lastError = error;
		},
		clearError(state) {
			state.lastError = null;
		}
	},
	getters: {
		lastError: state => state.lastError
	}
}
