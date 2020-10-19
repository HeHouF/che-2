<template>

  <div>
    <!-- 使用子组件,使用-，不建议使用驼峰 -->
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-main></app-main>
    <div class="rightContainer">


   <router-view></router-view>


    </div>



  </div>
</template>

<script>
  // 会导入./AppHeader下面的index.vue组件
  import AppHeader from "./AppHeader"
  import AppNavbar from "./AppNavbar"
  // import AppMain from "./AppMain"

  // 导入子组件，缩写格式 AppHeader: AppHeaderAppMain
  export default {
    components: { AppHeader, AppNavbar,  }  // 有s
  };
</script>

<style scoped>

.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180%);
  height: calc(100% - 71px);
  overflow: auto;

}
  </style>