<template>
    <div class="navigation">
        <button class="navigation__button navigation__button--back"></button>
        <button class="navigation__button navigation__button--forward"></button>
        <button class="navigation__button navigation__button--up"></button>
      </div>
      <div class="address">
        <span class="address__icon"></span>
        <ul class="address__list">

          <li :key="index" v-for="(item, index) in fullPath" class="address__list__item">
            <span class="address__list__item--text">{{item=="" ? 'home' : item}}</span>
            <span class="address__list__item--icon"></span>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
    name: 'AddressBar',
    props: {
        fullPath: Array
    },
    mounted(){
        console.log(this.fullPath)
    }
}
</script>