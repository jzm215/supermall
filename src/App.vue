<template>
  <div id="app">
	<div class="tabBar">
		<tab-bar></tab-bar>
	</div>
	<!-- <h2>{{$store.state.num}}</h2>
	<button @click="add">+</button>
	<button @click="jian">-</button> -->
	<router-view/>
  </div>
</template>
<script>
	import tabBar from "./components/tabBar/tabBarList.vue"
	export default{
		name:"App",
		data(){
			return{
				// abc:"22"
			}
		},
		components:{
			tabBar
		},
		methods:{
			add(){
				this.$store.commit({
					type:"addNum",
					newNum:5
				})
			},
			jian(){
				this.$store.commit("jianNum")
			}
		}
	}
</script>
<style>
	.tabBar{
		width: 100%;
		height: 49px;
		background-color: #EEEEEE;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		/* display: flex; */
	}
</style>
