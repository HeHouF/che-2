<template>
  <div class="food">
<el-table v-if="tableData.length > 0"
    :data="tableData"
    style="width: 100%">
<el-table-column
prop="date"
label="支出"
width="170">
</el-table-column>
<el-table-column
prop="type"
label="收支类型"
width="">
</el-table-column>
<el-table-column
prop="cash"
label="账号现金"
width="170">
</el-table-column>
<el-table-column
prop="remark"
label="备注"
width="220">
</el-table-column>
</el-table> 
  </div>
</template>

<script>
export default {
 name:'food',
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
       this.$axios.get(" ").then(res =>{
         console.log()
       })
       .catch(err => console.log(err)) ;
     }
     }
}
</script>

<style>

</style>