<template>
  <div class="paper">主区 

   <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width=''>
    </el-table-column>
    <el-table-column
      prop="iphone"
      label="电话"
      width="180">
    </el-table-column>
  </el-table>
  </div>

  
</template>

<script>
export default {
  name:'paper',
  data(){
   return{
       tableData:[{
         date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iphone:'137267430'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          iphone:'110'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          iphone:'120'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          iphone:'1233211234'

       }]

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
};
</script>

<style scoped>

 .paper{
    background-color:slategray
 }


  </style>