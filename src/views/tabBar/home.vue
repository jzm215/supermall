<template>
	<div>
		<!-- 我是首页 -->
		<div>
			<div @click="a">新闻1</div>
			<div @click="b">新闻2</div>
			<router-view/>
		</div>
		<div>{{$store.state.num}}</div>
		<input type="button" @click="add" value="+"/>
		<input type="button" @click="jian" value="-"/>
		<input type="button" @click="addFive" value="+5"/>
	</div>
</template>

<script>
	export default({
		data(){
			return{
				
			}
		},
		methods:{
			a(){
				this.$router.push("/home/newOne")
			},
			b(){
				this.$router.push("/home/newtwo")
			},
			add(){
				this.$store.commit("add")
			},
			jian(){
				this.$store.commit("jianNum")
			},
			addFive(){
				this.$store.dispatch("addFive",{
					a : 1,
					b : 2
				}).then(res =>{
					alert(res)
				})
			}
		}
	})
</script>

<style>
</style>
