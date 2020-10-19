<template>
  <div class="dialog">
      <el-dialog
      title="添加信息"
      :visible.sync="dialog.show"
      :close-on-click-modal ="false"
      :close-on-press-escape ="false"
      :modal-append-to-body ="false"
      >
    <div>
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
  </div>
  <div v-for="o in 3" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
    </div>

      </el-dialog>
  </div>
</template>

<script>
export default {
   name:'dialog',
   data(){
     return{
       formData:{
         type:'',
         income:'',
         expend:'',
         cash:'',
         remark:'',
         id:''

       },
       format_type_list : [
        'tix',
        'wwww',
]
       
     }



   },
   props:{

       dialog: Object 
   }
};
</script>

<style>

</style>