<template>
    <div class="col-md-6">
        <h3>Registration Here</h3>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td><button @click="clickForReg(user)" class="btn-primary">Register</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        computed : {
            users () {
                return this.$store.getters.unregister;
            },
        },
        methods : {
            clickForReg (user) {
                //this.$store.commit('registered' , user);
                this.$store.dispatch('do_register' , user)
            }
        }
    }
</script>

<style scoped>

</style>