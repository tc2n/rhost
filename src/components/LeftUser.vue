<template>
  <div class="loggedin_as">
    <div class="loggedin_as__content">
      <div class="connto">Connected to</div>
      <div class="connection">
        <span
          title="Connection Active"
          class="indicator indicator--green"
        ></span
        ><span>{{$store.state.username}}</span>
      </div>
      <div class="conntime">Welcome!</div>
      <input type="button" value="Log out" class="hollow_button" @click="logout"/>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'User',
    
    methods: {
      logout(){
        axios.get(`http://localhost:8000/api/logout`).then(()=>{
          this.$store.dispatch('logout')
          this.$router.push({path:'/'})
        })
        this.$store.dispatch('logout')
        this.$router.push({path:'/'})
      }
    }
}
</script>