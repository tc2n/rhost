<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li class="tabs__item active">
        <span class="tabs__item__icon tabs__item__icon--dir"></span
        ><span class="tabs__item__text">Directory</span>
      </li>
      <li class="tabs__item">
        <span class="tabs__item__icon tabs__item__icon--apps"></span
        ><span class="tabs__item__text">Apps & Libraries</span>
      </li>
      <li class="tabs__item">
        <span class="tabs__item__icon tabs__item__icon--git"></span
        ><span class="tabs__item__text">git options</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
    name: 'Tabs'
}
</script>