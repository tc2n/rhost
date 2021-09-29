<template>
  <div class="file_info">
    <div class="file_info__icon" :class="[this.file_item.directory?'file_info__icon--folder':'file_info__icon--unknown']"></div>
    <div class="file_info__name">{{this.file_item.name}}</div>
    <div class="file_info__size">{{this.file_item.size}} bytes</div>
    <div class="file_info__buttons">
      <input type="button" :value="this.file_item.directory?'Open': 'Edit'" class="hollow_button no-mar"/>
      <input type="button" value="Rename" class="hollow_button no-mar" @click="rename()"/>
      <input type="button" value="Move" class="hollow_button no-mar" />
      <input type="button" value="Delete" class="hollow_button hollow_button--alert no-mar" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'RightDetails',
    props: {
        file_item: Object
    },
    methods: {
      rename(){
        var newVal=prompt('Please Enter a new name', this.file_item.name)
        this.$emit('rename', newVal)
      }
    },
    emits: ['rename']

}
</script>