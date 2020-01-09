<template>
    <div class="col-md-6">
        <h3>Registered User - {{ total }}</h3>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="registration in registrations" :key="registration.id">
                <th scope="row">{{ registration.id }}</th>
                <td>{{ registration.name }}</td>
                <td>{{ registration.date }}</td>
                <td><button @click="unregister(registration)" class="btn-danger">Unregister</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Registrations",
        computed : {
            ...mapGetters({
                registrations : 'registrations' ,
                total : 'totalRegistered'
            })
        },
        methods : {
            unregister(registration) {
                // this.$store.commit('unRegistered', registration);
                this.$store.commit({
                    type : 'unRegistered',
                    registration : registration
                });
            }
        }
    }
</script>

<style scoped>

</style>