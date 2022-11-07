import Auth from "../Auth";

export default {
    state: () => ({
        auth: Auth.check(),
    }),
    getters: {
        auth(state) {
            return state.auth;
        }
    },
    actions: {
        setAuth(context, value) {
            context.commit('setAuth', value);
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.auth = payload;
        },
    },
}
