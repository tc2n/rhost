<template>
  <li
    :key="index"
    v-for="(item, index) in file_items"
    class="file"
    @click="onClick(index)"
    @dblclick="openFile(index)"
    :class="[active == index ? 'file--active' : '']"
  >
    <img
      :src="isDirectory(item) ? folder_thumbnail : file_thumbnail"
      alt="icon"
      class="file__icon"
    />
    <div class="file__name">{{ item[2] }}</div>
  </li>
</template>

// ../assets/img/unknown_file_thumbnail.svg
<script>
export default {
  name: "FileItem",
  props: {
    file_items: Array,
  },
  methods: {
    onClick(id) {
      this.active = id;
      this.$emit("selected-id", id);
    },
    openFile(id) {
        this.$emit("open-file", id)
    },
    isDirectory(item){
        if(item[0][0]==='d'){
            return true;
        }
        return false;
    },
    
  },
  data() {
    return {
      active: -1,
      folder_thumbnail: require("../assets/img/folder_thumbnail.svg"),
      file_thumbnail: require("../assets/img/unknown_file_thumbnail.svg"),
    };
  },
  emits: ["selected-id", "open-file"],
  
};
</script>