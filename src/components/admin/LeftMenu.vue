<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="item in menus"
                       :key="item.id" :index="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="child in item.children" :key="child.id">
              <el-menu-item :index="child.id">{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  export default {
    name: 'LeftMenu',
    data () {
      return {
        menus: [
          {
            id: "1",
            name: "用户管理",
            index: "menu1",
            children: [
              {
                id: "1-1",
                name: "菜单1-1",
                index: "menu1-1",
              },
              {
                id: "1-2",
                name: "菜单1-2",
                index: "menu1-2",
                children: []
              }
            ]
          },
          {
            id: "2",
            name: "系统管理",
            index: "menu2",
            icon: "el-icon-document-copy",
            children: [
              {
                id: "2-1",
                name: "数据集管理2",
                index: "dataset2",
                children: []
              },
            ]
          },
          {
            id: "3",
            name: "权限设置",
            index: "menu3",
            children: []
          }
        ],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: function () {
      this.loadMenus()
    },
    methods: {
      loadMenus: function () {
        var _this = this
        this.$axios.get('/userMenus').then(resp => {
          if (resp && resp.status === 200) {
            _this.menus = resp.data
          }
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
