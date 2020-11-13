<template>
	<div class="tabBarList">
		<tab-bar-item path="/home" activeColor ="blue"> 
			<img slot='icon' src="@/assets/img/tabBar/home.png">
			<img slot='icon_active' src="@/assets/img/tabBar/home_active.png">
			<div slot='text'>首页</div>
		</tab-bar-item>
		<tab-bar-item path="/fenlei" activeColor ="blue">
			<img slot='icon' src="@/assets/img/tabBar/class.png">
			<img slot='icon_active' src="@/assets/img/tabBar/class_active.png">
			<div slot='text'>分类</div>
		</tab-bar-item>
		<tab-bar-item path="/user" activeColor ="blue">
			<img slot='icon' src="@/assets/img/tabBar/user.png">
			<img slot='icon_active' src="@/assets/img/tabBar/user_active.png">
			<div slot='text'>我的</div>
		</tab-bar-item>
	</div>
</template>

<script>
	import tabBarItem from "./tabBarItem.vue"
	export default{
		data(){
			return{
				
			}
		},
		components:{
			tabBarItem
		}
	}
</script>

<style>
	@import url("../../assets/css/base.css");
	.tabBarList{
		width: 100%;
		height: 49px;
		display: flex;
	}
	tab-bar-item{
	}
</style>
