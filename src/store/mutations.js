export default {
    userSignOut(state) {
        state.isLoggedIn = false;
    },
    userLogIn(state) {
        state.isLoggedIn = true;
    },
}