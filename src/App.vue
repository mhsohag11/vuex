<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <registration></registration>
        <registrations></registrations>
      </div>
    </div>
  </div>
</template>

<script>
  import Registration from './components/Registration';
  import Registrations from './components/Registrations';
export default {
  name: 'app',
  components: {
    Registration,
    Registrations,
  },
  computed : {
    unRegisteredUser () {
      return this.users.filter( (user) => !user.registered);
    }
  },

}
</script>

