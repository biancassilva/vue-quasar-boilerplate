<template>
  <p>Lista de usuários: {{usersData}}</p>
</template>
<script>
import UserService from '../../services/UserService'
export default {
  data () {
    return {
      userData: ''
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      this.UserService.list()
        .then(response => { this.usersData = response })
    }
  }
}
</script>