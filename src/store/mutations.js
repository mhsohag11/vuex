export default {
    registered (st, user) {
        user.registered = true;
        const date = new Date();
        st.registrations.push({ id : user.id , name : user.name , registered : true , date: date.toLocaleDateString() });
    },
    unRegistered (st, payload) {
        const user = st.users.find( (user) => {
            return  user.id == payload.registration.id;
        });
        user.registered = false;
        st.registrations.splice(st.registrations.indexOf(payload.registration),1);
    }
}