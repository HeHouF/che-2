<template>
  <div class="navbar">

   <!-- <el-row class="menu_page">左侧
  <el-col>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#409eff">
      <router-link to="/Appmian">
      <el-menu-item index="0">
        <i class="fa fa-margin fa-server"></i>
          <span slot="title">首页</span>
      </el-menu-item>
      
      <template v-for="item in items">
        <el-submenu v-if="item.children" :index="item.path" :key="item.path">
          <template slot="title">
            <i :class="'fa fa-margin' +item.icon"></i>
            <span slot="title">{{item.name }}</span>
          </template>
          <router-link v-for="(citem,cindex) in item.childern" 
          ：to="ciem.path"
          :key="cindex">
          </router-link>
          <el-menu-item :index="citem.path">
            <span slot="title">{{citem.name}}</span>
          </el-menu-item>
        </el-submenu>
      </template>
      </router-link>
  
    </el-menu>
  </el-col>
</el-row> -->
<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="Layout"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>数据管理</template>
						<el-menu-item index="paper">用户列表</el-menu-item>
						<el-menu-item index="shpper">商家列表</el-menu-item>
						<el-menu-item index="food">食品列表</el-menu-item>
						<el-menu-item index="">订单列表</el-menu-item>
						<el-menu-item index="">管理员列表</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>添加数据</template>
						<el-menu-item index="addShop">添加商铺</el-menu-item>
						<el-menu-item index="addGoods">添加商品</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>图表</template>
						<el-menu-item index="visitor">用户分布</el-menu-item>
						<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>编辑</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="vueEdit">文本编辑</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>

<!-- <ul><router-link to="/">安装</router-link>
  <li></li>
    <br> 
    <br><router-link to="">介绍</router-link>
    <br>
    <br>基础
    <br>
    <br>
    <a href=""></a>
    
     <li>1</li>
     <br>
     <br>
     <li>2</li>
      <br>
    <br>
     <li>3</li>
      <br>
    <br>
     <li>4</li>
     <br>
    <br>
     <li>5</li>
     <br>
    <br>
     <li>6</li>
     <br>
    <br>
     <li>7</li>
     <br>
    <br>
     <li>8</li>
     <br>
    <br>
     <li>9</li>
     <br>
    <br><router-link to="">进阶</router-link>
    <br>
    <br>
    <li>1</li>
     <br>
    <br>
     <li>2</li>
      <br>
    <br>
     <li>3</li>
      <br>
    <br>
     <li>4</li>
     <br>
    <br>
    <li>5</li>
    <br>
    <br>
    <br>
    <br>
    

 
</ul> -->
  </div>
</template>

<script>


export default {
  name :'left-menu', 
  data(){
    return{

      items: [
        {
          icon: 'fa-money',
          name:'资金管理',
          pash:'fund',
          children:[

            {
              path:'fundlist',
              name:'资金流水'
            }
          ]
        },
        {
          icon: 'fa-asterisk',
          name:'信息管理',
          pash:'info',
          children:[

            {
              path:'infoshow',
              name:'个人信息'
            }
          ]
        }
      ]
    }

  } 
}
</script>

<style scoped>
.navbar {
     position: absolute;
    top: 70px;
    left: 0px;
    bottom: 0px;
    right: 0px;  /* 距离右边0像素 */
    padding: 0px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    /* background-color: red;  */
  display: inline-block; }
  
  </style>