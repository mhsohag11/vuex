export default {
    unregister (st) {
        return st.users.filter( (user) => !user.registered );
    },
    registrations (st) {
        return st.registrations;
    },
    totalRegistered (st) {
        return st.registrations.length;
    },
}