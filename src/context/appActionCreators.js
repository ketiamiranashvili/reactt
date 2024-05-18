import appActions from "./appActions";

export function signInUser(payload) {
    return{
        type: appActions.signInUser,payload,
    }
};

export function signOutUser() {
    return{
        type: appActions.signOutUser,
    }
}