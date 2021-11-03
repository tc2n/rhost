<template>
  <div class="main_content">
    <!--Black Box-->
    <div class="top">
      <!--Address Bar-->
      <AddressBar :fullPath="this.full_path"/>
      <div class="switch-button">
        <input class="switch-button__checkbox" type="checkbox" />
        <label class="switch-button__label" for=""
          ><span class="switch-button__label--span">List</span></label
        >
      </div>
    </div>
    <div class="left">
      <!--Global Options-->
      <div class="minimize">
        <span class="minimize__circle minimize__circle--red"></span>
        <span class="minimize__circle minimize__circle--yellow"></span>
        <span class="minimize__circle minimize__circle--green"></span>
      </div>
      <User />
      <Tabs />
      <Options @new-folder="createNewFolder" @new-file="createNewFolder" />
    </div>
    <div class="files_space">
      <!--File Explored & Editor-->
      <ul class="files">
        <FileItem
          :file_items="file_items"
          @selected-id="update_selected"
          @open-file="fileclicked"
        />
      </ul>
    </div>
    <div class="right">
      <RightDetails
        v-if="selected_id !== null"
        :file_item="this.file_items[this.selected_id]"
        :index="this.selected_id"
        @rename="rename"
        @open-file="fileclicked"
      />
      <!-- <Permissions
      v-if="selected_id !== null"
        :file_item="this.file_items[this.selected_id]"
        @update-permission="update_permissions"
      /> -->
    </div>
  </div>
</template>


<script>
import FileItem from "../components/FileItem.vue";
import RightDetails from "../components/RightDetails.vue";
// import Permissions from "../components/RightPermissions.vue";
import User from "../components/LeftUser.vue";
import Tabs from "../components/LeftTabs.vue";
import Options from "../components/LeftOptions.vue";
import AddressBar from "../components/AddressBar.vue";
import axios from "axios";

export default {
  name: "Home",

  components: {
    FileItem,
    RightDetails,
    // Permissions,
    User,
    Tabs,
    Options,
    AddressBar
  },

  methods: {
    update_selected(id) {
      this.selected_id = id;
    },
    selected_file(id) {
      return this.file_items[id];
    },
    update_permissions(newVal) {
      this.file_items.forEach((item) => {
        if (item.id == this.selected_id) {
          item.permission = newVal;
        }
      });
    },
    rename(newVal) {
      this.file_items.forEach((item) => {
        if (item.id == this.selected_id) {
          item.name = newVal;
        }
      });
    },
    createNewFolder(details) {
      this.file_items.push(details);
    },

    filerender() {
      let s = this.$route.params.path;
      axios
        .post("http://localhost:8000/api/list", { path: s })
        .then((res) => {
          if (res.data.type !== "file") {
            this.$store.dispatch("previouspath", {
              previouspath: this.$route.params.path,
            });
            this.file_items = res.data.data;
          } else {
            this.$store.dispatch("filedata", { filedata: res.data.content });
            this.$router.push({ name: "editor" });
          }
        })
        .catch((err) => {
          console.log('Error occured'+String(err))
          throw err;
        });
    },
    async fileclicked(index) {
      let loader = this.$loading.show({container: null});
      this.$store.dispatch("previouspath", {
        previouspath: this.$route.params.path,
      });
      let promise = new Promise((resolve, reject) => {
        let sub;
        if (this.$route.params.path === "/") {
          sub =
            this.$route.params.path +
            this.file_items[index][2];
        } else {
          sub =
            this.$route.params.path +
            "/" +
            this.file_items[index][2];
        }

        axios
          .post("http://localhost:8000/api/list", { path: sub })
          .then((res) => {
            if (res.data.type === "file") {
              this.$store.dispatch("filedata", { filedata: res.data.content });
              this.$store.dispatch("previouspath", { previouspath: sub });
              this.$router.push({ name: "editor" });
            } else {
              this.$router.push({ name: "Home", params: { path: sub } });
            }
            loader.hide()
          })
          .catch((e) => {
            loader.hide()
            reject(`error occured ${e}`)});

      });
      await promise;
    },
  },

  data() {
    return {
      file_items: [],
      selected_id: null,
      full_path: this.$store.state.previouspath.split('/')
    };
  },

  mounted() {
    if (!this.$route.params.path) {
      this.$router.push({ name: "Home", params: { path: "/" } });
    }
    this.filerender();
  },

  watch: {
    $route(to, from) {
      console.log(`to: ${to} to from: ${from}`);
      this.full_path=this.$route.params.path.split('/')
      this.filerender();
    },
  },
};
</script>

// ls -lghio