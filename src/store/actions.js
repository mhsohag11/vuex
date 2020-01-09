export default {
    do_register ({commit} , user) {
        setTimeout( () => {
            commit('registered' , user );
        } , 2000);
    }
}