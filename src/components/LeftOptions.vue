<template>
  <div class="options">
    <button class="action">
      <span class="action__icon action__icon--terminal"></span>
      <span class="action__text">Terminal</span>
    </button>
    <button class="action" @click="createNewFile()">
      <span class="action__icon action__icon--file"></span>
      <span class="action__text">New File</span>
    </button>
    <button class="action" @click="createNewFolder()">
      <span class="action__icon action__icon--folder"></span>
      <span class="action__text">New Folder</span>
    </button>
  </div>
</template>


<script>
export default {
    name: 'Options',
    data(){
        return {
            newFolder: {
                id:8,
                name:'New Folder',
                directory: true,
                size:0,
                permissions: '-r--r--r--'
            },
            newFile: {
                id:10,
                name:'newfile',
                directory: false,
                size:0,
                permissions: '-r--r--r--'
            }
        }
    },
    methods: {
        createNewFolder(){
            var name=prompt('Enter Folder Name','New Folder')
            this.newFolder.name=name
            this.newFolder.id+=1
            this.$emit('new-folder', this.newFolder)
        },
        createNewFile(){
            var name=prompt('Enter Folder Name','newfile')
            this.newFile.name=name
            this.newFile.id+=1
            this.$emit('new-file', this.newFile)
        }
    },
    emits: ['new-folder', 'new-file']
}
</script>