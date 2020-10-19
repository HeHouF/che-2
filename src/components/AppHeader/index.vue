<template>
  <div class="header">
    
  <div v-bind:title="msg">Wecome Vue </div>
<heade></heade>



  </div>


  
</template>

<script>
export default {

  data(){
    return {
      msg:'芜湖这都被你发现了👴'
    }
    


  }
}
</script>

<style scoped>
 .header {
    position: absolute;
    line-height: 70px;
    top: 0px;
    left: 0px;
    right: 0px;
  background-color: #324057
  
  }
  </style>