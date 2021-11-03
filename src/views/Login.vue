<template>
  <!-- <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  
  <div class="content">
    <div class="content__real">
      <img
        src="@/assets/img/illustration.png"
        alt="home logo"
        class="illustration"
      />
      <form class="form">
        <div class="textbox">
          <span class="textbox__icon textbox__icon--key"></span>
          <input
            type="text"
            placeholder="host"
            class="textbox__place"
            name="host"
            v-model="host"
          />
        </div>
        <div class="textbox">
          <span class="textbox__icon textbox__icon--user"></span>
          <input
            type="text"
            placeholder="username"
            class="textbox__place"
            name="username"
            v-model="username"
          />
        </div>
        <div class="textbox">
          <span class="textbox__icon textbox__icon--key"></span>
          <input
            type="password"
            placeholder="password"
            class="textbox__place"
            name="password"
            v-model="password"
          />
        </div>
        <!-- <input type="text" placeholder="server id" class="textbox" /> -->
        <!-- <input type="text" placeholder="password" class="textbox" /> -->
        <div class="form__submit">
          <input
            type="submit"
            value="Login"
            class="button button--filled"
            @click="login"
          />

          <input
            v-if="lastLogin"
            type="button"
            :value="lastUser"
            class="button button--empty"
            @click="loginPrevious"
          />
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
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      host: "",
      username: "",
      password: "",
      lastLogin: false,
      lastUser: ""
    };
  },

  methods: {
    login() {
      let buttonLogin = document.querySelector('.button');
      buttonLogin.classList.toggle('loading')
      axios
        .post(`http://localhost:8000/api/login`, {
          host: this.host,
          username: this.username,
          key: this.password,
        })
        .then((res) => {
          if (res.data === "logged" && res.status === 200) {
            this.$store.dispatch("auth", {
              host: this.host,
              username: this.username,
              password: this.password,
            });
            if (typeof Storage !== "undefined") {
              localStorage.setItem("host", String(this.host));
              localStorage.setItem("username", String(this.username));
            }
            buttonLogin.classList.toggle('loading')
            this.$router.push({ name: "Home", params: { path: "/" } });
          }
        })
        .catch((err) => {
          alert(`Error during Login: ${err}`);
          localStorage.clear();
          this.lastLogin = false;
          buttonLogin.classList.toggle('loading')
        });
    }, //login method
    loginPrevious(){
      let buttonEmpty = document.querySelector('button');
      buttonEmpty.classList.toggle('loading')
      console.log('clicked')
      let temppass = prompt("Enter your password:")
      axios
        .post(`http://localhost:8000/api/login`, {
          host: localStorage.getItem('host'),
          username: localStorage.getItem('username'),
          key: temppass,
        })
        .then((res) => {
          if (res.data === "logged" && res.status === 200) {
            this.$store.dispatch("auth", {
              host: localStorage.getItem('host'),
              username: localStorage.getItem('username'),
              password: temppass,
            });
            buttonEmpty.classList.toggle('loading')
            this.$router.push({ name: "Home", params: { path: "/" } });
          }
        })
        .catch((err) => {
          buttonEmpty.classList.toggle('loading')
          alert(`Error during Login: ${err}`);
        });
    }
  },

  mounted() {
    document.querySelector(".form").addEventListener("click", function (event) {
      event.preventDefault();
    });
    
    

    if (this.$store.state.islogged) {
      this.$router.push({ name: "Home", params: { path: "/" } });
    }
  },
  created() {
    if (localStorage.getItem("host") !== null) {
      this.lastLogin = true;
      this.lastUser="Login as " + localStorage.getItem("username")
    }
  },
};
</script>

