<template>
  
</template>

<script>
export default {
   name:'anzhuang',
   data(){
     return{
       tableData:[]

       };

     },
     created(){
       this.getPorflie();
     },
     methods:{
       getPorflie(){
       this.$axios.get("").then(res =>{
         console.log()
       })
       .catch(err => console.log(err)) ;
     }
     }
};
</script>

<style>

</style>