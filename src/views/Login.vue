<template>
  <!-- <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="content">
  <div class="content__real">
    <img src="@/assets/img/illustration.png" alt="home logo" class="illustration" />
    <form class="form">
      <div class="textbox">
        <span class="textbox__icon textbox__icon--key"></span>
        <input type="text" placeholder="host" class="textbox__place" name="host" v-model="host" />
      </div>
      <div class="textbox">
        <span class="textbox__icon textbox__icon--user"></span>
        <input type="text" placeholder="username" class="textbox__place" name="username" v-model="username" />
      </div>
      <div class="textbox">
        <span class="textbox__icon textbox__icon--key"></span>
        <input type="text" placeholder="password" class="textbox__place" name="password" v-model="password" />
      </div>
      <!-- <input type="text" placeholder="server id" class="textbox" /> -->
      <!-- <input type="text" placeholder="password" class="textbox" /> -->
      <div class="form__submit">
        <input type="submit" value="Login" class="button button--filled" @click="login"/>
        
    <router-link to="/home"><input
          type="button"
          value="Login as dcs030"
          class="button button--empty"
        /> </router-link>
      </div>
    </form>
    <button class="action">
      <span class="action__icon action__icon--terminal"></span>
      <span class="action__text">Terminal</span>
    </button>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',

  data(){
    return {
      host:'',
      username:'',
      password:''
    }
  },

  methods: {
    login(){
      axios.post(`http://localhost:8000/api/login`, {host:this.host,username:this.username,key:this.password}).then(
        res=> {
          if(res.data==='logged' && res.status===200){
            this.$store.dispatch('auth', {host: this.host, username: this.username, password: this.password})
            this.$router.push({name:'Home', params: {path: "/"}})
          }
        }
      ).catch(err=>console.log(`Error during Login function Execution ${err}`))
    },//login method
  },

  mounted(){
    document.querySelector('.form').addEventListener("click", function(event){event.preventDefault()})

    if(this.$store.state.islogged){
      this.$router.push({name: 'Home', params: {path:"/"}})
    }
  }
}
</script>
