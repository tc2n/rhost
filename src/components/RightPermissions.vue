<template>
    <div class="permissions">
                    <div class="permissions__heading">
                        <span class="permissions__heading--text">Permissions</span>
                        <input type="button" value="save" class="simple_button" @click="savePermissions()">
                    </div>
                    <div class="permissions__names">
                        <div class="permissions__names__user">
                            <span>user</span>
                            <ul class="permissions__names__types">
                                <li @click="changePermission(1)" class="permissions__names__type" :class="[this.file_item.permission[1]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[1]!='-' && this.current_permissions[1]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[1]=='-' && this.current_permissions[1]!='-' ? 'permissions__names__type--toset':'']">r</li>
                                <li @click="changePermission(2)" class="permissions__names__type" :class="[this.file_item.permission[2]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[2]!='-' && this.current_permissions[2]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[2]=='-' && this.current_permissions[2]!='-' ? 'permissions__names__type--toset':'']">w</li>
                                <li @click="changePermission(3)" class="permissions__names__type" :class="[this.file_item.permission[3]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[3]!='-' && this.current_permissions[3]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[3]=='-' && this.current_permissions[3]!='-' ? 'permissions__names__type--toset':'']">e</li>
                            </ul>
                        </div>
                        <div class="permissions__names__group">
                            <span>group</span>
                            <ul class="permissions__names__types">
                                <li @click="changePermission(4)" class="permissions__names__type" :class="[this.file_item.permission[4]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[4]!='-' && this.current_permissions[4]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[4]=='-' && this.current_permissions[4]!='-' ? 'permissions__names__type--toset':'']">r</li>
                                <li @click="changePermission(5)" class="permissions__names__type" :class="[this.file_item.permission[5]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[5]!='-' && this.current_permissions[5]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[5]=='-' && this.current_permissions[5]!='-' ? 'permissions__names__type--toset':'']">w</li>
                                <li @click="changePermission(6)" class="permissions__names__type" :class="[this.file_item.permission[6]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[6]!='-' && this.current_permissions[6]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[6]=='-' && this.current_permissions[6]!='-' ? 'permissions__names__type--toset':'']">e</li>
                            </ul>
                        </div>
                        <div class="permissions__names__others">
                            <span>others</span>
                            <ul class="permissions__names__types">
                                <li @click="changePermission(7)" class="permissions__names__type" :class="[this.file_item.permission[7]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[7]!='-' && this.current_permissions[7]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[7]=='-' && this.current_permissions[7]!='-' ? 'permissions__names__type--toset':'']">r</li>
                                <li @click="changePermission(8)" class="permissions__names__type" :class="[this.file_item.permission[8]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[8]!='-' && this.current_permissions[8]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[8]=='-' && this.current_permissions[8]!='-' ? 'permissions__names__type--toset':'']">w</li>
                                <li @click="changePermission(9)" class="permissions__names__type" :class="[this.file_item.permission[9]!=='-'? 'permissions__names__type--active':'', this.file_item.permission[9]!='-' && this.current_permissions[9]=='-' ? 'permissions__names__type--tounset':'', this.file_item.permission[9]=='-' && this.current_permissions[9]!='-' ? 'permissions__names__type--toset':'']">e</li>
                            </ul>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    name: 'Permissions',
    props: {
        file_item: Object
    },
    watch: {
        file_item: function(newVal){
            this.current_permissions=newVal.permission
        }
    },
    data() {
        return {
            current_permissions:this.file_item.permission
        }
    },
    methods: {
        changePermission(current){
            var x=['r','w','x']
            var temp=this.current_permissions.split('')
            if(this.current_permissions[current]==='-'){
                //currently unset, we have to set it
                temp[current]=x[(current-1)%3]
                this.current_permissions=temp.join('')
            } else {
                temp[current]='-'
                this.current_permissions=temp.join('')
            }
        },
        savePermissions(){
            this.$emit('update-permission', this.current_permissions)
        }
    },
    emits: ['update-permission']

}
</script>