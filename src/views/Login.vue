<template>
  <!-- <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="content">
  <div class="content__real">
    <img src="@/assets/img/illustration.png" alt="home logo" class="illustration" />
    <form class="form">
      <div class="textbox">
        <span class="textbox__icon textbox__icon--user"></span>
        <input type="text" placeholder="server id" class="textbox__place" />
      </div>
      <div class="textbox">
        <span class="textbox__icon textbox__icon--key"></span>
        <input type="text" placeholder="password" class="textbox__place" />
      </div>
      <!-- <input type="text" placeholder="server id" class="textbox" /> -->
      <!-- <input type="text" placeholder="password" class="textbox" /> -->
      <div class="form__submit">
        <input type="submit" value="Login" class="button button--filled" />
        
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  // components: {
  //   HelloWorld
  // }
}
</script>
