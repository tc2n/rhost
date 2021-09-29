<template>
  <div class="main_content"> <!--Black Box-->
            <div class="top"> <!--Address Bar-->
                <div class="navigation">
                    <button class="navigation__button navigation__button--back"></button>
                    <button class="navigation__button navigation__button--forward"></button>
                    <button class="navigation__button navigation__button--up"></button>
                </div>
                <div class="address">
                    <span class="address__icon"></span>
                    <ul class="address__list">
                        <li class="address__list__item">
                            <span class="address__list__item--text">home</span>
                            <span class="address__list__item--icon"></span>
                        </li>
                        <li class="address__list__item">
                            <span class="address__list__item--text">project</span>
                            <span class="address__list__item--icon"></span>
                        </li>
                        <li class="address__list__item">
                            <span class="address__list__item--text">code</span>
                            <span class="address__list__item--icon"></span>
                        </li>
                    </ul>
                </div>
                <div class="switch-button">
                    <input class="switch-button__checkbox" type="checkbox"/>
                    <label class="switch-button__label" for=""><span class="switch-button__label--span">List</span></label>
                </div>
            </div>
            <div class="left"> <!--Global Options-->
                    <div class="minimize">
                        <span class="minimize__circle minimize__circle--red"></span>
                        <span class="minimize__circle minimize__circle--yellow"></span>
                        <span class="minimize__circle minimize__circle--green"></span>
                    </div>
                    <User />
                    <Tabs />
                    <Options @new-folder="createNewFolder" @new-file="createNewFolder" /> 
            </div>
            <div class="files_space"> <!--File Explored & Editor-->
                <ul class="files">
                    <FileItem :file_items="file_items" @selected-id="update_selected" />
                </ul>
            </div>
            <div class="right"> <!--File Options-->
                <RightDetails :file_item="selected_file(this.selected_id)" @rename="rename"/>
                <Permissions :file_item="selected_file(this.selected_id)" @update-permission="update_permissions"/>
            </div>
        </div>
</template>


<script>
import FileItem from '../components/FileItem.vue'
import RightDetails from '../components/RightDetails.vue'
import Permissions from '../components/RightPermissions.vue'
import User from '../components/LeftUser.vue'
import Tabs from '../components/LeftTabs.vue'
import Options from '../components/LeftOptions.vue'

export default {
    name:'Home',

    components: {
        FileItem,
        RightDetails,
        Permissions,
        User,
        Tabs,
        Options
    },

    methods: {
        update_selected(id){
            this.selected_id=id;
        },
        selected_file(id){
            return this.file_items.filter((file)=>file.id===id)[0]
        },
        update_permissions(newVal){
            this.file_items.forEach((item)=>{if(item.id==this.selected_id){item.permission=newVal}})
        },
        rename(newVal){
            this.file_items.forEach((item)=>{if(item.id==this.selected_id){item.name=newVal}})
        },
        createNewFolder(details){
            this.file_items.push(details)
        }
    },

    data(){
        return {
            file_items:[],
            selected_id: 1
        }
    },

    created() {
        this.file_items=[
            {id:1, name: 'using_files', directory:true, size:10003, permission: '-rw-r--r--'},
            {id:2, name: 'Empty Foder', directory:true, size:1234, permission: '-rw-r--r--'},
            {id:3, name: 'File2', directory:true, size:12367, permission: '-rw-rwxr--'},
            {id:4, name: 'normal', directory:true, size:10223, permission: '-rw-r--rw-'},
            {id:5, name: 'top secret', directory:true, size:13653, permission: '-rw-rw-rw-'},
            {id:6, name: 'heyman', directory:true, size:10903, permission: '-rw-r--r--'},
            {id: 7, name:'basics.cpp', directory:false, size:193, permission: '-rw-rw-r-x'}
        ]
    }
}
</script>