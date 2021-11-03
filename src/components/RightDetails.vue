<template>
  <div class="file_info">
    <div class="file_info__icon" :class="[isDirectory(this.file_item)?'file_info__icon--folder':'file_info__icon--unknown']"></div>
    <div class="file_info__name">{{this.file_item[2]}}</div>
    <div class="file_info__size">{{this.file_item[1]}} bytes</div>
    <div class="file_info__buttons">
      <input type="button" :value="isDirectory(this.file_item)?'Open': 'Edit'" class="hollow_button no-mar" @click="isDirectory(this.file_item)? openFileButton: 'Edit'"/>
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
        file_item: Array
    },
    methods: {
      rename(){
        var newVal=prompt('Please Enter a new name', this.file_item[2])
        this.$emit('rename', newVal)
      },
    isDirectory(item){
        if(item[0][0]==='d'){
            return true;
        }
        return false;
    },
    openFileButton() {
        console.log('button clicked')
        this.$emit("open-file", null)
    },
    },
    emits: ['rename', 'open-file']

}
</script>