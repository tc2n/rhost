<template>
    <li :key="item.id" v-for="item in file_items" class="file" @click="onClick(item.id)" :class="[active==item.id ? 'file--active': '']">
        <img :src="item.directory?folder_thumbnail:file_thumbnail" alt="icon" class="file__icon">
        <div class="file__name">{{item.name}}</div>
    </li>
</template>

// ../assets/img/unknown_file_thumbnail.svg
<script>
export default {
    name:'FileItem',
    props: {
        file_items:Array
    },
    methods:{
        onClick(id){
            this.active=id
            this.$emit('selected-id', id)
        }
    },
    data(){
        return {active:-1, folder_thumbnail: require('../assets/img/folder_thumbnail.svg'), file_thumbnail: require('../assets/img/unknown_file_thumbnail.svg')}
    },
    emits: ['selected-id']
}
</script>